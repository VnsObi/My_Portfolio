import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Evans Obi </span>
            from <span className="purple"> Delta State, Nigeria.</span>
            <br /> <br />
            I’m a versatile IT leader and full-stack developer with strong roots
            in cybersecurity, enterprise infrastructure, and blockchain
            security.
            <br /> I currently serve as the IT Manager for Ciuci Consulting,
            where I oversee digital systems, infrastructure, and web assets
            across multiple organizations including hospitals, logistics
            platforms, and corporate portals.
            <br /> I also act as the Fractional CTO for Dustid, a remote startup
            based in Manchester, London — where I help drive technical strategy,
            product architecture, and team coordination.
            <br /> My expertise blends on-ground IT deployments (CCTV, access
            control, networking) with cloud systems, secure web applications,
            and smart contract auditing. Whether it’s rebuilding infrastructure
            for a healthcare facility, or auditing Ethereum-based protocols, I
            bring clarity, reliability, and security to the table.
            <br />
            <br />
            Aside coding and tech, some other activities I love doing include!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Meditating
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I am not afraid to die. But I am afraid to die without trying!"{" "}
          </p>
          <footer className="blockquote-footer">Evans Obi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
