import React from "react";
import "../styles/eventcard.css";

const EventCard = ({ name, timeline, link }) => {
  return (
    <div className="event-card">
      <h2>{name}</h2>
      <p>{timeline}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="know-more">Know More</button>
      </a>
    </div>
  );
};

export default EventCard;