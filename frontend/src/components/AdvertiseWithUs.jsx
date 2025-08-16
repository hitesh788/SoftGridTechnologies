import React, { useState } from "react";
import "../styles/AdvertiseWithUs.css";
import { FaStar } from "react-icons/fa";
import testimonialUser1 from "../assets/TestimonialUser/testimonialUser3.jpg";
import testimonialUser2 from "../assets/TestimonialUser/testimonialUser1.jpg";
import testimonialUser3 from "../assets/TestimonialUser/testimonialUser2.jpg";
import Whyadvertise from "../components/WhyAdvertise";
import AdvertiseContact from './AdvertiseContact';

const AdvertiseWithUs = () => {
  return (
    <div className="awu-advertise-page">
      {/* Hero Section */}
      <section className="awu-advertise-hero">
        <div className="awu-hero-content">
          <h1>Advertise With Us</h1>
          <p className="awu-hero-subtitle">
            Maximize your brand's visibility with our engaged audience
          </p>
          <div className="awu-cta-buttons">
            <a href="#options" className="awu-btn-primary">
              Get Started
            </a>
            <a href="#contact" className="awu-btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="awu-stats-section">
        <div className="awu-stat-item">
          <h3>100K+</h3>
          <p>Post Impressions</p>
        </div>
        <div className="awu-stat-item">
          <h3>70%</h3>
          <p>Engagement Rate</p>
        </div>
        <div className="awu-stat-item">
          <h3>90%</h3>
          <p>Target Audience Match</p>
        </div>
      </section>
      <div id="options">
        <Whyadvertise />
      </div>
      <section className="aws-testimonials-section">
        <h2 className="aws-testimonials-heading">What Our Clients Say</h2>

        <div className="aws-testimonials-container">
          <div className="aws-testimonial-card">
            <img
              draggable="false"
              src={testimonialUser1}
              alt="Anjali Mehra"
              className="aws-testimonial-image"
            />
            <h2 className="aws-testimonial-name">Anjali Mehra</h2>
            <p className="aws-testimonial-role">Owner, Mehra Boutique</p>
            <div className="aws-testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color="#facc15" size={16} />
              ))}
            </div>
            <p className="aws-testimonial-text">
              We partnered for an ad campaign to promote our boutique’s festive
              collection, and the response was beyond expectations.
            </p>
          </div>

          <div className="aws-testimonial-card">
            <img
              draggable="false"
              src={testimonialUser2}
              alt="Suresh Thapa"
              className="aws-testimonial-image"
            />
            <h2 className="aws-testimonial-name">Suresh Thapa</h2>
            <p className="aws-testimonial-role">
              Founder, Himalayan Tea Traders
            </p>
            <div className="aws-testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color="#facc15" size={16} />
              ))}
            </div>
            <p className="aws-testimonial-text">
              Your advertising strategies gave our Nepali tea brand the
              visibility we had been dreaming of. Our online sales saw a 70%
              jump in the first month!
            </p>
          </div>

          <div className="aws-testimonial-card">
            <img
              draggable="false"
              src={testimonialUser3}
              alt="Raj Raghavan"
              className="aws-testimonial-image"
            />
            <h2 className="aws-testimonial-name">Raj Raghavan</h2>
            <p className="aws-testimonial-role">Director, Raghavan Travels</p>
            <div className="aws-testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color="#facc15" size={16} />
              ))}
            </div>
            <p className="aws-testimonial-text">
              Thanks to your targeted campaigns, our holiday packages sold out
              faster than ever before. The ROI was clear and the reach was
              phenomenal!
            </p>
          </div>
        </div>
      </section>
      <div id="contact">
        <AdvertiseContact />
      </div>
    </div>
  );
};

export default AdvertiseWithUs;
