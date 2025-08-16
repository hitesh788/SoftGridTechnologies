import React from "react";
import "./About.css";
import OurTeam from "../OurTeam";
import communityPic1 from "../../assets/Teams/Hitesh_CEO.png";
import communityPic2 from "../../assets/Teams/Abhishek.jpg";
import communityPic3 from "../../assets/Teams/Ishan.jpg";
import Features from "./Featues";
import whatwedo from "../../assets/whatwedo.webp";
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-subtitle">
          We're a team of passionate digital experts dedicated to helping
          businesses succeed in the digital world.
        </p>

        <div className="about-content">
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Founded in 2024, SoftGrid Technologies was established with a
              clear vision to empower businesses through innovative and scalable
              digital solutions. What began as a passionate team of tech
              enthusiasts has quickly evolved into a dynamic technology partner
              serving clients across industries and geographies. In a short
              span, we’ve delivered impactful solutions to a wide range of
              businesses helping them enhance their digital footprint, automate
              operations, and accelerate growth in a competitive landscape.
            </p>

            <p>
              At SoftGrid Technologies, we blend deep technical expertise with a
              forward-thinking approach. Every project we undertake is designed
              to not only solve today’s challenges but to future-proof our
              clients for tomorrow’s opportunities.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-box purple-box">
              <h4>1+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-box green-box">
              <h4>10+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat-box blue-box">
              <h4>5+</h4>
              <p>Team Members</p>
            </div>
            <div className="stat-box pink-box">
              <h4>1</h4>
              <p>Industry Awards</p>
            </div>
          </div>
        </div>

        <section className="community-section">
          <div className="community-image-container">
            <img
              draggable="false"
              className="community-main-image"
              src={whatwedo}
              alt="Community main"
            />
            <div className="avatar-group">
              <img
                draggable="false"
                src={communityPic1}
                alt="Avatar 1"
                className="avatar"
              />
              <img
                draggable="false"
                src={communityPic2}
                alt="Avatar 2"
                className="avatar"
              />
              <img
                draggable="false"
                src={communityPic3}
                alt="Avatar 3"
                className="avatar"
              />
              <div className="avatar-more">5+</div>
              <p className="community-text">Join Us</p>
            </div>
          </div>
          <div className="community-text-block">
            <h1 className="community-title">What We Do</h1>
            <p>
              At SoftGrid, we are passionate about empowering your business to
              thrive in the digital world by delivering a wide range of
              innovative services tailored to your unique needs. Our expertise
              spans from designing high-performance websites and scalable web
              applications that offer seamless user experiences, to crafting
              responsive designs and e-commerce solutions that engage and
              convert visitors across all devices. Additionally, we provide
              engaging online training programs designed to build real-world
              skills in programming, ethical hacking, and networking, preparing
              your team for tomorrow’s challenges. With a portfolio filled with
              successful digital transformations across diverse industries,
              SoftGrid Technologies stands as your trusted partner to innovate,
              scale, and succeed.
            </p>
          </div>
        </section>
      </div>
      <Features />
      <OurTeam />
    </section>
  );
};

export default About;
