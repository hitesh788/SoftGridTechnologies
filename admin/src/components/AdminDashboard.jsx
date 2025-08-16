import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);
  const [blogSubscriberCount, setBlogSubscriberCount] = useState(0);
  const [adContactCount, setAdContactCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    // Redirect if no token
    if (!token) {
      navigate("/admin-login");
      return;
    }

    // Fetch protected admin stats
    fetch(`${API_BASE}/api/admin/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          // Token expired or invalid → redirect to login
          localStorage.removeItem("adminToken");
          navigate("/admin-login");
          return;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setSubscriberCount(data.totalSubscribers || 0);
          setMessageCount(data.totalMessages || 0);
          setBlogSubscriberCount(data.totalBlogSubscribers || 0);
          setAdContactCount(data.totalAdContacts || 0);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching stats:", err);
        setLoading(false);
      });
  }, [API_BASE, navigate]);

  if (loading) {
    return <p className="loading-text">Loading Dashboard...</p>;
  }

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card subscribers-card">
          <h2>Total Subscribers</h2>
          <p>{subscriberCount}</p>
        </div>
        <div className="card messages-card">
          <h2>Total Messages</h2>
          <p>{messageCount}</p>
        </div>
        <div className="card blog-subscribers-card">
          <h2>Total Blog Subscribers</h2>
          <p>{blogSubscriberCount}</p>
        </div>
        <div className="card adcontact-card">
          <h2>Total Ad Contacts</h2>
          <p>{adContactCount}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
