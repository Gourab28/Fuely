import React from "react";
import {Container, Row} from 'react-bootstrap';
import { Divider } from 'antd';
import Fade from 'react-reveal/Fade';
import * as Icon from "react-feather";
import ReactGa from "react-ga";

 function Footer (props) {
   return(
  <>
    <Container>
    <Fade right>
    <Divider dashed />
    </Fade>
    <Row className="footer_bug">
        <button
              className="btn"
              style={{
                textAlign: "center",
                color: "rgb(255, 48, 108)",
                backgroundColor: "rgba(225, 48, 108, 0.1)",
                marginTop: 5,
                width: 180,
                fontSize: 10,
                alignContent: "center",
                fontFamily: "notosans",
              }}
              onClick={() =>
                ReactGa.event({
                  category: "System",
                  action: "Bug Report",
                })
              }
            >
              <Icon.Code size="15px" />
              &ensp; Report a Bug
            </button>
    </Row>
    </Container>
  </>
     );
 }
export default Footer;