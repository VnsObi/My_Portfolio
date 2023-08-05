import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/Loading.gif";
import academy from "../../Assets/Projects/snap.jpg";
import cantos from "../../Assets/Projects/cantos.jpg";
import tech from "../../Assets/Projects/tech.jpg";
import flex from "../../Assets/Projects/flex.jpg";
import herobiz from "../../Assets/Projects/herobiz.jpg";
import biz from "../../Assets/Projects/biz.jpg";
import dash from "../../Assets/Projects/dash.jpg";
import logistics from "../../Assets/Projects/logis.jpg";
import medlab from "../../Assets/Projects/medlab.jpg";
import archi from "../../Assets/Projects/archi.jpg";
import kitchen from "../../Assets/Projects/kitchen.jpg";

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
              imgPath={cantos}
              isBlog={false}
              title="Cantos gods NFT Project"
              description="The website of Cantos gods NFT project showing navigation information on the project, link to the collection page and the roadmap of the project, including the doc. "
              ghLink="#"
              Link="https://cantogods.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tech}
              isBlog={false}
              title="Tech Company Website"
              description="tech is a clean and modern business Bootstrap template designed specifically for startup, apps and IT services. You will be able to showcase your content on mobile devices such as smartphones, tablets and all types of devices. tech's design is driven by minimalist and unique sections. With this template pixel-perfect layout and neat sectioning, it will help you create a professional-looking website for your business in no time."
              ghLink="#"
              demoLink="https://tech-self.vercel.app/"              
            />
          </Col>   

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kitchen}
              isBlog={false}
              title="Fastfood Company Website"
              description="This a clean and lightweight restaurant website template created with the latest version of the Bootstrap framework. It's designed specifically for restaurants, cafes, bakeries, bars, catering, or anyone working in the food industry and is an attractive and effective way to promote your food-related businesses."
              ghLink="#"
              demoLink="https://kitchen-mocha-seven.vercel.app/"              
            />
          </Col>    

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={herobiz}
              isBlog={false}
              title="Business Website"
              description="HeroBiz is a modern, clean, and lightweight Bootstrap business website template. It's best suited for corporate and agency websites like software companies, digital agencies, consulting firms, financial advisors, accountants, investment firms, etc. You will easily find a stunning design that suits your needs."
              ghLink="#"
              demoLink="https://herobiz.vercel.app/"              
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logistics}
              isBlog={false}
              title="Logistic Website"
              description="This is a unique and modern template built for any business operating in transportation and logistics, including cargo, shipping, home movers, logistics warehouse, storage, trucking, and packaging services. It comes with a wide range of features and layouts that will fit any transportation industry size."
              ghLink="#"
              demoLink="https://logistics-brown.vercel.app/"              
            />
          </Col>   

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={archi}
              isBlog={false}
              title="Architecture Company Website"
              description="This is a light and clean construction website template built with the Bootstrap framework. The template is ideal for any construction company, architect, interior designer, exterior designer, builder website, and other construction-related services websites. UpConstruction bootstrap template has a beautiful and unique design that best serves your web presence."
              ghLink="#"
              demoLink="https://archi-one.vercel.app/"              
            />
          </Col>     

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flex}
              isBlog={false}
              title="Software Company Website"
              description="This is a creative and modern Bootstrap website template. FlexStart is created for individuals and companies who want to build websites for software, startup, mobile app, digital agency, SaaS, internet services, fintech and related services and products websites."
              ghLink="#"
              demoLink="https://flex-gold.vercel.app/"              
            />
          </Col>    

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medlab}
              isBlog={false}
              title="Hospital Website"
              description="This is a clean, free, responsive bootstrap template perfect for hospital, doctors, clinic, medical, health and more. This is a fully dynamic, well structured, easy to use and beautiful free HTML5 template. This free website template developed and designed specially for Medical purposes."
              ghLink="#"
              demoLink="https://medlab-rho.vercel.app/"              
            />
          </Col>   

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dash}
              isBlog={false}
              title="Admin Dashboard"
              description="This is a powerful admin and dashboard template based latest version of Bootstrap framework. It provides a clean and intuitive design that is focused on user experience. The custom plugins included has been carefully customized to fit with the overall look of the theme, working seamlessly across browsers, tablets and phones."
              ghLink="#"
              demoLink="https://dash-plum-omega.vercel.app/"              
            />
          </Col>     

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={biz}
              isBlog={false}
              title="Corporate Website"
              description="This is a modern and unique business and corporate Bootstrap template. It's perfect for any business, financial, consulting, insurance, creative, corporate, or small business. It has been built with the view of modern age demand and added the currently best and trending features."
              ghLink="#"
              demoLink="https://biz-alpha.vercel.app/"              
            />
          </Col>   

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="More Projects Coming soon"
              description=""
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
