import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Book from "../../components/Book/Book";
import { bookKey } from "../../localKey";

const BookPage = (props) => {
  const [book, setBook] = useState();
  const APIKey = bookKey;
  const book_id = "INSERT BOOK ID";

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
  }, [APIKey]);

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
