import React from 'react';
import firestore from '../firebase';

const BorrowButton = ({ book }) => {
  const borrowBook = () => {
    if (book.stock > 0) {
      firestore.collection('books').doc(book.id).update({ stock: book.stock - 1 });
      firestore.collection('borrowedBooks').add({ title: book.title, borrower: 'John Doe' });
    } else {
      alert('Book out of stock');
    }
  };

  return (
    <button onClick={borrowBook} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
      Borrow
    </button>
  );
};

export default BorrowButton;
