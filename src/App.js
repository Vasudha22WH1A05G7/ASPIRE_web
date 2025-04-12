import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Events from "./pages/events";
import Winners from "./pages/winners";
import Founders from "./pages/Founders";
import Faq from "./pages/Faq";
import Footer from "./components/Footer";
import Community from "./pages/Community"; 
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="community">
        <Community />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="winners">
        <Winners />
      </div>
      <div id="Founders">
        <Founders />
      </div>
      <div id="Faq">
        <Faq />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer /> {/* ✅ Moved Footer inside the correct return */}
    </>
  );
};

export default App;
