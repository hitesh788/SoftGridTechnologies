import React from "react";
import "../styles/OurTeam.css";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

import team1 from "../assets/Teams/Hitesh_CEO.png";
import team2 from "../assets/Teams/Abhishek.jpg";
import team3 from "../assets/Teams/Ishan.jpg";
import team4 from "../assets/Teams/Sumit_Mar.png";
import team5 from "../assets/Teams/Suran_Dir.jpg";

const teamMembers = [
  {
    name: "Hitesh Joshi",
    title: "CEO & Founder",
    desc: "With over years of knowledge in technology and leadership, leads the company vision and strategy.",
    image: team1,
  },
  {
    name: "Abhishek Kunwar",
    title: "Sl. Manager",
    desc: "With over years of knowledge in technology and leadership, leads the company vision and strategy.",
    image: team2,
  },
  {
    name: "Ishan Singh",
    title: "CTO",
    desc: "Ishan oversees our technical strategy and ensures we deliver cutting-edge solutions that meet our clients' needs.",
    image: team3,
  },
  {
    name: "Sumit Thakurathi",
    title: "Exec. Developer",
    desc: "Sumit leads our design team, ensuring all our solutions are functional but also visually stunning.",
    image: team4,
  },
  {
    name: "Suran Singh Dhami",
    title: "Director",
    desc: "Suran develops and implements our marketing, helping clients achieve their growth objectives.",
    image: team5,
  },
];

const OurTeam = () => {
  return (
    <section id="team" className="team-wrapper">
      <h1 className="team-heading">Meet Our Team</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="card-header"></div>
            <img
              draggable="false"
              src={member.image}
              alt={`${member.name}`}
              className="profile-img"
            />
            <h2>{member.name}</h2>
            <p className="role">{member.title}</p>
            <p className="desc">{member.desc}</p>
            <div className="socials">
              <a href="#" className="facebook">
                <FaFacebook />
              </a>
              <a href="#" className="linkedin">
                <FaLinkedin />
              </a>
              <a href="#" className="twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
