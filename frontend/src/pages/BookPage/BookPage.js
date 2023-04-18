import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Book from "../../components/Book/Book";
import { bookKey } from "../../localKey";

const BookPage = () => {
  const { state } = useLocation();
  const [book, setBook] = useState();
  const APIKey = bookKey;

  // TODO: #9 insert savedData.el.id from BookViewer to book_id
  const book_id = { state };
  const generateBookInfo = useCallback(() => {
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
  });
  return (
    <div>
      <h2>A page for the Book component</h2>
      <Book book={book} />
    </div>
  );
};

export default BookPage;
