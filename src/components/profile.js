// src/pages/Profile.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    avatar: "",
  });

  // ✅ Fetch logged-in user profile on load
  useEffect(() => {
    const token = localStorage.getItem("token"); // store JWT when login
    if (!token) return;

    axios
      .get("https://backend-626x.onrender.com/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() => toast.error("Failed to load profile"));
  }, []);

  // ✅ Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // ✅ Save profile
  const handleSave = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.put("http://localhost:5000/api/users/me", user, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Profile updated!");
    } catch (err) {
      toast.error("Update failed");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">👤 My Profile</h2>

      <form
        onSubmit={handleSave}
        className="p-4 border rounded shadow bg-light"
        style={{ maxWidth: "600px" }}
      >
        {/* Avatar Preview */}
        {user.avatar && (
          <div className="text-center mb-3">
            <img
              src={user.avatar}
              alt="avatar"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
        )}

        {/* Name */}
        <div className="mb-3">
          <label className="form-label fw-bold">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
        <input
  type="email"
  name="email"
  value={user.email}
  onChange={handleChange}
  className="form-control"
  readOnly
/>

        </div>

        {/* Address */}
        <div className="mb-3">
          <label className="form-label fw-bold">Address</label>
          <textarea
            name="address"
            value={user.address}
            onChange={handleChange}
            className="form-control"
            rows="3"
          ></textarea>
        </div>

        {/* Avatar */}
        <div className="mb-3">
          <label className="form-label fw-bold">Avatar URL</label>
          <input
            type="text"
            name="avatar"
            value={user.avatar}
            onChange={handleChange}
            className="form-control"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Profile;
