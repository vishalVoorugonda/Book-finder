import React from "react";

function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverURL = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <div className="book-card">
      <img src={coverURL} alt={book.title} />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>Author: {book.author_name ? book.author_name.join(", ") : "N/A"}</p>
        <p>First Published: {book.first_publish_year || "N/A"}</p>
      </div>
    </div>
  );
}

export default BookCard;
