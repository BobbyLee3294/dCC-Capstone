import React from "react";
import Book from "../Book/Book";

const BookList = (props) => {
  return (
    <div>
      <h5>
        This will show the list of books that are currently added to the
        bookshelf.
      </h5>
      <div>
        {props.list_of_books.map(function (el, index) {
          return (
            <div key={index}>
              {el.title}
              <Book title={el.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookList;
