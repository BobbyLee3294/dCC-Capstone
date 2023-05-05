import React from "react";

const Book = ({ book }) => {
  return (
    <div>
      <div>
        <div className="titleHeader">
          <h2>{book.volumeInfo?.title}</h2>
          <br />
          <h3>{book.volumeInfo?.subtitle}</h3>
          <span>
            {/* TODO: #13 Have authors shown like this: "Author(s): authors[0], authors[1]...etc." */}
            <h4>By {book.volumeInfo?.authors.toString()}</h4>
          </span>
        </div>
        <div className="thumbnailImg">
          <img
            src={book.volumeInfo?.imageLinks.thumbnail}
            alt={book.volumeInfo?.title}
          />
        </div>
        <div className="attributesBody">
          {/* TODO: #11 Have ISBN shown like this: "ISBN: industryIdentifiers[0], industryIdentifiers[1]" */}
          <dl>
            <dt>ISBN 10</dt>
            <dd>- {book.volumeInfo?.industryIdentifiers[0].identifier}</dd>
            <dt>ISBN 13</dt>
            <dd>- {book.volumeInfo?.industryIdentifiers[1].identifier}</dd>
          </dl>
          <p>Page Count: {book.volumeInfo?.pageCount}</p>
          <p>Published: {book.volumeInfo?.publishedDate}</p>
          <p>Publisher: {book.volumeInfo?.publisher}</p>
          {/* TODO: #12 Have genre shown like this: "Genre: categories[0], categories[1]...etc." */}
          <p>Genre: {book.volumeInfo?.categories.toString()}</p>
          {/* Question: Is there another way to display the description other than this? */}
          <p
            dangerouslySetInnerHTML={{ __html: book.volumeInfo?.description }}
          />
          <p>Format: {book.volumeInfo?.printType}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
