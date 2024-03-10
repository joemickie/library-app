import React, { useState, useEffect } from 'react';
import firestore from '../firebase';
import Book from './Book';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('books').onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBooks(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Library Catalog</h2>
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
