import React, {useEffect, useState, Suspense} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import {Container} from "react-bootstrap";
import ReactGa from "react-ga";
import Fade from 'react-reveal/Fade';

function States (props) {
  const [statesData,setStatesData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  
  //Load all states
  useEffect(() => {
    async function getStatesData() {
      const data = await axios.get(
        "https://api.cretic.co.in/api/states"
      );
      var modifiedData = Object.keys(data.data).map((key) => {
        return {
          id: data.data[key].toLowerCase(),
          title: data.data[key].split("-").join(" "),
        };
      });
      setIsLoaded(true);
      setStatesData(modifiedData);
    }

    getStatesData();
  }, []);

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
    <>
    <Container>
    <div style={{backgroundColor: "#143642", marginTop: "14px",textAlign: "center", padding: "18px",boxShadow:  "3px 3px 5px 6px #ccc",borderRadius: "16px",marginBottom: "12px"}}>
      <h2 style={{color: "#fff"}}>
       Choose State</h2>
      </div>
     {statesData.map ((item,index) => {
        return (
        <Fade bottom>
          <div key="index" className="text-center">
              <Link to={"/state/"+item.id}>
              <button
              className="btn"
              style={{
              textAlign: "center",
              color: "#fff",
              backgroundColor: "#235789",
             marginTop: 5,
            width: "90%",
            fontSize: 18,
            alignContent: "center",
            fontFamily: "notosans",
           }}
            onClick={() =>
                ReactGa.event({
                category: "Facebook button Clicked",
               action: +item.title,
                })
              }
            >
           {item.title}
          </button>
              </Link>
          </div>
        </Fade>
          );
      })}
    </Container>
    </>
    );
   }
}
export default States;