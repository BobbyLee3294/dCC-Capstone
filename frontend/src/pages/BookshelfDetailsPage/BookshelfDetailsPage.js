import React from "react";
import { useLocation } from "react-router-dom";
import Bookshelf from "../../components/Bookshelf/Bookshelf";

const BookshelfDetailsPage = () => {
  const { state } = useLocation();

  return (
    <div>
      <div>
        <div>
          <Bookshelf bookshelf={state} />
        </div>
      </div>
    </div>
  );
};

export default BookshelfDetailsPage;
