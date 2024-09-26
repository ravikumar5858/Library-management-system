import React, { useState } from 'react';
import axios from 'axios';

const ReturnBook = () => {
  const [bookId, setBookId] = useState('');

  const handleReturnBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books/return', { bookId });
      console.log('Book returned successfully');
    } catch (error) {
      console.error('Error returning book:', error);
    }
  };

  return (
    <div>
      <h2>Return Book</h2>
      <form onSubmit={handleReturnBook}>
        <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} placeholder="Book ID" required />
        <button type="submit">Return Book</button>
      </form>
    </div>
  );
};

export default ReturnBook;
