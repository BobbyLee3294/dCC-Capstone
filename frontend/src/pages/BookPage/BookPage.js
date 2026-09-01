import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Book from "../../components/Book/Book";
import { bookKey } from "../../localKey";

const BookPage = () => {
  // Data passed from the previous route when a user clicks a book result.
  const { state } = useLocation();
  console.log("state:", state);

  // Google Books volume ID used to fetch the selected book details.
  const book_id = state.bookId;
  const [book, setBook] = useState({});
  const APIKey = bookKey;

  // Fetch the full book details from the Google Books API.
  const generateBookInfo = useCallback(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${book_id}?key=${APIKey}`,
      )
      .then((response) => {
        console.log(response.data);
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [APIKey, book_id]);

  // Load the selected book when the page mounts or the book ID changes.
  useEffect(() => {
    generateBookInfo();
  }, [generateBookInfo]);

  return (
    <div>
      <Book book={book} />
    </div>
  );
};

export default BookPage;
