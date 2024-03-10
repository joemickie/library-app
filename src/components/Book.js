import React from 'react';
import BorrowButton from './BorrowButton';

const Book = ({ book }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <h3 className="text-lg font-bold mb-2">{book.title}</h3>
      <p className="text-gray-700">Author: {book.author}</p>
      <p className="text-gray-700">Genre: {book.genre}</p>
      <p className="text-gray-700">Stock: {book.stock}</p>
      <BorrowButton book={book} />
    </div>
  );
};

export default Book;