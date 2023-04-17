import axios from "axios";
import React, { useCallback, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { bookKey } from "../../localKey";

// import components
// TODO: create the following components
// import SearchBar from "../../components/SearchBar/SearchBar"
import BookViewer from "../../components/BookViewer/BookViewer";

const SearchPage = () => {
  const [queryParam, setQueryParam] = useState("catcher");
  const [savedData, setSavedData] = useState([]);

  return (
    <div>
      <h1>This is the search page. Here you can search and view books.</h1>
    </div>
  );
};

export default SearchPage;
