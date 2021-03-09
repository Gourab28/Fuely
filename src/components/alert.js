import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Fade from 'react-reveal/Fade';

const contentStyle = {
  boxShadow: "3px 3px 5px 6px #ccc",
  borderRadius: "8px 8px",
};
const susStyle = {
  boxShadow: "3px 3px 5px 6px #ccc",
  borderRadius: "8px 8px",
  marginTop: "18px",
};
function PriceConfirm (props) {
  return (
    <>
    <Fade right>
     <Alert style={contentStyle} severity="info">Prices may vary from outlet to outlet within a city/town/sales area.</Alert>
    </Fade>
    <Fade left>
     <Alert style={susStyle} severity="success">The prices are revised at 6 AM every morning at petrol pumps.</Alert>
     </Fade>
    </>
    );
}

export default PriceConfirm;