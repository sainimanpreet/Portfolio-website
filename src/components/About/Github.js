import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 18 }}>118 contributions</div>
          </div>
          <GitHubCalendar
            username="soumyajit4419"
            blockSize={18}
            blockMargin={6}
            color="#c084f5"
            fontSize={14}
          />
    </Row>
  );
}

export default Github;
