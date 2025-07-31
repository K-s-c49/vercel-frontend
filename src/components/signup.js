// components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
         toast.error(data.message || 'Signup failed');
      } else {
            toast.success("Signup successful! Please login.", {
                autoClose: 2000
              });
     
               setTimeout(() => {
        navigate('/login');
      }, 2000);
        
      }
    } catch (err) {
       toast.error('Something went wrong');
    }
  };

  return (
  <div className="container-sm mt-5 d-flex justify-content-center">
  <div className="w-100" style={{ maxWidth: "420px" }}>
    <h2 className="mb-4 text-center">Signup</h2>
    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
      <div className="mb-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100 mb-2">Register</button>
      <div className="text-center">
        <a href="/login">Have an account?</a>
      </div>
    </form>
    <ToastContainer />
    {error && <p className="text-danger mt-3 text-center">{error}</p>}
  </div>
</div>

  );
};

export default Signup;
