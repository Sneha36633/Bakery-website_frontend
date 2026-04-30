// api.js
import axios from "axios";

const API = axios.create({
  baseURL: " https://classic-bakery-backend.onrender.com/api", // ✅ /api add kiya
  withCredentials: true
});

// 🔐 Token auto attach
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;