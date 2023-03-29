import React from "react";
import { Link } from "react-router-dom";

const BookshelfList = (props) => {
  return (
    <div>
      <div>
        <h2>
          This is where a list of all the user's bookshelves will be displayed.
        </h2>
      </div>
      <div>
        {props?.bookshelves?.map(function (el, index) {
          return (
            <div key={index}>
              <Link to={`bookshelf/${el.name}`}>
                <h3>{el.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookshelfList;
