import React from "react";
import "../styles/Projects.css";
import { HiArrowNarrowRight } from "react-icons/hi";

// Replace with real image paths
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";

const projectsData = [
  {
    id: 1,
    title: "ColorNest – Explore Color Tools",
    description:
      "ColorNest is a one-stop destination offering a wide range of color utilities for designers and developers including palette generators, accessibility checkers, gradient builders, and real-time previews for seamless UI/UX creation.",
    tags: ["Color Tools", "Web App", "UI/UX"],
    category: "Web Development",
    image: project1,
    iconClass: "web-development",
    link: "https://colornest.site/",
  },
  {
    id: 2,
    title: "Foodie – Food Delivery App",
    description:
      "A full-fledged food delivery application featuring live order tracking, secure multi-gateway payments, restaurant onboarding dashboard, and user-friendly design tailored for a seamless experience from browsing to delivery.",
    tags: ["Food", "Delivery", "Mobile App"],
    category: "Mobile App",
    image: project2,
    iconClass: "mobile-app",
    link: "https://food-del-3lpg.vercel.app/",
  },
  {
    id: 3,
    title: "Phohor Malai – WMS",
    description:
      "Phohor Malai is a smart waste management solution built to tackle urban and rural waste using data, decentralization, and community engagement. It’s where traditional waste collection meets modern tech like IoT bins and route optimization",
    tags: ["Banking", "Fintech", "Security"],
    category: "Web Development",
    image: project3,
    iconClass: "web-development",
    link: "https://wastemanagement-x1s7.vercel.app/",
  },
  {
    id: 4,
    title: "Sabziko – Online Grocery Delivery",
    description:
      "An intelligent grocery delivery platform that supports real-time inventory syncing, custom delivery slots, cart suggestions based on past orders, and easy-to-navigate UI for efficient and scheduled shopping experiences.",
    tags: ["Grocery", "Delivery", "E-Commerce"],
    category: "Mobile App",
    image: project4,
    iconClass: "mobile-app",
    link: "https://sabziko-grocery-delivery-applicatio.vercel.app/",
  },
  {
    id: 5,
    title: "Chess Master – Multiplayer App",
    description:
      "Interactive chess application for all skill levels with ranked multiplayer mode, AI-powered tutorials, strategic puzzle challenges, and global leaderboard support to enhance gameplay and community engagement.",
    tags: ["Chess", "Gaming", "Multiplayer"],
    category: "Mobile App",
    image: project5,
    iconClass: "mobile-app",
    link: "https://wastemanagement-x1s7.vercel.app/",
  },
  {
    id: 6,
    title: "CyberTrack – Cyber Hygiene Tracker",
    description:
      "A personal cybersecurity companion app that monitors password strength, device security, digital footprint alerts, and offers weekly actionable tips to maintain a healthy online presence and prevent vulnerabilities.",
    tags: ["Cybersecurity", "Tracker", "Safety"],
    category: "Web App",
    image: project6,
    iconClass: "web-development",
    link: "https://cyberhygienetrackerr-9gip.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-heading">Our Projects</h2>
      <p className="projects-subheading">
        Explore our portfolio of successful digital solutions that have
        transformed businesses across industries.
      </p>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-wrapper">
              <img
                draggable="false"
                loading="lazy"
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a target="_blank" href={project.link} className="project-link">
                Live Demo <HiArrowNarrowRight className="project-arrow" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
