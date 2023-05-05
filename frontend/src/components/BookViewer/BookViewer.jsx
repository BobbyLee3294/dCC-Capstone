import React from "react";
import { useNavigate } from "react-router-dom";

const BookViewer = ({ savedData }) => {
  console.log("savedData:", savedData);
  const navigate = useNavigate();

  return (
    <div>
      <h2>
        This will show the books which you can click on to see in more detail.
      </h2>
      {savedData.map((el, index) => {
        const bookId = el.id;
        const handleOnClick = () => {
          navigate(`/book/${bookId}`, {
            state: { bookId },
          });
        };
        const hasSubtitle = () => {
          if (el.volumeInfo?.subtitle) {
            return (
              <div>
                <h3>Title: {el.volumeInfo?.title}</h3>
                <h3>Subtitle: {el.volumeInfo?.subtitle}</h3>
              </div>
            );
          } else {
            return (
              <div>
                <h3>Title: {el.volumeInfo?.title}</h3>
              </div>
            );
          }
        };
        const splitAuthors = () => {
          const authorArray = el.volumeInfo?.authors;
          if (authorArray) {
            if (authorArray.length > 1) {
              return (
                <div>
                  <h3>Authors: {authorArray.toString()}</h3>
                </div>
              );
            } else {
              return <div>Author: {authorArray}</div>;
            }
          } else {
            return <div>No Author</div>;
          }
        };
        const splitGenres = () => {
          const genreArray = el.volumeInfo?.categories;
          if (genreArray) {
            if (genreArray.length > 1) {
              /** split this array and turn it into a string to be returned */
              console.log(genreArray.toString());
              return <div>Genres: {genreArray.toString()}</div>;
            } else {
              return <div>Genre: {genreArray}</div>;
            }
          } else {
            return <div>Genre not found</div>;
          }
        };
        return (
          <div key={index}>
            <div className="img-viewer" onClick={handleOnClick}>
              <img
                src={el.volumeInfo?.imageLinks.smallThumbnail}
                alt={el.volumeInfo?.title}
              />
            </div>
            <div className="bookInfo">
              {hasSubtitle()}
              {/* TODO: #4 Have authors shown like this: "Author(s): authors[0], authors[1], etc." */}
              <h4>{splitAuthors()}</h4>
              <h4>{splitGenres()}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookViewer;
