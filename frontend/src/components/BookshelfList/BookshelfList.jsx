import React from "react";
import { useNavigate } from "react-router-dom";

const BookshelfList = (props) => {
  const naviagate = useNavigate();
  const bookshelf = { bookshelf: Object.values(props) };

  return (
    <div>
      <div>
        {props?.bookshelves?.map(function (el, index) {
          const handleOnClick = () => {
            naviagate(`/bookshelf_details/${el.name}`, {
              state: { bookshelf },
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
