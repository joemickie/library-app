import React from 'react';
import firestore from '../firebase';

const BorrowButton = ({ book }) => {
  const borrowBook = () => {
    if (book.stock > 0) {
      // Update stock of the book
      firestore.collection('books').doc(book.id).update({ stock: book.stock - 1 })
      .then(() => {
        // Add the borrowed book to borrowedBooks collection
        firestore.collection('borrowedBooks').add({ title: book.title, borrower: 'John Doe' })
        .then(() => {
          console.log('Book borrowed successfully');
        })
        .catch(error => {
          console.error('Error borrowing book:', error);
        });
      })
      .catch(error => {
        console.error('Error updating stock:', error);
      });
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