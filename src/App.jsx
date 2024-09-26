import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import AdminDashboard from './components/AdminDashboard';
import AddBook from './components/AddBook';
import IssueBook from './components/IssueBook';
import ReturnBook from './components/ReturnBook';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-book" element={<AddBook />} />
        <Route path="/admin/issue-book" element={<IssueBook />} />
        <Route path="/admin/return-book" element={<ReturnBook />} />
      </Routes>
    </Router>
  );
}

export default App;
