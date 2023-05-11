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
          const bookAuthor = Object.entries(book)
            .volumeInfo?.authors.toString()
            .toLowerCase();
          if (bookAuthor === undefined) {
            return false;
          } else if (!bookAuthor) {
            return false;
          }
          return true;
        case "genre":
          return Object.values(book)
            .volumeInfo?.categories.toString()
            .toLowerCase()
            .includes(search.toLowerCase());
        default:
          return false;
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
