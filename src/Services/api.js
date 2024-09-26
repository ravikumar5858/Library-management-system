import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Ensure this matches your backend URL

export const loginAdmin = (username, password) => {
  return axios.post(`${API_URL}/admin/login`, { username, password });
};

export const addBook = (title, author) => {
  return axios.post(`${API_URL}/books/add`, { title, author });
};

export const issueBook = (bookId, userId) => {
  return axios.post(`${API_URL}/books/issue`, { bookId, userId });
};

export const returnBook = (bookId) => {
  return axios.post(`${API_URL}/books/return`, { bookId });
};

// Add more functions as needed
