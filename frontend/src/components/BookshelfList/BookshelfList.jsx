import React from "react";
import { useNavigate } from "react-router-dom";

const BookshelfList = (props) => {
  const naviagate = useNavigate();

  return (
    <div>
      <div>
        {props?.bookshelves?.map(function (el, index) {
          const handleOnClick = () => {
            naviagate(`/bookshelf_details/${el.name}`, {
              state: { el },
            });
          };
          return (
            <div key={index}>
              {/* <Link to={`/bookshelf_details/${el.name}`}>
                <h3>{el.name}</h3>
              </Link> */}
              <div onClick={() => handleOnClick(el)}>{el.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookshelfList;
