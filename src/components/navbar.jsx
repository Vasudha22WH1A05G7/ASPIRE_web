import React from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";
import logo from "../assets/logo.jpeg"; // ✅ Import the logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src={logo} alt="ASPIRE Logo" className="navbar-logo-img" />
        <div className="navbar-logo-text">ASPIRE</div>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="home" smooth={true} duration={600} offset={-70}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={600} offset={-70}>
            About
          </Link>
        </li>
        <li>
          <Link to="events" smooth={true} duration={600} offset={-70}>
            Events
          </Link>
        </li>
        <li>
          <Link to="winners" smooth={true} duration={600} offset={-70}>
            Winners
          </Link>
        </li>
        <li>
          <Link to="Founders" smooth={true} duration={600} offset={-70}>
            Founders
          </Link>
        </li>
        <li>
          <Link to="Faq" smooth={true} duration={600} offset={-70}>
            FAQs
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={600} offset={-70}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
