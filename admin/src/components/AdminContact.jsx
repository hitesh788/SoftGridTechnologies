import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "../styles/AdminContact.css";
import {toast} from 'react-hot-toast'
const AdminContact = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const API_BASE = import.meta.env.VITE_API_BASE_URL; // ✅ From .env

  useEffect(() => {
    setTimeout(() => {
      fetchMessages();
    });
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/contacts`);
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error("Error fetching messages:", err);
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/contacts/${deleteId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Message deleted successfully!");
        setMessages((prev) => prev.filter((msg) => msg._id !== deleteId));
      }
    } catch (err) {
      console.error("Error deleting message:", err);
    } finally {
      setShowConfirm(false);
      setDeleteId(null);
    }
  };

  return (
    <section className="contact-container">
      <h2 className="admin-contact-title">Home Messages</h2>

      {loading ? (
        <div className="contact-lazy-loader">
          <div className="contact-loader"></div>
        </div>
      ) : messages.length > 0 ? (
        <div className="table-container">
          <table className="contact-table">
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Received At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr key={msg._id}>
                  <td>{index + 1}</td>
                  <td>{msg.name}</td>
                  <td>{msg.email}</td>
                  <td>
                    <div className="message-scroll">{msg.message}</div>
                  </td>
                  <td>{new Date(msg.createdAt).toLocaleString()}</td>
                  <td>
                    <FaTrashAlt
                      className="delete-icon"
                      onClick={() => confirmDelete(msg._id)}
                      title="Delete message"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="no-messages-text">No contact messages yet.</p>
      )}

      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Are you sure you want to delete this message?</h3>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={handleDelete}>
                Delete
              </button>
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
    </section>
  );
};

export default AdminContact;
