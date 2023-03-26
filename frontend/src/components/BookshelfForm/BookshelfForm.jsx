import axios from "axios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { bookKey } from "../../localKey";

function BookshelfForm(props) {
  const BASE_URL = "http://127.0.0.1:8000/api/bookshelves/";
  const [user, token] = useAuth();
  const [bookshelfName, setBookshelfName] = useState("");
  const [description, setDescription] = useState("");

  function generateBookTitles() {
    const bookTitles = [];
    const APIKey = bookKey;
    // TODO: Implent search capabilities for the query variable
    const query = props;
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
        console.log(error);
      });
    const books = bookTitles.map((title) => ({ title }));
    return JSON.stringify(books);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const bookshelfData = {
      name: bookshelfName,
      description: description,
      created_by: user.id,
      // Question: Should this function only be limited to here?
      // list_of_books: generateBookTitles(),
    };
    axios
      .post(BASE_URL, bookshelfData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(` data for ${user.username}: ${response.data}`);
        // TODO: do something with the response, such as redirect to the new bookshelf page
      })
      .catch((error) => {
        console.log(error.response.request.responseText);
      });
  }

  return (
    <div>
      <h2>Create Bookshelf</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            typeof="text"
            value={bookshelfName}
            onChange={(e) => setBookshelfName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button typeof="submit">Create Bookshelf</button>
      </form>
    </div>
  );
}

export default BookshelfForm;
