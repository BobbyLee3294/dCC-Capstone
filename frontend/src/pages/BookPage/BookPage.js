import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Book from "../../components/Book/Book";
import { bookKey } from "../../localKey";

const BookPage = () => {
  const { state } = useLocation();
  console.log("state:", state);
  const book_id = state.bookId;
  const [book, setBook] = useState({});
  const APIKey = bookKey;

  const generateBookInfo = useCallback(() => {
    // debugger;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${book_id}?key=${APIKey}`
      )
      .then((response) => {
        console.log(response.data);
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [APIKey, book_id]);

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
