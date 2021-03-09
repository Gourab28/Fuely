import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import petrol from '../img/petrol.svg';
import diesel from '../img/diesel.png';
import city from '../img/city.png';

const List = (props) => {

  return (
    <>
     <Container>
     <div className="intro text-center">
       <Row>
         <Col>
        <div style={{"border": "1px solid #fff","borderRadius": "25px","height": "auto", "boxShadow": "5px 10px #6190e8"}}>
         <img style={{"height" : "48px", "width" : "48px"}} src={petrol} alt="Petrol Pricing" />
          <p style={{"whiteSpace" : "nowrap"}}>Petrol</p>
         </div>
         </Col>
         <Col>
         <div style={{"border": "1px solid #fff","borderRadius": "25px","height": "auto", "boxShadow": "5px 10px #6190e8"}}>
           <img style={{"height" : "48px", "width" : "48px"}} src={diesel} alt="Diesel Pricing" />
           <p style={{"whiteSpace" : "nowrap"}}>Diesel</p>
          </div>
         </Col>
         <Col>
        <div style={{"border": "1px solid #fff","borderRadius": "25px","height": "auto", "boxShadow": "5px 10px #6190e8"}}>
          <img style={{"height" : "48px", "width" : "48px"}} src={city} alt="city wise pricing"/>
          <p style={{"whiteSpace" : "nowrap"}}>City</p>
         </div>
         </Col>
       </Row>
      </div>
     </Container>
    </>
  );
}

export default List;