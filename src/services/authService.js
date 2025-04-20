import axios from 'axios';

const API_URL = 'http://localhost:5172/api/Auth'; // adjust port if different

export const login = (data) => {
  return axios.post(`${API_URL}/login`, data);
};

export const register = (data) => {
  return axios.post(`${API_URL}/register`, data);
};
