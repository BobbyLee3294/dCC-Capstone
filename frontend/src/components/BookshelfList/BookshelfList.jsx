import React from "react";
import { Link } from "react-router-dom";

const BookshelfList = ({ bookshelves }) => {
  return (
    <div>
      <div>
        <h2>
          This is where a list of all the user's bookshelves will be displayed.
        </h2>
      </div>
      <div>
        {/* {Object.values(bookshelves).map((bookshelf, index) => (
          <div key={index}>
            <Link to={`/${bookshelf.name}`}>
              <h3>{bookshelf.name}</h3>
            </Link>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default BookshelfList;
