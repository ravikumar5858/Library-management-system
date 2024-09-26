import React, { useState } from 'react';
import axios from 'axios';

const IssueBook = () => {
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');

  const handleIssueBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books/issue', { bookId, userId });
      console.log('Book issued successfully');
    } catch (error) {
      console.error('Error issuing book:', error);
    }
  };

  return (
    <div>
      <h2>Issue Book</h2>
      <form onSubmit={handleIssueBook}>
        <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} placeholder="Book ID" required />
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" required />
        <button type="submit">Issue Book</button>
      </form>
    </div>
  );
};

export default IssueBook;
