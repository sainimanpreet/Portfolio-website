import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Manpreet Saini</span> from <span className="purple">Himachal Pradesh</span>.
            <br />
            I am a mechanical engineering student at <span className="purple">NIT Hamirpur</span>, deeply interested in coding, building new websites, and exploring open-source opportunities.
            <br />
            <br />
            When I'm not coding I enjoy activities that keep me relaxed and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music 🎧
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new places 🌍
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
