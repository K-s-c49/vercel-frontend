import React from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // Make sure only admin can access
  if (!user || user.role !== "admin") {
    navigate("/admin-login");
    return null;
  }

  return (
   <div className="container py-4">
  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center bg-light p-4 rounded shadow-sm">
    <h2 className="mb-3 mb-md-0">Welcome Admin: {user.name}</h2>
    <div className="d-flex gap-2">
      <button
        className="btn btn-outline-primary"
        onClick={() => navigate("/admin/products")}
      >
        Manage Products
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => {
          localStorage.clear();
          navigate("/admin-login");
        }}
      >
        Logout
      </button>
    </div>
  </div>
</div>

  );
}

export default AdminDashboard;
