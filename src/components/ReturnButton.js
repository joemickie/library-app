import React from 'react';
import firestore from '../firebase';

const ReturnButton = ({ borrowedBookId, bookId }) => {
  const returnBook = async () => {
    try {
      // Delete the borrowed book document
      await firestore.collection('borrowedBooks').doc(borrowedBookId).delete();
      
      // Retrieve the book document to update its stock
      const bookRef = firestore.collection('books').doc(bookId);
      const bookSnapshot = await bookRef.get();
      
      // Get current stock
      const currentStock = bookSnapshot.data().stock;
      
      // Update the stock (increment by 1 for return)
      const updatedStock = currentStock + 1;
      
      // Update the stock in the book document
      await bookRef.update({ stock: updatedStock });
      
      console.log('Book returned successfully!');
    } catch (error) {
      console.error('Error returning book:', error);
    }
  };

  return (
    <button onClick={returnBook} className="bg-green-500 text-white font-bold py-2 px-4 rounded">
      Return
    </button>
  );
};

export default ReturnButton;

