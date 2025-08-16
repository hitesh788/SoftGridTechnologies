// BlogSubscribeSection.jsx
import React, { useState } from "react";
import toast from "react-hot-toast";
import "./BlogSubscribeSection.css";

const BlogSubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
const handleSubscribe = async () => {
  if (!email.trim()) {
    toast.error("Please enter a valid email");
    return;
  }

  try {
    setLoading(true);
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/blog-subscribers`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    const data = await res.json(); // Parse the JSON message from backend

    if (res.ok) {
      toast.success(data.message || "Subscribed successfully!");
      setEmail("");
    } else {
      toast.error(data.message || "Failed to subscribe. Try again.");
    }
  } catch (error) {
    console.error(error);
    toast.error("Error connecting to server.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="blog-subscribe-section">
      <p className="subscribe-text">Get updated</p>
      <h1 className="subscribe-heading">
        Subscribe to our newsletter & get the latest blogs
      </h1>
      <div className="subscribe-input-container">
        <input
          required
          type="text"
          className="subscribe-input"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="subscribe-button"
          onClick={handleSubscribe}
          disabled={loading}
        >
          {loading ? "Subscribing..." : "Subscribe now"}
        </button>
      </div>
    </div>
  );
};

export default BlogSubscribeSection;
