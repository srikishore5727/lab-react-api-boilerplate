import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'

const BookDetails = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: { 'Authorization': 'whatever-you-want' }
    })
    .then(response => {
      setBooks(response.data.books);
    })
    .catch(error => {
      setError('Error fetching data');
      console.error(error);
    });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (books.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          <h1>{book.title}</h1>
          <div className='opt'>
          <img src={book.imageLinks.thumbnail} alt={book.title} />
          <p className='description'>{book.description}</p>
          </div>
          <p className='author'>Authors: {book.authors}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BookDetails;
