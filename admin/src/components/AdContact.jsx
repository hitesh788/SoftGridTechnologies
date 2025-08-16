import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "../styles/AdContact.css";

const AdContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const API_BASE = import.meta.env.VITE_API_BASE_URL; // ✅ Using env variable

  // Fetch contacts
  const fetchContacts = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/advertise-with-us`);
      const data = await res.json();
      setContacts(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setLoading(false);
    }
  };

  // Open confirmation modal
  const confirmDelete = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  // Handle delete
  const handleDelete = async () => {
    try {
      await fetch(`${API_BASE}/api/advertise-with-us/${selectedId}`, {
        method: "DELETE",
      });
      setContacts(contacts.filter((c) => c._id !== selectedId));
      setShowModal(false);
      toast.success("Contact deleted successfully");
    } catch (err) {
      console.error("Error deleting contact:", err);
      toast.error("Failed to delete contact");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading)
    return (
      <div className="ad-lazy-loader">
        <div className="ad-loader"></div>
      </div>
    );

  return (
    <div className="adcontact-container">
      <h1 className="adcontact-title">Advertise With Us - Contacts</h1>

      {contacts.length === 0 ? (
        <p className="adcontact-empty">No contacts found.</p>
      ) : (
        <table className="adcontact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Submitted At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone || "—"}</td>
                <td>{contact.message}</td>
                <td>{new Date(contact.createdAt).toLocaleString()}</td>
                <td>
                  <button
                    className="adcontact-delete-btn"
                    onClick={() => confirmDelete(contact._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Confirmation Modal */}
      {showModal && (
        <div className="adcontact-modal-overlay">
          <div className="adcontact-modal">
            <h3>Are you sure?</h3>
            <p>This is permanent. Do you want to continue?</p>
            <div className="modal-actions">
              <button className="delete-btn" onClick={handleDelete}>
                Delete
              </button>
              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
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

export default AdContact;
