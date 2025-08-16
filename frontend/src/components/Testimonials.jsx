import React from "react";
import { FaStar } from "react-icons/fa";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Ankit Bansal",
    position: "CEO, TechStack",
    initials: "AB",
    color: "primary",
    quote:
      "Soft Grid transformed our outdated website into a powerful sales tool. Their team was professional, responsive, and delivered beyond our expectations.",
  },
  {
    name: "Bikash Adhikari",
    position: "SWE, Acoust Technology Nepal",
    initials: "BA",
    color: "green",
    quote:
      "The e-commerce platform Soft Grid built for us has increased our online sales by 200%. Their attention to detail and focus on user experience made all the difference.",
  },
  {
    name: "Pratik Sharma",
    position: "CTO, MSP Softwares",
    initials: "PS",
    color: "blue",
    quote:
      "The mobile app developed by Soft Grid has revolutionized how our customers interact with our services. User engagement has increased by 150% since launch.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              <blockquote>{`"${testimonial.quote}"`}</blockquote>
              <div className="client-info">
                <div className={`client-avatar ${testimonial.color}`}>
                  <span>{testimonial.initials}</span>
                </div>
                <div className='below-info'>
                  <p className="client-name">{testimonial.name}</p>
                  <p className="client-title">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
