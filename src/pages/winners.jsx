import React from "react";
import WinnerCard from "../components/winnercard";
import "../styles/winners.css";

const winners = [
  {
    name: "Alice Johnson",
    event: "Hackathon 2024",
    link: "https://github.com/alice/hackathon-project",
  },
  {
    name: "Bob Smith",
    event: "AI Challenge",
    link: "https://github.com/bob/ai-challenge",
  },
  {
    name: "Cathy Lee",
    event: "Design Sprint",
    link: "https://cathy.dev/design-sprint",
  },
];

const Winners = () => {
  return (
    <div className="winners-container">
      <h1 className="wall-title">🏆 Wall of Fame 🏆</h1>
      <div className="winners-carousel">
        {winners.map((winner, index) => (
          <WinnerCard key={index} {...winner} />
        ))}
      </div>
    </div>
  );
};

export default Winners;
