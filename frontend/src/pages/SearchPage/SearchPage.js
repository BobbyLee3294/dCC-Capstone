import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { bookKey } from "../../localKey";

// import components
import BookViewer from "../../components/BookViewer/BookViewer";
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [savedData, setSavedData] = useState([]);
  const APIKey = bookKey;

  const fetchBooks = useCallback(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${APIKey}`
      )
      .then((response) => {
        console.log(response.data);
        setSavedData(response.data.items);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [APIKey, query]);

  useEffect(() => {
    fetchBooks();
    console.log("Collecting results for Google Books.");
  }, [fetchBooks]);

  return (
    <div>
      <h1>This is the search page. Here you can search and view books.</h1>
      <div>
        <SearchBar setQuery={setQuery} fetchBooks={fetchBooks} />
      </div>
      <div>
        <BookViewer savedData={savedData} />
      </div>
    </div>
  );
};

export default SearchPage;
