import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import disney1 from "../../Assets/Projects/disney1.jpeg";
import todo from "../../Assets/Projects/todo.jpg";
import amazon from "../../Assets/Projects/amazon.jpeg";
import google from "../../Assets/google1.jpg";
import covid from "../../Assets/Projects/covid.jpg";
import netflix from "../../Assets/Projects/netflix.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on recently. I focused on
          <span className="purple"> Social Media </span> and using my work
          tools, which I'm comfortable with making{" "}
          <span className="purple">Clones of these Generally known Sites</span>{" "}
          , but of course I haven't worked on all the features .I based myself
          mainly on the front side, authentication and the purchase part
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={google}
              isBlog={false}
              title="Google clone"
              description="A simple clone of Google built with Next.js and TailwindCss (Responsive, SSR React, Pagination),
              
just some features we can use like google search bar i have works by google API with google cloud"
              link="https://google-2-0-yt-fawn.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disney1}
              isBlog={false}
              title="Disney + Clone"
              description="The Clone disney with Redux ,React.js ,Styled Component and Firebase ,
              so we can view resume and see movie trailers and use search bar
"
              link="https://disneyplus-clone-f8077.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon Clone"
              description="The Clone Amazon BUilt With Next.js, Complete Frontend & API,Checkout page with Redux + Google sign in with NextAuth Authentication  authentication is functional so we can display and buy any amazon product"
              link="https://amazon-clone-kappa-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="The Netflix clone built with React.js and css Style , randomly show netflix movies so you can see any trailer"
              link="https://netflix-clone-2b64c.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid-19 Tracker"
              description="Build a COVID-19 Tracker with REACT JS  (React Hooks and Material UI)."
              link="https://covid-19-tracker-pearl-omega.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={true}
              title="Todo List"
              description="A simple todo list, this is my first individual project that i worked on when i started with React.js and Firebase."
              link="https://todo-ixdnqxxm7-khaledghaffarii.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
