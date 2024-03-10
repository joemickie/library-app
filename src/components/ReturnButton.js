import React from 'react';
import firestore from '../firebase';

const ReturnButton = ({ borrowedBookId }) => {
  const returnBook = () => {
    firestore.collection('borrowedBooks').doc(borrowedBookId).delete();
    // Update the stock of the book when it's returned
    // Assuming you have a field in the borrowed book document to store the book ID
    // Retrieve the book ID and update its stock
    // Example:
    // firestore.collection('books').doc(bookId).update({ stock: updatedStock });
  };

  return (
    <button onClick={returnBook} className="bg-green-500 text-white font-bold py-2 px-4 rounded">
      Return
    </button>
  );
};

export default ReturnButton;
