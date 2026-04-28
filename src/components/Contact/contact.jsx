import React, { useState } from "react";
import "./Contact.css";
import API from '../../api/axiosConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    try {
      await API.post('/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // 5 second baad message hide karne ke liye (Optional)
      setTimeout(() => setStatus(''), 5000);
      
    } catch (err) {
      setStatus('error');
      setError(err.response?.data?.message || 'Unable to send message. Please try again later.');
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title"><span>Contact</span> Us</h2>
      <span className="contact-subtitle">Get in touch with our bakery</span>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        
        {/* Messages */}
        {status === 'success' && <p className="contact-success">Message sent successfully.</p>}
        {status === 'error' && <p className="contact-error">{error}</p>}
        
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;