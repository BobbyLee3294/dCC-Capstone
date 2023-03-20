import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
// TODO: Add the following pages: 'Bookshelf', 'Search', 'Book', 'Book Info'
const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const baseURL = "http://127.0.0.1:8000/api/bookshelves/";
    const fetchBookshelfForUser = async () => {
      try {
        let response = await axios.get(baseURL, {
          headers: {
            Authorization: "Bearer: " + token,
          },
        });
        console.log("retriving bookshelves");
        setBookshelf(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchBookshelfForUser();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <p>I heard you like books...</p>
      <p>{bookshelf.list_of_books}</p>
    </div>
  );
};

export default HomePage;
