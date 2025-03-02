import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import StudyAce from "../../Assets/Projects/StudyAce.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StudyAce}
              isBlog={false}
              title="StudyAceApp"
              description="Study Ace is a full-stack e-learning platform designed to provide an interactive learning experience. It features secure authentication, role-based access, course enrollment, video lectures, PDFs, quizzes, and payment integration. Optimized database queries and caching have improved performance, reducing load times by 20%. The platform ensures a responsive UI and intuitive navigation for a seamless user experience."
              ghLink="https://github.com/Ayushghosh02/StudyAceApp-Frontend.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="GymGo "
              description="GymGo is a React-based fitness web application that provides access to 1000+ exercise routines using real-time API data. It features a responsive UI, an optimized search bar for quick exercise lookup, and seamless navigation for an enhanced user experience."
              ghLink="https://github.com/Ayushghosh02/GymGo.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
