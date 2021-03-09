import  React, { useState , useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import * as Icon from 'react-feather';

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
const contentStyle = {
  marginRight: '5px',
};
    return(
 <>
     <Container>
     <div className="time">
        <Row className="text-center">
          <Col><Icon.Clock size="18" style={contentStyle} />
          <span>{date.toLocaleTimeString()}</span></Col>
          <Col><Icon.Calendar size="18" style={contentStyle} />{date.toLocaleDateString()}</Col>
        </Row>
      </div>
      </Container>
  </>
    )
}

export default DateTime;