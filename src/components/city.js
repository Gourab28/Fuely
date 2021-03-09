import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import { Alert } from '@material-ui/lab';
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Time from "./time";
import {Helmet} from "react-helmet";
import Fade from 'react-reveal/Fade';


function City(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
 const URL = "https://time-api-eight.vercel.app/";
  const [info,setInfo] = useState("");
  
  //Style
  const contentStyle = {
  boxShadow: "3px 3px 5px 6px #ccc",
  borderRadius: "8px 8px",
  marginTop: "12px",
  overflowX: "hidden"
};
const susStyle = {
  boxShadow: "3px 3px 5px 6px #ccc",
  borderRadius: "8px 8px",
  marginTop: "18px",
  overflowX: "hidden"
};
  //props const
  const zone = props.match.params.url.toUpperCase().split("-").join(" ");
  const district = props.match.params.district;
  const titledistrict = props.match.params.district.split("+").join(" ");
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  //Variable
  let url = props.match.params.url;
  let durl = props.match.params.district.toUpperCase().split("-").join("+");
  
  function capitalizeTheFirstLetterOfEachWord(words) {
   var separateWord = words.toLowerCase().split(' ');
   for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
      separateWord[i].substring(1);
   }
   return separateWord.join(' ');
}
  useEffect(() => {
    fetch("https://api.cretic.co.in/api/price/"+url+"/"+durl)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
useEffect(() => {
    fetch(URL,{method: "get"})
     .then((response) => response.json())
     .then ((data) => {
       setInfo({...data});
     });
  }, []);
  if (error) {
    return <div>
            <Helmet>
             <title>Petrol & Diesel Price In {capitalizeTheFirstLetterOfEachWord(titledistrict)} | {capitalizeTheFirstLetterOfEachWord(zone)}</title>
    <meta name="keywords" content="Petrol & Diesel Price In,Petrol & Diesel Price In {capitalizeTheFirstLetterOfEachWord(titledistrict)},Petrol Price In {capitalizeTheFirstLetterOfEachWord(titledistrict)},Petrol & Diesel Price In {capitalizeTheFirstLetterOfEachWord(titledistrict)} | {capitalizeTheFirstLetterOfEachWord(zone)}" />
             </Helmet>
            <Container>
              <Alert severity="error">{error.message}</Alert>
            </Container>
            </div>;
  } else if (!isLoaded) {
    return <div style={{
      textAlign: "center",
      marginTop: "50%"
    }}>
    <Helmet>
    <title>Petrol & Diesel Price In {capitalizeTheFirstLetterOfEachWord(titledistrict)} | {capitalizeTheFirstLetterOfEachWord(zone)}</title>
    <meta name="keywords" content="Petrol & Diesel Price In,Petrol & Diesel Price In {capitalizeTheFirstLetterOfEachWord(titledistrict)},Petrol Price In {capitalizeTheFirstLetterOfEachWord(titledistrict)},Petrol & Diesel Price In {capitalizeTheFirstLetterOfEachWord(titledistrict)} | {capitalizeTheFirstLetterOfEachWord(zone)}" />
    </Helmet>
    <Container>
     <div class="loader"></div>
    </Container>
    </div>;
  } else {
    return (
    <div>
    <Helmet>
    <title>Petrol & Diesel Price In {capitalizeTheFirstLetterOfEachWord(titledistrict)} | {capitalizeTheFirstLetterOfEachWord(zone)}</title>
    <meta name="keywords" content="Petrol & Diesel Price In,Petrol & Diesel Price In {capitalizeTheFirstLetterOfEachWord(titledistrict)},Petrol Price In {capitalizeTheFirstLetterOfEachWord(titledistrict)},Petrol & Diesel Price In {capitalizeTheFirstLetterOfEachWord(titledistrict)} | {capitalizeTheFirstLetterOfEachWord(zone)}" />
    </Helmet>
    <Container>
        {items.map((item,index) => (
        <Container className="city_card_c">
        <p>{info.date}</p>
        <Fade bottom>
         <div className="district_name">
           <h1>{item.district}</h1>
             <h2>{capitalizeTheFirstLetterOfEachWord(zone)}</h2>
         </div>
         <Row>
         <Col>
         <span>
         {item.products[0].productName}
         </span>
         <br/>
        <span>₹ {item.products[0].productPrice} /ltr</span>
        <br/>
        <span>₹ {item.products[0].priceChange} {item.products[0].priceChangeSign === "+" ? (
        <ArrowDropUpIcon
               style={{
                   color: "#FF6347",
                   verticalAlign: "middle", }} />
                      ) : (
                <ArrowDropDownIcon
                   style={{
                    color: "#008000",
                    verticalAlign: "middle",
                     }}/>
                      )}
         </span>
        <br/>
         </Col>
         <Col>
         <span>{item.products[1].productName}</span>
         <br/>
        <span>₹ {item.products[1].productPrice} /ltr </span>
         <br/>
        <span>₹ {item.products[1].priceChange} {item.products[1].priceChangeSign === "+" ? (
             <ArrowDropUpIcon
               style={{
                   color: "#FF6347",
                   verticalAlign: "middle", }} />
                      ) : (
                <ArrowDropDownIcon
                   style={{
                    color: "#0B803C",
                    verticalAlign: "middle",
                     }}/>
                     )}
         </span>
         </Col>
         </Row>
         </Fade>
        </Container>
        ))}
      <Fade bottom>
       <Alert style={susStyle} severity="success">The prices are revised at 6 AM every morning at petrol pumps.</Alert>
       </Fade>
       <Fade bottom>
       <Alert style={contentStyle} severity="info">Prices may vary from outlet to outlet within a city/town/sales area.</Alert>
      </Fade>
    </Container>
   </div>
    );
  }
}
export default City;