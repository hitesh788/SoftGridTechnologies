import React from "react";
import "../styles/WhyAdvertise.css";
import why1 from "../assets/why1.jpg";
import why2 from "../assets/why2.jpg";
import why3 from "../assets/why3.jpg";
import why4 from "../assets/why4.jpg";

const cardData = [
  {
    subtitle:
      "We provide crystal-clear metrics so you always know exactly how your investment is paying off, no guessing, just real and measurable results every time.",
    image: why1,
  },
  {
    subtitle:
      "Reach the right crowd every time with targeted campaigns that speak directly to your ideal customers, cutting through the noise and boosting your brand.",
    image: why2,
  },
  {
    subtitle:
      "Our team’s got your back with expert support, guiding campaigns to crush your goals and grow your brand with hands-on care and real strategic insights.",
    image: why3,
  },
  {
    subtitle:
      "Choose from flexible advertising packages designed to fit your business needs perfectly because your growth deserves a plan as unique and ambitious as you are.",
    image: why4,
  },
];



const WhyAdvertise = () => {
  return (
    <div>
      <div className="wa-section-header">
        <h2>Why Advertise With Us?</h2>
        <p className="wa-section-subtitle">
          We deliver measurable results for your marketing investment
        </p>
      </div>

      <div className="cards-container">
        {cardData.map(({  subtitle, image }, index) => (
          <div className="flight-card" key={index}>
            <div
              className="flight-image"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="flight-info-blur">
                <div className="flight-info">
                  <p className="economy">{subtitle}</p>
                  {/* Highlights removed as requested */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyAdvertise;
