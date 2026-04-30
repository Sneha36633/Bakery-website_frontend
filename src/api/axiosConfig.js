// api.js
import axios from "axios";

// 🔗 Base config
const API = axios.create({
  baseURL: "https://your-backend-url", // ⚠️ apna backend URL daal
  withCredentials: true
});

// 🔐 Token auto attach
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// 🟢 Signup
export const signupUser = async (data) => {
  try {
    const res = await API.post("/signup", data);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};

// 🔵 Login
export const loginUser = async (data) => {
  try {
    const res = await API.post("/login", data);

    // token save
    localStorage.setItem("token", res.data.token);

    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};

// 🟣 Contact
export const sendContact = async (data) => {
  try {
    const res = await API.post("/contact", data);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};

export default API;