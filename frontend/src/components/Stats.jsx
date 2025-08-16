import React from "react";
import "../styles/Stats.css";

const statsData = [
  { number: "8+", label: "Projects Completed" },
  { number: "10+", label: "Happy Clients" },
  { number: "1+", label: "Years Experience" },
  { number: "5+", label: "Team Members" },
];

const Stats = () => {
  return (
    <section className="home-bottom-stats-section">
      <div className="home-bottom-stats-container">
        {statsData.map((stat, index) => (
          <div className="home-bottom-stat-box" key={index}>
            <h3 className="home-bottom-stat-number">{stat.number}</h3>
            <p className="home-bottom-stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
