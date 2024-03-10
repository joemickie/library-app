import React from "react";
import BookList from "./components/BookList";
// import BorrowedBooks from './components/BorrowedBooks';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Library Management System</h1>
      <BookList />
      {/* <BorrowedBooks /> */}
    </div>
  );
}

export default App;