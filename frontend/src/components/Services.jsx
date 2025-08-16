import React from "react";
import "../styles/Services.css";
import {
  FaCode,
  FaSearch,
  FaChartLine,
  FaChartPie,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaCheck,
} from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";


const services = [
  {
    title: "Web Development",
    description:
      "We design high-performance websites and web apps that offer scalable features and seamless experiences.",
    features: [
      "Responsive Design",
      "E-Commerce Solutions",
      "Content Management",
    ],
    icon: <FaCode />,
  },
{
  title: "SEO Optimization",
  description:
    "We enhance your website's visibility on search engines, driving organic traffic and boosting your online presence.",
  features: [
    "Keyword Research & Strategy",
    "On-Page & Off-Page SEO",
    "Technical SEO Audits"
  ],
  icon: <FaSearch />,
},

  {
    title: "Digital Marketing",
    description:
      "We drive your online visibility with targeted campaigns, optimized SEO, and data-backed marketing strategies.",
    features: [
      "Search Engine Optimization",
      "Social Media Marketing",
      "Pay-Per-Click Advertising",
    ],
    icon: <FaChartLine />,
  },
  {
    title: "Business Analytics",
    description:
      "Get actionable insights through visual dashboards, predictive models, and performance metrics tailored to you.",
    features: [
      "Data Visualization",
      "Performance Tracking",
      "Business Intelligence",
    ],
    icon: <FaChartPie />,
  },
  {
    title: "CyberSecurity",
    description:
      "Secure your systems with end-to-end encryption, compliance audits, and tailored security awareness programs.",
    features: [
      "Bug Program",
      "Security Awareness Training",
      "Managed Security Services",
    ],
    icon: <FaShieldAlt />,
  },
  {
    title: "Online Training",
    description:
      "Learn tech skills through live sessions, hands-on projects, and assessments designed to build real-world experience.",
    features: [
      "C & C++ Programming",
      "Ethical Hacking & Cybersecurity",
      "Networking & Projects",
    ],
    icon: <FaChalkboardTeacher />,
  },
];

const Services = () => {
  const handleLearnMoreClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id='services' className="services-wrapper">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        We offer a comprehensive range of digital services to help your business
        thrive in the digital landscape.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-content">
              <div className="icon-title-stack">
                <div className="icon-placeholder">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              <p className="service-desc">{service.description}</p>
              <ul className="feature-list">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheck className="tick-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="learn-more" onClick={handleLearnMoreClick}>
              Learn More <HiArrowNarrowRight className='learnmore-icon'/>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
