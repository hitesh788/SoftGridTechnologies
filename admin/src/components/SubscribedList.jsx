import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "../styles/SubscribedList.css";
import {toast} from "react-hot-toast";
const SubscribedList = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const API_BASE = import.meta.env.VITE_API_BASE_URL; // ✅ Use .env

  useEffect(() => {
    fetch(`${API_BASE}/api/subscribers`)
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort(
          (a, b) => new Date(b.subscribedAt) - new Date(a.subscribedAt)
        );
        setEmails(sortedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching subscribers:", err);
        setLoading(false);
      });
  }, []);

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/subscribers/${deleteId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Subscriber deleted successfully");
        setEmails((prev) =>
          prev.filter((subscriber) => subscriber._id !== deleteId)
        );
      } else {
        console.error("Failed to delete subscriber");
      }
    } catch (error) {
      console.error("Error deleting subscriber:", error);
    } finally {
      setShowConfirm(false);
      setDeleteId(null);
    }
  };

  return (
    <div className="subscribed-container">
      <h2 className="subscribed-title"> Footer Subscribed Emails</h2>

      {loading ? (
        <div className="spinner-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="table-container">
          <table className="subscriber-table">
            <thead>
              <tr>
                <th>SN</th>
                <th>Email</th>
                <th>Subscribed At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {emails.map((subscriber, index) => (
                <tr key={subscriber._id}>
                  <td>{index + 1}</td>
                  <td>{subscriber.email}</td>
                  <td>{new Date(subscriber.subscribedAt).toLocaleString()}</td>
                  <td>
                    <FaTrashAlt
                      className="delete-icon"
                      onClick={() => confirmDelete(subscriber._id)}
                      title="Delete subscriber"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {emails.length === 0 && !loading && (
            <p className="no-subscribers">No subscribers yet.</p>
          )}
        </div>
      )}

      {/* Confirmation Popup */}
      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Are you sure you want to delete?</h3>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={handleDelete}>
                Delete
              </button>{" "}
              <button
                className="cancel-btn"
                onClick={() => setShowConfirm(false)}
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

export default SubscribedList;
