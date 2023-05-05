import React, { useState } from "react";

const SearchBar = ({ setQuery, fetchBooks, savedData }) => {
  const [search, setSearch] = useState("");
  const [filterOption, setFilterOption] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    filterByOption(savedData);
    setQuery(search);
    fetchBooks();
  }
  function filterByOption(books) {
    // debugger;
    if (!filterOption) {
      return books;
    }
    const filterText = filterOption.toLowerCase();

    return books.filter((book) => {
      switch (filterText) {
        // case "title":
        //   return Object.values(book)
        //     .volumeInfo?.title.toLowerCase()
        //     .includes(search.toLowerCase());
        case "author":
          return Object.values(book)
            .volumeInfo?.authors.toLowerCase()
            .includes(search.toLowerCase());
        case "genre":
          return Object.values(book)
            .volumeInfo?.categories.toLowerCase()
            .includes(search.toLowerCase());
        default:
          return true;
      }
    });
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
          <select
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value=""></option>
            {/* <option value="title">Title</option> */}
            <option value="author">Author</option>
            <option value="genre">Genre</option>
          </select>
          <button id="search-btn" type="submit">
            🔍
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
