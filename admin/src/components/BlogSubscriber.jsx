import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "../styles/BlogSubscriber.css";

const BlogSubscriber = () => {
  const [blogSubscribers, setBlogSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [subscriberToDelete, setSubscriberToDelete] = useState(null);
  const API_BASE = import.meta.env.VITE_API_BASE_URL; // ✅ Get base from .env

  const fetchBlogSubscribers = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/api/blog-subscribers`);
      if (!res.ok) throw new Error("Failed to fetch blog subscribers");
      const data = await res.json();
      setBlogSubscribers(data);
    } catch (err) {
      console.error(err);
      setError("Error fetching blog subscribers");
    } finally {
      setLoading(false);
    }
  };

  const deleteSubscriber = async (id) => {
   try {
     const res = await fetch(`${API_BASE}/api/blog-subscribers/${id}`, {
       method: "DELETE",
     });
     if (!res.ok) throw new Error("Failed to delete subscriber");

     setBlogSubscribers(blogSubscribers.filter((s) => s._id !== id));
     toast.success("Subscriber deleted successfully");
   } catch (err) {
     console.error(err);
     toast.error("Error deleting subscriber");
   } finally {
     setSubscriberToDelete(null);
   }
  };

  useEffect(() => {
    fetchBlogSubscribers();
  }, []);

  return (
    <div className="blog-subscriber-container">
      <h2>Blog Subscribers</h2>

      {loading && <p className="bs-loading">Loading subscribers...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && blogSubscribers.length === 0 && (
        <p className="no-data">No blog subscribers found.</p>
      )}

      {!loading && blogSubscribers.length > 0 && (
        <table className="blog-subscriber-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Subscribed On</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {blogSubscribers.map((subscriber) => (
              <tr key={subscriber._id}>
                <td>{subscriber.email}</td>
                <td>
                  {new Date(subscriber.createdAt).toLocaleDateString()}{" "}
                  {new Date(subscriber.createdAt).toLocaleTimeString()}
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => setSubscriberToDelete(subscriber._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {subscriberToDelete && (
        <div className="confirm-overlay">
          <div className="confirm-box">
            <p>Are you sure you want to delete this subscriber?</p>
            <div className="confirm-actions">
              <button
                className="btn-delete"
                onClick={() => deleteSubscriber(subscriberToDelete)}
              >
                Delete
              </button>
              <button
                className="btn-cancel"
                onClick={() => setSubscriberToDelete(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSubscriber;
