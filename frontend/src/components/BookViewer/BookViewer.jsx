import React from "react";
import { useNavigate } from "react-router-dom";

const BookViewer = ({ savedData }) => {
  console.log("savedData:", savedData);
  const navigate = useNavigate();
  // const authorArrToString = savedData.el.volumeInfo.authors.toString();
  // const splitAuthorString = authorArrToString.split(",");

  // console.log(splitAuthorString);
  return (
    <div>
      <h2>
        This will show the books which you can click on to see in more detail.
      </h2>
      {savedData.map((el, index) => {
        const handleOnClick = () => {
          navigate(`/book/${el.id}`);
        };
        return (
          <div key={index}>
            <div className="img-viewer" onClick={handleOnClick}>
              <img
                src={el.volumeInfo.imageLinks.smallThumbnail}
                alt={el.volumeInfo.title}
              />
            </div>
            <div className="bookInfo">
              <h3>Title: {el.volumeInfo.title}</h3>
              {/* TODO: #4 Have authors shown like this: "Author(s): authors[0], authors[1], etc." */}
              <h4>Author(s): {el.volumeInfo.authors}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookViewer;
