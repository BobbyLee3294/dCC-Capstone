import React from "react";
import Book from "../Book/Book";

const Bookshelf = ({ bookshelf }) => {
  return (
    <div>
      <div>
        <h4>
          This is a bookshelf. All of the books you placed in this bookshelf
          will be displayed here.
        </h4>
        <ul>
          <ol>
            <Book />
          </ol>
        </ul>
      </div>
    </div>
  );
};

export default Bookshelf;
