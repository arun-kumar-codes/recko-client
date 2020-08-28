import React from "react";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { ImageBaseUrl } from "../../services/config";
import './Footer.scss'
function Footer() {
  return (
    <div className="footer">
      <Row className="mx-0 footer-top">
        <Col md={3}>
          <img src={ImageBaseUrl + "recko-cropped-logo.svg"} className="logo"/>
        </Col>
        <Col md={3}>
          <h5>Recko</h5>
          <ListGroup>
            <ListGroupItem className="border-0 px-0 ">About Us</ListGroupItem>
            <ListGroupItem className="border-0 px-0">Team</ListGroupItem>
            <ListGroupItem className="border-0 px-0">Careers</ListGroupItem>
            <ListGroupItem className="border-0 px-0">In the News</ListGroupItem>
            <ListGroupItem className="border-0 px-0">
              Press Releases
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <h5>Legal</h5>
          <ListGroup>
            <ListGroupItem className="border-0 px-0 ">
              Terms Of Use
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0">
              Privacy Policy
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <h5>Follow Us</h5>
          <div className="d-flex">
              <img src={ImageBaseUrl+"linkedin.svg"} className="pr-3"/>
              <img src={ImageBaseUrl+"twitter.svg"}/>
          </div>
        </Col>
      </Row>
      <Row className="mx-0 footer-bottom justify-content-between">
        <Col md={6}>© recko</Col>
        <Col md={6} className="px-0 text-right">All rights reserved</Col>
      </Row>
    </div>
  );
}

export default Footer;
