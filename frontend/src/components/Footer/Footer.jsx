// src/components/Footer.jsx
import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom"; // <-- import Link
import "./Footer.css";
import footerLogo from "../../assets/White_Logo_Transparent.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/subscribers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Subscribed successfully!");
        setEmail("");
      } else {
        // Handle duplicate email error from backend
        if (response.status === 409) {
          toast.error(
            data.message || "Email already exists. Please try another."
          );
        } else {
          toast.error(data.message || "Subscription failed. Try again.");
        }
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo & Socials */}
          <div>
            <Link to="/">
              <img src={footerLogo} alt="Logo" className="footer-logo" />
            </Link>
            <p className="footer-text">
              Transforming businesses with innovative digital solutions since
              2024.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/softgridtechnologies"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/softgridtechnologies"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/softgridtechnologies/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/softgridtech"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/SoftGridTechnologies"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-title">Services</h3>
            <ul>
              <li>
                <Link to={{ pathname: "/", hash: "#services" }}>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to={{ pathname: "/", hash: "#services" }}>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to={{ pathname: "/", hash: "#services" }}>
                  Business Analytics
                </Link>
              </li>
              <li>
                <Link to={{ pathname: "/", hash: "#services" }}>
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to={{ pathname: "/advertise-with-us" }}>
                  Advertise with us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="footer-title">Company</h3>
            <ul>
              <li>
                <Link to={{ pathname: "/about-us" }}>About Us</Link>
              </li>
              <li>
                <Link to={{ pathname: "/about-us", hash: "#team" }}>Our Team</Link>
              </li>
              <li>
                <Link to={{ pathname: "/blogs" }}>Blog</Link>
              </li>
              <li>
                <Link to={{ pathname: "/", hash: "#contact" }}>Contact</Link>
              </li>
              <li>
                <Link to={{ pathname: "/faq" }}>FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="footer-title">Newsletter</h3>
            <p className="footer-text">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <input
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 SoftGrid Technologies. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
