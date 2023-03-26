import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { bookKey } from "../../localKey";

const Bookshelf = (props) => {
  const generateBookTitles = useCallback(() => {
    const bookTitles = [];
    const APIKey = bookKey;
    // TODO: Implent search capabilities for the query variable
    const query = props;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${APIKey}`
      )
      .then((response) => {
        const bookData = response.data.items;
        bookData.forEach((book) => {
          const title = book.volumeInfo.title;
          bookTitles.push(title);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
    const books = bookTitles.map((title) => ({ title }));
    return JSON.stringify(books);
  }, [props]);
  useEffect(() => {
    generateBookTitles();
  }, [generateBookTitles]);
  return (
    <div>
      This is a bookshelf where you seen the books that are placed here.
    </div>
  );
};

export default Bookshelf;
