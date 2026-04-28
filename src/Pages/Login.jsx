import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
import API from '../api/axiosConfig';
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password };

      const { data } = await API.post(endpoint, payload);

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({ name: data.name, email: data.email }));
      setAuthError('');
      alert(isLogin ? 'Login successful! 🎉' : 'Account created successfully! 🎂');
      navigate('/profile');
    } catch (error) {
      setAuthError(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  const handleGoogle = () => {
    alert('Google login coming soon! 🚀');
  };

  return (
    <div className="auth-page">
      <div className="auth-bg-circle c1" />
      <div className="auth-bg-circle c2" />
      <div className="auth-bg-circle c3" />

      <div className="auth-card">
        {/* Logo */}
        <Link to="/" className="auth-logo">
          <span className="auth-logo-text">CLASSIC <span>BAKERY</span></span>
        </Link>

        {/* Tab Toggle */}
        <div className="auth-tabs">
          <button
            className={`auth-tab ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`auth-tab ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
          <div className={`tab-indicator ${isLogin ? 'left' : 'right'}`} />
        </div>

        <h2 className="auth-title">
          {isLogin ? 'Welcome Back!' : 'Get Started!'}
        </h2>
        <p className="auth-subtitle">
          {isLogin
            ? 'Login to your account and track your orders'
            : 'Create a new account and enjoy delicious treats!'}
        </p>

        {authError && <p className="auth-error">{authError}</p>}

        {/* Google Button */}
        <button className="google-btn" onClick={handleGoogle}>
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <div className="auth-divider">
          <span>or</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Name - signup only */}
          {!isLogin && (
            <div className="input-group" style={{ animation: 'slideDown 0.3s ease' }}>
              <FaUser className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Email */}
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password - signup only */}
          {!isLogin && (
            <div className="input-group" style={{ animation: 'slideDown 0.3s ease' }}>
              <FaLock className="input-icon" />
              <input
                type={showConfirm ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          )}

          {/* Forgot Password */}
          {isLogin && (
            <div className="forgot-row">
              <Link to="/forgot-password" className="forgot-link">
                Forgot your password?
              </Link>
            </div>
          )}

          <button type="submit" className="auth-submit-btn">
            {isLogin ? 'Login to Account' : 'Create Account'}
          </button>
        </form>

        <p className="auth-switch">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            className="switch-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;