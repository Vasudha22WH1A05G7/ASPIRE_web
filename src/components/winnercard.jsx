import React from "react";
import "../styles/winnercard.css";

const winnercard = ({ name, event, link }) => {
  return (
    <div className="winner-card">
      <h2>{name}</h2>
      <p><strong>Event:</strong> {event}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

export default winnercard;
