import React, { useEffect, useState } from "react";
import axios from "axios";
 export const apiUrl = process.env.REACT_APP_API_URL;


function AdminProductList() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${apiUrl}/products`);
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to load products");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProducts(); // Refresh list
    } catch (err) {
      console.error("Delete failed");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
   <div className="container py-4">
  <div className="d-flex justify-content-between align-items-center mb-3">
    <h2 className="mb-0">All Products</h2>
    <button
      className="btn btn-success"
      onClick={() => (window.location.href = "/admin/products/new")}
    >
      Add Product
    </button>
  </div>

  <div className="table-responsive">
    <table className="table table-bordered table-hover align-middle">
      <thead className="table-light">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p._id}>
            <td>{p.name}</td>
            <td>${p.price}</td>
            <td>{p.stock}</td>
            <td>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(p._id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}

export default AdminProductList;
