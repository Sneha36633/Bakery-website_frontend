import axios from 'axios';

const API = axios.create({
  baseURL: 'https://classic-bakery-backend-3.onrender.com/api'  // ✅ ye change karo
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;