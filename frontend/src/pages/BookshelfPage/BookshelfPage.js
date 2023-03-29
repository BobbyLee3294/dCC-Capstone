import React from "react";

const BookshelfPage = () => {
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
          <h2>This will show the name of the bookshelf.</h2>
        </div>
        <div>
          <p>
            This will show the description of the bookshelf. This will also show
            the date the bookshelf was created and when it was last updated.
          </p>
        </div>
        <div>
          {/* TODO: Create a BookList component that will show a list of books in this bookshelf */}
          <p>This is where the list of books will be displayed.</p>
        </div>
      </div>
    </div>
  );
};

export default BookshelfPage;
