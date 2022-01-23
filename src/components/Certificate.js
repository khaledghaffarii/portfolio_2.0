import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import certif from "../Assets/CERTIF3WA2.png";
import certifLicence from "../Assets/CERTILICENCE.png";
import certifJava from "../Assets/certifjava.png";

const Certificate = () => {
  return (
    <Container fluid className="resume-section">
      <Row
        style={{
          justifyContent: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 20,
        }}
      >
        <h5>
          University Degree in <span className="purple">Embedded Systems</span>
        </h5>
        <img
          src={certifLicence}
          style={{ width: 600, padding: 20, marginBottom: 50 }}
          alt="home pic"
          className="img-fluid"
        />{" "}
        <h5>
          Certification in <span className="purple">Full Stack PHP</span> by the
          3w Academy
        </h5>
        <img
          src={certif}
          style={{ width: 600, padding: 20, marginBottom: 50 }}
          alt="home pic"
          className="img-fluid"
        />
        <h5>
          Certificate in <span className="purple">Java Programming</span>
        </h5>
        <img
          src={certifJava}
          style={{ width: 600, padding: 20, marginBottom: 50 }}
          alt="home pic"
          className="img-fluid"
        />
      </Row>
    </Container>
  );
};

export default Certificate;
