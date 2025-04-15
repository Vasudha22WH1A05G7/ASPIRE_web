import React from "react";
import EventCard from "../components/eventcard";
import "../styles/events.css";
import memeCrimeImage from "../assets/events/memecrime.jpeg";
import genAIImage from "../assets/events/genai.jpeg";
import aiWorkshopImage from "../assets/events/aiworkshop.jpg";

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
    {
      title: "Gen AI Hackathon",
      timeline: "Feb 28 & Mar 1",
      link: "#",
      endDate: "2025-03-12T23:59:59",
      image: genAIImage
    },
    {
      title: "Meme Crime",
      timeline: "April 2",
      link: "#",
      endDate: "2025-04-07T23:59:59",
      image: memeCrimeImage
    },
    {
      title: "AI Workshop",
      timeline: "May 20 - 22",
      link: "#",
      endDate: "2025-05-22T23:59:59",
      image: aiWorkshopImage
    },
  ];

  return (
    <div className="events-section" id="events">
      <h1 className="events-title">Events</h1>
      <div className="events-carousel">
        {events.map((event, index) => (
          <EventCard
            key={index}
            name={event.title}
            timeline={event.timeline}
            link={event.link}
            image={event.image}
            timeLeft={calculateTimeLeft(event.endDate)}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
