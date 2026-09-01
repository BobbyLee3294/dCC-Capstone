import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { bookKey } from "../../localKey";

// import components
import BookViewer from "../../components/BookViewer/BookViewer";
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchPage = () => {
  // Search text and fetched results for the Google Books API.
  const [query, setQuery] = useState("sample");
  const [savedData, setSavedData] = useState([]);
  const APIKey = bookKey;

  // Fetch books matching the current query.
  const fetchBooks = useCallback(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${APIKey}`,
      )
      .then((response) => {
        console.log(response.data);
        setSavedData(response.data.items);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [APIKey, query]);

  // Refresh results whenever the query changes.
  useEffect(() => {
    fetchBooks();
    console.log("Collecting results for Google Books.");
  }, [fetchBooks]);

  return (
    <div>
      <h1>This is the search page. Here you can search and view books.</h1>
      <div>
        <SearchBar
          setQuery={setQuery}
          fetchBooks={fetchBooks}
          savedData={savedData}
        />
      </div>
      <div>
        <BookViewer savedData={savedData} />
      </div>
    </div>
  );
};

export default SearchPage;
