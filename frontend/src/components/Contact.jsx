import React, { useState } from "react";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import toast from "react-hot-toast";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
     const res = await fetch(
       `${import.meta.env.VITE_API_BASE_URL}/api/contacts`,
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       }
     );


      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred. Please try again later.");
    }

    setIsSending(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Side - Info */}
          <div className="contact-info">
            <h2 className="contact-heading">Get In Touch</h2>
            <p className="contact-description">
              Have a question or want to learn more about our services? Fill out
              the form and we'll get back to you as soon as possible.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <HiLocationMarker className="contact-icon-svg" />
                </div>
                <div className="contact-content">
                  <h3 className="contact-subheading">Address</h3>
                  <p className="contact-text">
                    New Baneshwor
                    <br />
                    Kathmandu, Nepal-44600
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <HiMail className="contact-icon-svg" />
                </div>
                <div className="contact-content">
                  <h3 className="contact-subheading">Email</h3>
                  <p className="contact-text">
                    <a
                      href="mailto:softgridtechnologies@gmail.com"
                      className="contact-link"
                    >
                      softgridtechnologies@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <HiPhone className="contact-icon-svg" />
                </div>
                <div className="contact-content">
                  <h3 className="contact-subheading">Phone</h3>
                  <p className="contact-text">
                    <a href="tel:+977-9748285243" className="contact-link">
                      +977-9748285243
                    </a>
                    <br />
                    <a href="tel:+91-8015600894" className="contact-link">
                      +91-8015600894
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email" className="contact-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-input"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message" className="contact-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-textarea"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="contact-button"
                  disabled={isSending}
                  style={{ cursor: isSending ? "not-allowed" : "pointer" }}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
