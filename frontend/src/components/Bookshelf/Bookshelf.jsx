import React from "react";
import Book from "../Book/Book";

const Bookshelf = ({ bookshelf }) => {
  console.log("Bookshelf:", bookshelf);
  return (
    <div>
      <div>
        <h4>{bookshelf.el.name}</h4>
        <div>
          <span>
            <label>Created On: </label>
            {bookshelf.el.date_created}
          </span>
          <br />
          <span>
            <label>Last Updated On:</label>
            {bookshelf.el.date_updated}
          </span>
          <br />
          <span>
            <label>Description: </label>
            {bookshelf.el.description}
          </span>
        </div>
        <div>
          <label>List of Books</label>
          <Book />
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
