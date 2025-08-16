import React from "react";
import "../styles/PageNotFound.css";

const PageNotFound = () => {
  const handleReturnHome = () => {
    window.location.href = "/";
  };

  const handleContactSupport = () => {
    // Store section name for Home page scroll
    sessionStorage.setItem("scrollTo", "contact");
    window.location.href = "/";
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="not-found-buttons">
          <button className="not-found-btn" onClick={handleReturnHome}>
            Return Home
          </button>
          <button
            className="not-found-btn outline"
            onClick={handleContactSupport}
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
