import React from "react";
import "../styles/Founders.css"; // style file
import founder1 from "../assets/founders/founder1.jpg";
import founder2 from "../assets/founders/founder2.jpg";
import founder3 from "../assets/founders/founder3.jpg";

const founders = [
  {
    name: "Founder One",
    image: founder1,
    linkedin: "https://www.linkedin.com/in/founderone"
  },
  {
    name: "Founder Two",
    image: founder2,
    linkedin: "https://www.linkedin.com/in/foundertwo"
  },
  {
    name: "Founder Three",
    image: founder3,
    linkedin: "https://www.linkedin.com/in/founderthree"
  }
];

const Founders = () => {
  return (
    <div className="team-container">
      <h2 className="team-title">Founders</h2>
      <div className="team-grid">
        {founders.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="img-wrapper">
              <img src={member.image} alt={member.name} className="profile-img" />
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="linkedin-icon"
                />
              </a>
            </div>
            <p className="name">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
