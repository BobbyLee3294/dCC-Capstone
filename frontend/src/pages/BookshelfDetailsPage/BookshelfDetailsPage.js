import React from "react";
import { useParams } from "react-router-dom";
import Bookshelf from "../../components/Bookshelf/Bookshelf";

const BookshelfDetailsPage = () => {
  // TODO: figure out a way to pass bookshelf data from BookshelfListPage to here
  const { name } = useParams();
  return (
    <div>
      <div>
        <div>
          <Bookshelf bookshelf={name} />
        </div>
      </div>
    </div>
  );
};

export default BookshelfDetailsPage;
