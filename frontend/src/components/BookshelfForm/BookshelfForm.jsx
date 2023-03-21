import axios from "axios";
import { useState } from "react";
import { bookKey } from "../../localKey";

function BookshelfForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function generateBookTitles() {
    const bookTitles = [];
    const APIKey = bookKey;
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
      name: name,
      description: description,
      list_of_books: generateBookTitles(),
    };
    axios
      .post("/api/bookshelves", bookshelfData)
      .then((response) => {
        console.log(response.data);
        // do something with the response, such as redirect to the new bookshelf page
      })
      .catch((error) => {
        console.log(error);
        // handle the error
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          typeof="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
  );
}

export default BookshelfForm;
