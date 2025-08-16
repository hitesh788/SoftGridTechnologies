import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FaqSection.css";
import faqImage from "../../assets/faq.webp";

const faqCategories = {
  "Web Development": [
    {
      question: "What kind of web development services does Softgrid offer?",
      answer:
        "We design and develop high-performance websites and web applications that are scalable, secure, and visually stunning. Our services include responsive design, e-commerce solutions, and content management systems tailored to your business goals.",
    },
    {
      question: "Do you provide custom CMS development?",
      answer:
        "Yes, we create tailor-made content management systems with easy-to-use admin panels and scalable architecture.",
    },
    {
      question: "Can you integrate third-party APIs into my website?",
      answer:
        "Absolutely. We specialize in API integration for payment gateways, CRMs, analytics tools, and other third-party services to enhance functionality.",
    },
    {
      question: "Do you offer website maintenance and support?",
      answer:
        "Yes, we provide ongoing maintenance plans to ensure your site stays secure, up-to-date, and optimized for performance.",
    },
  ],

  "Digital Marketing": [
    {
      question: "How can Softgrid help my business with digital marketing?",
      answer:
        "We boost your online presence through targeted digital marketing strategies, including SEO, social media campaigns, and pay-per-click advertising. Our data-driven approach ensures your brand reaches the right audience at the right time.",
    },
    {
      question: "Do you provide SEO audits?",
      answer:
        "Absolutely. Our SEO audits identify gaps in content, structure, and backlinks, providing a clear roadmap to boost rankings.",
    },
    {
      question: "Can you manage our social media accounts?",
      answer:
        "Yes. We create engaging content, manage posting schedules, and run targeted ad campaigns to grow your audience and engagement.",
    },
    {
      question: "Do you run Google Ads or Facebook Ads?",
      answer:
        "We manage end-to-end PPC campaigns on platforms like Google Ads, Facebook, Instagram, and LinkedIn to maximize your ROI.",
    },
  ],

  "Cybersecurity": [
    {
      question: "What cybersecurity services does Softgrid offer?",
      answer:
        "We secure your digital assets through end-to-end encryption, compliance audits, bug bounty programs, managed security services, and tailored security awareness training for your team.",
    },
    {
      question: "Do you offer 24/7 security monitoring?",
      answer:
        "Yes, our SOC team monitors your infrastructure around the clock to detect and neutralize threats immediately.",
    },
    {
      question: "Do you conduct penetration testing?",
      answer:
        "We provide manual and automated penetration testing to uncover vulnerabilities before malicious actors can exploit them.",
    },
    {
      question: "Can you help us meet industry compliance requirements?",
      answer:
        "Yes, we assist with compliance for standards like GDPR, HIPAA, ISO 27001, and PCI-DSS.",
    },
  ],

  "Training Programs": [
    {
      question: "Does Softgrid provide training programs?",
      answer:
        "Yes. We offer comprehensive online training programs with live sessions, hands-on projects, and practical assessments. Topics include HTML, CSS, Javascript,React.js,  C & C++ programming, ethical hacking, cybersecurity, networking, and real-world project work.",
    },
    {
      question: "Are your training programs certified?",
      answer:
        "Yes, we provide certificates upon successful completion of our training programs, which are recognized in the industry.",
    },
    {
      question: "Do you offer beginner-friendly courses?",
      answer:
        "Yes, we have training programs designed for complete beginners as well as advanced professionals.",
    },
    {
      question: "Do you provide job placement assistance?",
      answer:
        "Yes, we connect our top-performing students with hiring partners and provide interview preparation support.",
    },
  ],
};


export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState(
    "Web Development"
  );
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleContactClick = () => {
    navigate("/", { replace: false });
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <div className="faq-wrapper">
        <img className="faq-image" draggable="false" src={faqImage} alt="FAQ" />
        <div className="faq-content">
          <p className="faq-label">FAQ's</p>
          <h1 className="faq-title">Looking for answers?</h1>
          <p className="faq-description">
            Building secure, high-performance digital solutions that look great,
            work flawlessly, and scale with your business.
          </p>

          {/* Category Toggle */}
          <div className="faq-category-toggle">
            {Object.keys(faqCategories).map((category) => (
              <button
                key={category}
                className={`faq-category-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveIndex(null);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ List for Active Category */}
          <div className="faq-list">
            {faqCategories[activeCategory].map((faq, index) => (
              <div
                key={index}
                className="faq-item"
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`faq-icon ${
                      activeIndex === index ? "rotate" : ""
                    }`}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#1D293D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className={`faq-answer ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section below FAQ */}
      <div className="faq-contact-section">
        <h2>Still have questions?</h2>
        <p>We’re here to help you with any queries you might have.</p>
        <button onClick={handleContactClick}>Contact Us</button>
      </div>
    </>
  );
}
