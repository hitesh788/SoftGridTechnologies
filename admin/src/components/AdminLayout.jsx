// src/components/AdminLayout.jsx

import React from "react";
import Navbar from "../components/Navbar";
import "./AdminLayout.css"; // We'll add styles here
import Sidebar from "../components/Sidebar"
const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <Navbar />
      <div className="admin-main">
        <Sidebar />
        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
