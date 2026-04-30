import axios from 'axios';

const API = axios.create({
  // '/api' ki jagah apna Render wala URL dalein
  baseURL: 'https://classic-bakery-backend.onrender.com/api', 
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;