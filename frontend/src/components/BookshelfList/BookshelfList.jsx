import React from "react";
import { useNavigate } from "react-router-dom";

const BookshelfList = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        {props?.bookshelves?.map(function (el, index) {
          const handleOnClick = () => {
            navigate(`/bookshelf_details/${el.name}`, {
              state: { el },
            });
          };
          return (
            <div key={index}>
              <div onClick={() => handleOnClick(el)}>{el.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookshelfList;
