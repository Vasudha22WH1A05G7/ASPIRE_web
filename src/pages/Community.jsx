import React from "react";
import "../styles/Community.css";
import bvritImage from "../assets/community1.jpg";      // BVIRT image
import vsscImage from "../assets/community2.jpg";    // VSSC image (add this image to your assets folder)

const Community = () => {
    return (
      <div className="community-container">
        <h2 className="community-heading">About the Community</h2>
  
        {/* About BVRITH */}
        <div className="community-content">
          <div className="text-section">
            <h4 className="about-title">ABOUT</h4>
            <h2 className="bvrit-heading">BVRITH</h2>
            <p className="description">
            BVRIT HYDERABAD College of Engineering for Women is the youngest college under the umbrella of Sri Vishnu Educational Society, Established in 2012, with the intention of enabling women engineers to reach greater heights, it has already acquired many accolades in academics, placements and technical competitions. With exceptional results of very first batch, BVRIT HYDERABAD is now one of the most sought after institute in Hyderabad for prospective engineering students.
            </p>
          </div>
          <div className="image-section">
            <img src={bvritImage} alt="BVRITH" />
          </div>
        </div>
  
        {/* Gap between sections */}
        <div className="section-gap" />
  
        {/* About VSSC (image left, content right) */}
        <div className="community-content reverse-layout">
          <div className="image-section">
            <img src={vsscImage} alt="VSSC" />
          </div>
          <div className="text-section">
            <h4 className="about-title">ABOUT</h4>
            <h2 className="bvrit-heading">VSSC</h2>
            <p className="description">
            The Vishnu Student Success Centre empowers students to reach their full potential by offering curated programs in Career Development, Entrepreneurship, and Student Life. It complements academic learning with mentorship, skill-building opportunities, and real-world experiences. By fostering a supportive environment, the centre helps students explore interests, build connections, and gain confidence to achieve their personal and professional goals.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Community;