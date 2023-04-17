import React, { useState } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    props.setQuery(search);
    props.fetchBooks();
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type="search"
            id="formSearch"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button id="search-btn" type="submit">
            🔍
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
