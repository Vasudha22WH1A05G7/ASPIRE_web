import React from "react";
import EventCard from "../components/eventcard";
import "../styles/events.css";

const Events = () => {
  const calculateTimeLeft = (endDate) => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null;
    }
    return timeLeft;
  };

  const events = [
    { title: "Hackathon 1", timeline: "March 10 - 12", link: "#", endDate: "2025-03-12T23:59:59" },
    { title: "Hackathon 2", timeline: "April 5 - 7", link: "#", endDate: "2025-04-07T23:59:59" },
    { title: "Hackathon 3", timeline: "May 20 - 22", link: "#", endDate: "2025-05-22T23:59:59" },
  ];

  return (
    <div className="events-section" id="events">
      <h1 className="events-title">Events</h1>
      <div className="events-carousel">
        {events.map((event, index) => (
          <EventCard
            key={index}
            {...event}
            timeLeft={calculateTimeLeft(event.endDate)}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;