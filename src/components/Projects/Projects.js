import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/game.png";
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
              title="Fighting Game"
              description="Fighting Game is a 2D fighting game featuring a diverse roster of characters, dynamic stages, and a variety of moves. Designed for both casual players and competitive gamers, it offers an accessible yet challenging gameplay experience."
              ghLink="https://github.com/Ayushghosh02/Game.git"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
