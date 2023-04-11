import React from "react";

const BookList = (props) => {
  return (
    <div>
      <h5>
        This will show the list of books that are currently added to the
        bookshelf.
      </h5>
      <br />
      <div>
        {props.list_of_books.map(function (el, index) {
          return (
            <div key={index}>
              <div>{el.title}</div>
              <div>{el.author}</div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookList;
