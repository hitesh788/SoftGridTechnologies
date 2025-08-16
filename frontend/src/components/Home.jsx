import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import "../styles/Home.css";
import h1 from "../assets/h1.png";
import h2 from "../assets/h2.png";
import h3 from "../assets/h3.png";
import h4 from "../assets/h4.png";

const splashImages = [h1, h2, h3, h4];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % splashImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  
useEffect(() => {
  const scrollToSection = sessionStorage.getItem("scrollTo");
  if (scrollToSection) {
    const timer = setTimeout(() => {
      const section = document.getElementById(scrollToSection);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      sessionStorage.removeItem("scrollTo");
    },); 
    return () => clearTimeout(timer);
  }
}, []);


  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleServicesClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/9779748285243", "_blank");
  };

  return (
    <header className="hero-header">
      {splashImages.map((image, index) => (
        <div
          key={index}
          className={`hero-bg-image ${index === currentImage ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your <br /> Business with <br /> Digital Solutions <br />{" "}
            with SoftGrid
          </h1>
          <p className="hero-subtitle">
            We help businesses grow by leveraging cutting-edge <br />
            technology and innovative strategies.
          </p>
          <div className="hero-buttons">
            <button className="hero-button" onClick={handleWhatsAppClick}>
              Request a Call
            </button>
            <button
              className="hero-button secondary"
              onClick={handleServicesClick}
            >
              Our Services <HiArrowNarrowRight />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
