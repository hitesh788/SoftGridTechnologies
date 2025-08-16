import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SubscribedList from "./components/SubscribedList";
import AdminContact from "./components/AdminContact";
import AdminNavbar from "./components/AdminNavbar";
import AdminDashboard from "./components/AdminDashboard";
import BlogSubscriber from "./components/BlogSubscriber";
import { Toaster } from "react-hot-toast";
import AdContact from "./components/AdContact";
import AdminLogin from "./components/AdminLogin";

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
};

const App = () => {
  const token = localStorage.getItem("adminToken");

  return (
    <Router>
      {/* Show navbar only if logged in */}
      {token && <AdminNavbar />}
      <Toaster />
      <Routes>
        {/* Public route */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Protected routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/subscribers"
          element={
            <ProtectedRoute>
              <SubscribedList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/contacts"
          element={
            <ProtectedRoute>
              <AdminContact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blog-subscriber"
          element={
            <ProtectedRoute>
              <BlogSubscriber />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/advertise-with-us"
          element={
            <ProtectedRoute>
              <AdContact />
            </ProtectedRoute>
          }
        />

        {/* Redirect any unknown route to login */}
        <Route path="*" element={<Navigate to="/admin-login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
