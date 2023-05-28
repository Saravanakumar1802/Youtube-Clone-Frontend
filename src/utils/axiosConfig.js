import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://youtube-clone-backend-sk.onrender.com/api",
  withCredentials: true,
});

// baseURL: "http://localhost:7001/api"