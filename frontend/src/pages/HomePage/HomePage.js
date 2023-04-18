import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

import { Link } from "react-router-dom";
const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();

  useEffect(() => {
    console.log("Fetching the user's info.");
  }, [token]);

  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <div>
        <h3>Something to think about {user.first_name}</h3>
        <br />
      </div>
      <div>
        <Link to="/bookshelf_list">
          <button>Bookshelves</button>
        </Link>
        <Link to="/search">
          <button>Search</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
