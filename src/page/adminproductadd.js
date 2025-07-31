import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminAddProduct() {
  // Form state to hold product data
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: "",
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Handle form input changes
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to create new product
      await axios.post("http://localhost:5000/api/products", product, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // Redirect to product list after success
      navigate("/admin/products");
    } catch (err) {
      console.error("Failed to add product", err);
      alert("Error: Unable to add product");
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Add New Product</h2>

      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-3">
          <label className="form-label">Name *</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={product.description}
            onChange={handleChange}
            rows="3"
          />
        </div>

        {/* Price */}
        <div className="mb-3">
          <label className="form-label">Price *</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={product.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </div>

        {/* Stock */}
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="number"
            name="stock"
            className="form-control"
            value={product.stock}
            onChange={handleChange}
            min="0"
          />
        </div>

        {/* Category */}
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            name="category"
            className="form-control"
            value={product.category}
            onChange={handleChange}
          />
        </div>

        {/* Image URL */}
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            name="image"
            className="form-control"
            value={product.image}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AdminAddProduct;
