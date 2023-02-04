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
            <br />Currently, I work at Chibeco Oil and Gas Nigeria Limited, one of the
             top Oil and Gas companies in Nigeria as the Process Head/Lead IT Officer in the IT Department.
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
