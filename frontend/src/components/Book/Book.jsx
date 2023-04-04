import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { bookKey } from "../../localKey";

const Book = ({ book_id }) => {
  const [bookId, setBookId] = useState("");
  const [book, setBook] = useState([]);

  const generateBookTitles = useCallback(async () => {
    try {
      const APIKey = bookKey;
      const BASE_URL = `https://www.googleapis.com/books/v1/volumes/${book_id}?key=${APIKey}`;
      axios.get(BASE_URL).then((response) => {
        console.log("Book: " + response.data);
        setBook(response.data);
        setBookId(response.data.id);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [book_id]);

  useEffect(() => {
    generateBookTitles();
  }, [generateBookTitles]);
  return (
    <div>
      <h6>
        {/* Question: Would it be better to use Google Books embedded viewer API here? */}
        This is a book. It should display the title, the author , and other
        metadata
      </h6>
      <div>{bookId}</div>
    </div>
  );
};

export default Book;
