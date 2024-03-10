import React, { useState, useEffect } from 'react';
import firestore from '../firebase';

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('borrowedBooks').onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBorrowedBooks(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Borrowed Books</h2>
      {borrowedBooks.map(book => (
        <div key={book.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h3 className="text-lg font-bold mb-2">{book.title}</h3>
          <p className="text-gray-700">Borrower: {book.borrower}</p>
        </div>
      ))}
    </div>
  );
};

export default BorrowedBooks;