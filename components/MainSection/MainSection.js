import React from "react";
import { ImageBaseUrl } from "../../services/config";
import { Row, Col } from "reactstrap";
import "./MainSection.scss";

function MainSection() {
  return (
    <div className="main-section">
      <div className="first-section text-center">
        <h2 className="mainSectionHead">What we do</h2>
        <p className="mainSectionText">
          At Recko, we’re rehashing the transaction lifecycle so that businesses
          can manage it effortlessly. Here’s why market leaders across
          industries are moving to Recko.
        </p>
      </div>
      <Row className="second-section mx-0">
        <Col md={6}>
          <h2 className="mainSectionHead">
            Reconcile millions of transactions in minutes
          </h2>
          <p className="mainSectionText border-text">
            Recko is built on AI-powered algorithms that are designed for speed,
            scaling, and extraordinary accuracy. Reconcile millions of
            transactions in a matter of minutes, and the entire process from
            ingestion to reconciliation takes less than an hour.
          </p>
          <p className="mainSectionText">
            “Recko has helped us manage large volumes of data seamlessly and
            thus carry out our core functions of revenue assurance.”
          </p>
          <div>
            <span className="mainSectionHead">Jatin Mazalcar,</span> Chief
            Financial Officer at Meesho
          </div>
        </Col>
        <Col md={6}>
          <img src={`${ImageBaseUrl}Volume.svg`} className="w-100" />
        </Col>
      </Row>
      <Row className="third-section mx-0">
        <Col md={6}>
          <img src={`${ImageBaseUrl}Instant.svg`} className="w-100" />
        </Col>
        <Col md={6}>
          <h2 className="mainSectionHead">Get up and running instantly</h2>
          <p className="mainSectionText border-text">
            You can set up Recko in less than 24 hours; no complex programming
            or integrations needed. Upload all your data in any format you want
            (.xls, csv, etc.) and get started right away. Our intuitive user
            interface ensures that you’re ready to reconcile your data
            immediately.
          </p>
          <p className="mainSectionText">
            “Recko's expertise reflects in the tools and approach they follow.”
          </p>
          <div>
            <span className="mainSectionHead">Prerna Thakur,</span> Investor
            Relations at Dunzo
          </div>
        </Col>
      </Row>
      <Row className="fourth-section mx-0">
        <Col md={6}>
          <h2 className="mainSectionHead">Your data is secure with us</h2>
          <p className="mainSectionText border-text">
            We understand how valuable your data is and we protect it by using
            state-of-the-art security measures. From auditing every single data
            change to using 256-bit encryption for all data transfers, we weed
            out every single vulnerability to give you an extremely secure
            environment.
          </p>
          <p className="mainSectionText">
            “We are excited to partner with Recko and leverage the cutting edge
            technology they are building to solve problems of the future.”
          </p>
          <div>
            <span className="mainSectionHead">Jatin Mazalcar,</span> Chief
            Financial Officer at Meesho
          </div>
        </Col>
        <Col md={6}>
          <img src={`${ImageBaseUrl}Security.svg`} className="w-100" />
        </Col>
      </Row>
      <Row className="fifth-section mx-0">
        <Col md={6}>
          <img src={`${ImageBaseUrl}RiskExposure.svg`} className="w-100" />
        </Col>
        <Col md={6}>
          <h2 className="mainSectionHead">Minimise your risk exposure</h2>
          <p className="mainSectionText border-text">
            A small error in managing digital transactions can expose you to
            major risks, whether they be financial losses, business risks, or
            compliance issues. With Recko, every single transaction is
            reconciled through its lifetime, and any anomalies are highlighted
            instantly.
          </p>
          <p className="mainSectionText">
            “Recko has enabled us to accurately track every order and its
            associated financials end to end.”{" "}
          </p>
          <div>
            <span className="mainSectionHead">Prerna Thakur,</span> Investor
            Relations at Dunzo
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MainSection;
