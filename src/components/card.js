import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cards({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from the backend API
  useEffect(() => {
    fetch('http://localhost:5000/api/products') // Adjust the URL if different
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    if (!Array.isArray(cart)) {
      console.warn('Cart is not defined properly');
      return;
    }

    const exists = cart.find(item => item._id === product._id);
    if (exists) {
      const updated = cart.map(item =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    navigate('/cart');
  };

  return (
    <div className="container mt-3">
      <h3>🛍 Products</h3>
      <div className="row justify-content-center">
        {products.map((data, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={data.image}
                className="card-img-top"
                style={{ height: '375px', width: '100%' }}
                alt={data.name}
              />
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.description}</p>
                <div className="d-flex align-items-center mb-2">
                  <h5 className="mb-0">₹{data.price}</h5>
                </div>
                <button
                  onClick={() => handleAddToCart(data)}
                  className="btn btn-primary"
                >
                  Add-To-Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
