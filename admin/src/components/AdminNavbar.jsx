import React, { useState } from "react";
import "../styles/AdminNavbar.css";
import logo from "../assets/logo copy.png";

const AdminNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin-login"; // redirect to login
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="logo">
          <a href="/admin">
            <img src={logo} alt="Admin Logo" />
          </a>
        </div>

        <div className="nav-links desktop">
          <a href="/admin">Dashboard</a>
          <a href="/admin/subscribers">Subscribers</a>
          <a href="/admin/contacts">Contacts</a>
          <a href="/admin/blog-subscriber">BlogSubscriber</a>
          <a href="/admin/advertise-with-us">AdContact</a>
          <button className="nav-logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="/admin" onClick={toggleMenu}>
            Dashboard
          </a>
          <a href="/admin/subscribers" onClick={toggleMenu}>
            Subscribers
          </a>
          <a href="/admin/contacts" onClick={toggleMenu}>
            Contacts
          </a>
          <a href="/admin/blog-subscriber" onClick={toggleMenu}>
            Blog-Subscribers
          </a>
          <a href="/admin/advertise-with-us" onClick={toggleMenu}>
            AdContact
          </a>
          <button className="nav-logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default AdminNavbar;
