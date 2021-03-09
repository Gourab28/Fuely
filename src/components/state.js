import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Helmet} from 'react-helmet';
import {Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function State(props) {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [state, setState] = useState([]);
  const Title = props.match.params.id.split("-").join(" ");
 
 ///////////////////////////////////////
 /////    Props States page   /////////
 /////////////////////////////////////
 const url = props.match.params.id;
 ////////////////////////////////////
 ///////   capitalize    //////
 function capitalizeTheFirstLetterOfEachWord(words) {
   var separateWord = words.toLowerCase().split(' ');
   for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
      separateWord[i].substring(1);
   }
   return separateWord.join(' ');
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};
const newsCard = {
  background: 'red',
}
const titleStyle = {
 textTransform: "capitalize",
 justifyContent: "center",
};

const cardStyle = {
  marginBottom: "11px",
};
    
  useEffect(() => {
    getState();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  let id = props.match.params.id;

  const getState = () => {
    axios
      .get('https://api.cretic.co.in/api/price/'+id)
      .then((response) => {
        setIsLoaded(true);
        setState({ hits: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>
           <div class="loader"></div>
           </div>;
  } else {
  return (
    <div className="FAQ">
    <Helmet>
     <title>Petrol Diesel in {capitalizeTheFirstLetterOfEachWord(Title)} | Check Latest Petrol Diesel Rates</title>
     <meta name="description" content="Petrol Diesel Price In {capitalizeTheFirstLetterOfEachWord(Title)} Today | Dynamic Fuel Price Method. Petrol And Diesel Rates Are Revised At 06:00 A.M. Every Day." />
     <meta property="og:type" content="website" />
     <meta property="og:title" content="Petrol Diesel in {capitalizeTheFirstLetterOfEachWord(Title)} | Check Latest Petrol Diesel Rates" />
     <meta
          property="og:description"
          content="Petrol Diesel Price In {capitalizeTheFirstLetterOfEachWord(Title)} Today | Dynamic Fuel Price Method. Petrol And Diesel Rates Are Revised At 06:00 A.M. Every Day."
          />
          <meta property="og:url" content={"https://fuely.cretic.co.in/state/"+url} />
    </Helmet>
    <Container>
    <div className="states_page_title">
      <h3 style={{color: "#fff",textTransform: "capitalize"}}>{Title}</h3>
     </div>
     <Fade bottom>
        {state.hits &&
          state.hits.map((item, index) => (
           <div key={index} className="">
           <Row>
            <div class="col">
            <Link to={"/"+url+"/"+item.district.split(" ").join("+").toLowerCase()}>
            <Button style={cardStyle} fullWidth="true" variant="outlined" color="primary">
                {item.district} <ArrowForwardIcon />
            </Button>
           </Link>
            </div>
         </Row>
       </div>
          ))}
        </Fade>
    </Container>
    </div>
  );
  }
}

export default State;