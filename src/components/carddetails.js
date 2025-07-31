import React from 'react'
import { useNavigate } from 'react-router-dom';

function Carddetail({ cart, setCart }) {
const navigate = useNavigate();

  const increment = (productId) => {
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decrement = (productId) => {
    const updated = cart
      .map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0);
    setCart(updated);
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button className="btn btn-secondary" onClick={() => navigate('/products')}>
            ← Back to Products
          </button>
        </div>
      ) : (
        <>
          <table className="table table-bordered mt-3">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td> 
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}/>
                </td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.price}</td>
                  <td>₹{item.price * item.quantity}</td>
                  <td>
                    <button onClick={() => increment(item.id)} className="btn btn-sm btn-success me-2">+</button>
                    <button onClick={() => decrement(item.id)} className="btn btn-sm btn-danger">-</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="mt-3">Total: ₹{totalAmount}</h4>
           
          <button className="btn btn-secondary mt-3 mb-2" onClick={() => navigate('/products')}>
            ← Continue Shopping
          </button>
            <button className="btn btn-primary mt-3 mx-2 mb-2">
                  Pay Now
            </button>
        </>
      )}
    </div>
 
  )
}

export default Carddetail
