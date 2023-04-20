import React from "react";

const Book = ({ book }) => {
  return (
    <div>
      <div>
        {/* <h3>This is a Book. It will show the following details:</h3>
              basic attributes such as:
              title
              author
              <li>pageCount</li>
              <li>genre</li>
              <li>description</li>
        */}
        {/* TODO: #5 make false advanced attributes hidden (Bonus pts if we can give the user to ability to toggle this.) */}
        {/* and advanced attributes like:
              ISBN
              publisher
              publicDomainAccess
              sharableQuotes
         */}
        {/* TODO: #7 map out details */}
        <div>
          <h2>{book.volumeInfo?.title}</h2>
          <span>
            <h4>By {book.volumeInfo?.authors}</h4>
          </span>
        </div>
        <div>
          <p>ISBN: </p>
          <p>Page Count: {book.volumeInfo?.pageCount}</p>
          <p>Published: {book.volumeInfo?.publishedDate}</p>
          <p>Publisher: {book.volumeInfo?.publisher}</p>
          <p>Genre: {book.volumeInfo?.categories}</p>
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
