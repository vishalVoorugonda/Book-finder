import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async (query) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await response.json();
      if (data.docs.length === 0) {
        setError("No books found!");
      }
      setBooks(data.docs);
    } catch (err) {
      setError("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title"> Book Finder</h1>
      <SearchBar onSearch={fetchBooks} />
      {loading && <p className="info-text">Loading...</p>}
      {error && <p className="error-text">{error}</p>}
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
