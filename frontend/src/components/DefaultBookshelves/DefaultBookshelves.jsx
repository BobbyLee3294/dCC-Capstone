import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/bookshelves/all/";

async function createDefaultBookshelves() {
  const bookshelf1 = {
    name: "Read",
    description: "Books that you have already read.",
  };
  const bookshelf2 = {
    name: "Favorites",
    description: "Books that you consider as your favorite.",
  };
  const bookshelf3 = {
    name: "Reading List",
    description: "Books that you want to read or are currently reading.",
  };

  try {
    await axios.post(BASE_URL, bookshelf1);
    await axios.post(BASE_URL, bookshelf2);
    await axios.post(BASE_URL, bookshelf3);
  } catch (error) {
    console.error(error);
  }
}

export default createDefaultBookshelves;
