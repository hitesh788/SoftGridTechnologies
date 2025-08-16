import React from "react";
import "./Features.css";
import featureImg from "../../assets/features.webp";
import { FaExpandArrowsAlt, FaSmileBeam, FaChartLine } from "react-icons/fa";

const features = [
  {
    iconBg: "#EDE4FF",
    icon: <FaExpandArrowsAlt size={28} color="#7F22FE" />,
    title: "Scalable Solutions",
    description:
      "From startups to enterprises, our systems are built to grow with your business without compromising speed or quality.",
  },
  {
    iconBg: "#DFF6E3",
    icon: <FaSmileBeam size={28} color="#00A63E" />,
    title: "Seamless User Experience",
    description:
      "We craft intuitive, responsive, and engaging experiences that keep users coming back.",
  },
  {
    iconBg: "#FFE8D6",
    icon: <FaChartLine size={28} color="#F54900" />,
    title: "Data-Driven Decisions",
    description:
      "Analytics, tracking, and insights are baked into everything we deliver, helping you make informed moves.",
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-heading">
          <h2>What Makes Us Different</h2>
          <p>
            We don’t just deliver projects, we deliver impact. Here’s what sets
            Softgrid apart in the digital space.
          </p>
        </div>

        <div className="features-content">
          {/* Left side: Features */}
          <div className="features-list">
            {features.map((feature, index) => (
              <div className="feature-item" key={index}>
                <div
                  className="feature-icon"
                  style={{ backgroundColor: feature.iconBg }}
                >
                  {feature.icon}
                </div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: Image */}
          <div className="features-image">
            <img draggable="false" src={featureImg} alt="Softgrid Features" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
