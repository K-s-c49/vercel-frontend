// src/pages/EditProduct.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { apiUrl } from "./AdminProductList"; // or import from a central config

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get(`${apiUrl}/products/${id}`);
        const p = res.data;
        setForm({
          name: p.name || "",
          description: p.description || "",
          price: p.price ?? "",
          stock: p.stock ?? "",
          image: p.image || "",
        });
      } catch (err) {
        console.error("Failed to fetch product", err);
        alert("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${apiUrl}/products/${id}`,
        {
          name: form.name,
          description: form.description,
          price: parseFloat(form.price),
          stock: parseInt(form.stock, 10),
          image: form.image,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Product updated");
      navigate("/admin/products");
    } catch (err) {
      console.error("Update failed", err);
      alert("Update failed. Check console for details.");
    }
  };

  if (loading) return <div className="container py-4">Loading...</div>;

  return (
    <div className="container py-4">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            name="price"
            type="number"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            name="stock"
            type="number"
            value={form.stock}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="form-control"
            rows="4"
          />
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/admin/products")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
