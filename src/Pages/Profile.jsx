import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axiosConfig';
import './Pages.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const [orders, setOrders] = useState([]);
  const [orderError, setOrderError] = useState('');
  const [loadingOrders, setLoadingOrders] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const { data } = await API.get('/auth/profile');
        setProfile(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Unable to load profile.');
      }
    };

    const fetchOrders = async () => {
      try {
        const { data } = await API.get('/cart/my-orders');
        setOrders(data);
      } catch (err) {
        setOrderError(err.response?.data?.message || 'Unable to load order history.');
      } finally {
        setLoadingOrders(false);
      }
    };

    fetchProfile();
    fetchOrders();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (error) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <h2>Profile Error</h2>
          <p>{error}</p>
          <button className="profile-logout-btn" onClick={handleLogout}>
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <h2>Loading profile...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2>Welcome, {profile.name}!</h2>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Joined:</strong> {new Date(profile.createdAt).toLocaleDateString()}</p>

        <div className="order-history-section">
          <h3>Your Order History</h3>
          {loadingOrders ? (
            <p>Loading order history...</p>
          ) : orderError ? (
            <p className="order-error">{orderError}</p>
          ) : orders.length === 0 ? (
            <p>You have no past orders yet. Place your first order to see it here.</p>
          ) : (
            orders.map((order) => (
              <div key={order._id} className="order-card">
                <div className="order-card-header">
                  <div>
                    <p><strong>Order ID:</strong> {order._id}</p>
                    <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                  <span className="order-status">{order.status}</span>
                </div>
                <div className="order-items">
                  {order.items.map((item) => (
                    <div key={`${order._id}-${item.name}`} className="order-item-row">
                      <span>{item.name} x{item.quantity}</span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="order-summary-row">
                  <span>Subtotal</span>
                  <span>₹{order.subtotal}</span>
                </div>
                <div className="order-summary-row">
                  <span>Delivery</span>
                  <span>₹{order.deliveryCharge}</span>
                </div>
                <div className="order-summary-row order-total-row">
                  <strong>Total</strong>
                  <strong>₹{order.total}</strong>
                </div>
              </div>
            ))
          )}
        </div>

        <button className="profile-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
