import React from "react";
import Bookshelf from "../../components/Bookshelf/Bookshelf";

const BookshelfPage = () => {
  // TODO: figure out a way to pass bookshelf data from BookshelfListPage to here
  return (
    <div>
      <div>
        <h1>
          This is a more detailed page for the bookshelf you selected from
          BookshelfList. Here it will the show the name, the description, when
          it was created, when it was last updated, and of course the list of
          books.
        </h1>
        <div>
          <Bookshelf />
        </div>
      </div>
    </div>
  );
};

export default BookshelfPage;
