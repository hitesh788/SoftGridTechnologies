import React from "react";
import "../styles/OurValue.css";

// Example PNG imports (replace with your own paths)
import excellenceIcon from "../assets/excellence.png";
import innovationIcon from "../assets/innovation.png";
import partnershipIcon from "../assets/partnership.png";

const values = [
  {
    icon: excellenceIcon,
    title: "Excellence",
    description:
      "We are committed to delivering the highest quality solutions that exceed client expectations and stand the test of time.",
  },
  {
    icon: innovationIcon,
    title: "Innovation",
    description:
      "We embrace new technologies and creative approaches to solve complex problems and drive business growth.",
  },
  {
    icon: partnershipIcon,
    title: "Partnership",
    description:
      "We build long-term relationships with our clients, working collaboratively to achieve shared goals and success.",
  },
];

const OurValue = () => {
  return (
    <section className="our-value-section">
      <h2 className="our-value-title">Our Values</h2>
      <div className="our-value-cards">
        {values.map((value, index) => (
          <div className="value-card" key={index}>
            <div className="icon-container">
              <img
                draggable="false"
                src={value.icon}
                alt={`${value.title} icon`}
              />
            </div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValue;
