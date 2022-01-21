import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#FD5D75",
    grade3: "#FE983A",
    grade2: "#FFB51D",
    grade1: "#FFE7A6",
    grade0: "#ecd9fc",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="khaledghaffarii"
        blockSize={16}
        blockMargin={6}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
