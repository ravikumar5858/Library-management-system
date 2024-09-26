import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books/add', { title, author });
      console.log('Book added successfully');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleAddBook}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
