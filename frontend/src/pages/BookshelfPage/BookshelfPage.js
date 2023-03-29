import { axios } from "axios";
import React, { useCallback, useEffect } from "react";
import { bookKey } from "../../localKey";

const BookshelfPage = () => {
  const generateBookTitles = useCallback(() => {
    const bookTitles = [];
    const APIKey = bookKey;
    // TODO: Create search capabilities for the query variable
    const query = "catcher";
    debugger;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${APIKey}`
      )
      .then((response) => {
        const bookData = response.data.items;
        bookData.forEach((book) => {
          const title = book.volumeInfo.title;
          bookTitles.push(title);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
    const books = bookTitles.map((title) => ({ title }));
    return JSON.stringify(books);
  }, []);

  useEffect(() => {
    generateBookTitles();
  }, [generateBookTitles]);

  return (
    <div>
      <div>
        <h3>
          This is a more detailed page for the bookshelf you selected from
          BookshelfList. Here it will the show the name, the description, when
          it was created, when it was last updated, and of course the list of
          books.
        </h3>
        <div>
          <h4>This will show the name of the bookshelf.</h4>
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
