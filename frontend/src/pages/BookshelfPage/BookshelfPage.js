import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

// import components
import BookshelfForm from "../../components/BookshelfForm/BookshelfForm";
import BookshelfList from "../../components/BookshelfList/BookshelfList";

const BookshelfPage = () => {
  const [user, token] = useAuth();
  const [bookshelves, setBookshelves] = useState();

  const fetchUserShelvesList = useCallback(() => {
    try {
      axios
        .get("http://127.0.0.1:8000/api/bookshelves/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          console.log(
            "The response was found! Showing the bookshelves! " +
              Object.values(response.data)
          );
          setBookshelves(response.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, [token]);

  useEffect(() => {
    fetchUserShelvesList();
  }, [fetchUserShelvesList]);

  return (
    <div>
      <div>
        <h1>
          Hello {user.first_name}! This is where you will see all the
          bookshelves. Pre-made and custom-made!
        </h1>
      </div>
      <div>
        {/* TODO: Create a component that will display all of the user's bookshelves */}
        <BookshelfList bookshelves={bookshelves} />
      </div>
      <div>
        <h4>Create New</h4>
        <BookshelfForm />
      </div>
    </div>
  );
};

export default BookshelfPage;
