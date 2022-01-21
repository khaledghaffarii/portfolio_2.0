import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Link } from "react-router-dom";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Khaled Ghaffari </span>
            from <span className="purple"> Tunis, Tunisia.</span>
            <br />I am a junior graduate in Embedded Systems and Web Development
            at{" "}
            <span
              className="purple"
              style={{
                padding: 6,
              }}
            >
              <a
                className="purple"
                href= "https://3wa.fr"
              
              >
                3w academy
              </a>
            </span>
            Center
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
           
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 17)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Khaled</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
