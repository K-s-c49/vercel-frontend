import React, { useState } from "react";
import axios from "axios";

// ✅ React component for Admin Login
function Alogin(){
  // State to hold email and password
  const [email, setEmail] = useState("khushal02@gmail.com"); // default email
  const [password, setPassword] = useState("123");      // default password
  const [error, setError] = useState("");                     // to show login error

  // 🔐 Function to handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form refresh

    try {
      // 📨 Send login request to backend API
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // ✅ Save token and user info in browser localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // 🚀 Redirect to admin dashboard after successful login
      window.location.href = "/admin";
    } catch (err) {
      // ❌ Show error message if login fails
      setError(err.response?.data?.message || "Login failed");
    }
  };

  // 🧾 UI for admin login form
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
  <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
    <h2 className="text-center mb-4">Admin Login</h2>
    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Admin Email"
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">Login</button>

      {error && <p className="text-danger text-center mt-3">{error}</p>}
    </form>
  </div>
</div>

  );
}

export default Alogin; // ✅ Export the component
