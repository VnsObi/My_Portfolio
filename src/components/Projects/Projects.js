import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/Loading.gif";
import academy from "../../Assets/Projects/snap.jpg";
import bitsOfCode from "../../Assets/Projects/Loading.gif";

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
              imgPath={academy}
              isBlog={false}
              title="Academy Web Template"
              description="The created web template is a pre-designed webpage structure that can be customized to fit the needs of a specific website or project. It typically includes elements such as a header, footer, navigation menu, and content areas, along with design elements such as colors, typography, and images. "
              ghLink="https://github.com/VnsObi/Tech-Institute"
              demoLink="https://vnstech.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Project in Dev"
              description="Project still in development stage... To be uploaded soon "
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Project in Dev"
              description="Project still in development stage... To be uploaded soon"
              ghLink="#"
              demoLink="#"              
            />
          </Col>     
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
