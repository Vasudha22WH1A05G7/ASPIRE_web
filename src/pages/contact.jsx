import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Have A Question?<br />Get In Touch!</h2>
          <p>
            Thank you for visiting our website! If you have any questions or queries, 
            drop us a message, and we’ll get back to you promptly. Your time is valuable to us!
          </p>
          <div className="contact-details">
            <p>📧 aspireclub@bvrithyderabad.edu.in</p>
            <p>📍 BVRIT HYDERABAD College of Engineering for Women, Nizampet</p>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea rows="5" placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
