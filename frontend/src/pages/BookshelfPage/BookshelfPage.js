import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

// import components

const BookshelfPage = () => {
  const [user, token] = useAuth();
  const [bookshelves, setBookshelves] = useState();

  useEffect(() => {
    const fetchUserShelvesList = async () => {
      try {
        axios
          .get("http://127.0.0.1:8000/api/bookshelves/2", {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            console.log(
              "The response was found! Showing the bookshelves! " +
                response.data
            );
            setBookshelves(response.data);
          });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserShelvesList();
  }, [token]);
  return (
    <div>
      <h1>
        This is where you will see all the bookshelves. Pre-made and
        custom-made!
      </h1>
      {/* TODO: Create a component for the Bookshelf model */}
    </div>
  );
};

export default BookshelfPage;
