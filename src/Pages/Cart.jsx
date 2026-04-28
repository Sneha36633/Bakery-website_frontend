import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../Context/CartContext';
import API from '../api/axiosConfig';
import './Cart.css';
const CartPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 0 ? 40 : 0;
  const total = subtotal + delivery;

  const isLoggedIn = Boolean(localStorage.getItem('token'));

  const handleCheckout = async (e) => {
    e?.stopPropagation();
    if (cart.length === 0) return;

    if (!isLoggedIn) {
      alert('Please login before placing your order.');
      navigate('/login');
      return;
    }

    const items = cart.map((item) => ({
      product: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
    }));

    try {
      await API.post('/cart/place-order', {
        items,
        subtotal,
        deliveryCharge: delivery,
        total,
      });
      alert('Order placed successfully! 🍰');
      clearCart();
      navigate('/profile');
    } catch (error) {
      alert(error.response?.data?.message || 'Unable to place order. Please try again.');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty-wrapper">
        <div className="cart-empty">
          <div className="empty-icon">🧺</div>
          <h2>Your cart is <span>empty</span>!</h2>
          <p>It looks like you haven't placed an order yet. Let's check out the menu!</p>
          <Link to="/" className="go-menu-btn">
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Go Back
        </Link>
        <h1>Your <span>Cart</span></h1>
        <p className="cart-count-text">{cart.length} item{cart.length > 1 ? 's' : ''}</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item, index) => (
            <div
              className="cart-card"
              key={item.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={item.image} alt={item.name} className="cart-item-img"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/80'; }}
              />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="item-category">{item.category || 'Bakery Item'}</p>
                <p className="item-price">₹{item.price}</p>
              </div>

              <div className="cart-item-controls">
                <div className="qty-control">
                  {/* ✅ e.stopPropagation() add kiya */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      updateQuantity(item.id, item.quantity - 1);
                    }}
                    disabled={item.quantity <= 1}
                  >
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      updateQuantity(item.id, item.quantity + 1);
                    }}
                  >
                    <FaPlus />
                  </button>
                </div>

                <p className="item-total">₹{item.price * item.quantity}</p>

                {/* ✅ e.stopPropagation() add kiya */}
                <button
                  className="remove-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromCart(item.id);
                  }}
                  title="Remove"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h2>Order <span>Summary</span></h2>
          <div className="summary-lines">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Charge</span>
              <span>₹{delivery}</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-row total-row">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          {/* ✅ e.stopPropagation() add kiya */}
          <button
            className="checkout-btn"
            onClick={handleCheckout}
          >
            <FaShoppingBag /> {isLoggedIn ? 'Order Now' : 'Login to Order'}
          </button>

          <p className="secure-note">🔒 Secure & Safe Payment</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;