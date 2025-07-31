// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  // State to hold form input values
  const [formData, setFormData] = useState({ email: '', password: '' });
  // State to hold error messages
  const [error, setError] = useState('');
    const navigate = useNavigate();

  // Handle changes in input fields
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault(); // Prevent default form submit behavior
    setError('');       // Clear any previous errors

    try {
      // Send POST request to backend with login data
      const res = await axios.post('http://localhost:5000/api/login', formData);
      const { token, user } = res.data;

      // Save token in localStorage (you can also use cookies for more security in production)
      localStorage.setItem('token', token);

      // Redirect or update UI on success
       toast.success(`Welcome back, ${user.name}!`, {
        autoClose: 2000
      });
    // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/home');
      }, 2000);
      // window.location.href = '/dashboard'; // Optional redirect
    } catch (err) {
      // Handle errors (e.g., incorrect credentials)
      const msg = err.response?.data?.message || 'Login error';
       toast.error(msg);
    }
  };

  return (
 <div className="container d-flex align-items-center justify-content-center min-vh-100">
  <div className="card shadow-sm p-4 w-100" style={{ maxWidth: '400px' }}>
    <h2 className="text-center mb-4">Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <a href="/" className="small text-decoration-none">Sign-in</a>
      </div>

      <button type="submit" className="btn btn-primary w-100">Login</button>
      {error && <p className="text-danger mt-3 text-center">{error}</p>}
    </form>
    <ToastContainer />
  </div>
</div>


  );
};

export default Login;
