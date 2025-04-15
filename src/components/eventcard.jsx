import React from "react";
import "../styles/eventcard.css";

const EventCard = ({ name, timeline, link, image }) => {
  return (
    <div className="event-card">
      <img src={image} alt={name} className="event-image" />
      <div className="event-details">
        <h2>{name}</h2>
        <p>{timeline}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="know-more">Know More</button>
        </a>
      </div>
    </div>
  );
};

export default EventCard;
