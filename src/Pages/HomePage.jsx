import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Library Management System</h1>
      <Link to="/admin/login">Admin Login</Link>
      <Link to="/user/login">User Login</Link>
    </div>
  );
};

export default HomePage;
