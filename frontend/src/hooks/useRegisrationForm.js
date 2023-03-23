import axios from "axios";
import { useState } from "react";

const useRegisrationForm = (initialValues = {}, onSubmit) => {
  const [formData, setFormValues] = useState(initialValues);
  const BASE_URL = "http://127.0.0.1:8000/api/bookshelves/";
  const createDefaultBookshelves = async () => {
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
  };
  const handleInputChange = (e) => {
    e.persist();
    setFormValues({ ...formData, [e.target.name]: e.target.value });
    createDefaultBookshelves();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const reset = () => {
    setFormValues(initialValues);
  };

  return [formData, handleInputChange, handleSubmit, reset];
};

export default useRegisrationForm;
