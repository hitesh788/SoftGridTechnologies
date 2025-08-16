import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/AdvertiseContact.css";
import axios from "axios";
import toast from "react-hot-toast";

const AdvertiseContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/advertise-with-us`,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }
    );

    toast.success(res.data.message || "Inquiry submitted successfully!");
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section className="ad-contact-section">
      <div className="ad-contact-container">
        {/* Left Side Info */}
        <div className="ad-contact-info">
          <h2 className="ad-contact-title">Advertise With Us</h2>
          <p className="ad-contact-description">
            Showcase your product to our engaged audience. Submit your details,
            and our team will contact you to discuss customized advertising
            opportunities.
          </p>
          <div className="ad-contact-details">
            <p className="ad-contact-item">
              <FaMapMarkerAlt className="ad-contact-icon" />
              New Baneshwor Kathmandu, Nepal-44600
            </p>
            <p className="ad-contact-item">
              <FaPhone className="ad-contact-icon" />
              (+91) 8015600894, (+977) 9811936784
            </p>
            <p className="ad-contact-item">
              <FaEnvelope className="ad-contact-icon" />
              softgridtechnologies@gmail.com
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="ad-contact-form-container">
          <form className="ad-contact-form" onSubmit={handleSubmit}>
            <div className="ad-form-row">
              <div className="ad-form-group">
                <label className="ad-form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="ad-form-input"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="ad-form-group">
                <label className="ad-form-label">Company Name</label>
                <input
                  type="text"
                  name="company"
                  className="ad-form-input"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="ad-form-row">
              <div className="ad-form-group">
                <label className="ad-form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="ad-form-input"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="ad-form-group">
                <label className="ad-form-label">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="ad-form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="ad-form-group">
              <label className="ad-form-label">Message</label>
              <textarea
                maxLength="2500"
                name="message"
                className="ad-form-textarea"
                required
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              ></textarea>
              <p className="ad-char-limit">
                {formData.message.length}/2500 characters
              </p>
            </div>
            <button
              type="submit"
              className="ad-submit-btn"
              disabled={isSubmitting}
              style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }}
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseContact;
