import React from "react";

const Book = ({ book }) => {
  return (
    <div>
      <div>
        {/* This is a Book. It will show the following details:
              basic attributes such as:
                title
                author
                pageCount
                genre
                description
        */}
        {/* TODO: #5 make false advanced attributes hidden (Bonus pts if we can give the user to ability to toggle this.) */}
        {/*   and advanced attributes like:
                ISBN
                publisher
                publicDomainAccess
                sharableQuotes
         */}
        {/* TODO: #7 map out details */}
        <div className="titleHeader">
          <h2>{book.volumeInfo?.title}</h2>
          <span>
            <h4>By {book.volumeInfo?.authors}</h4>
          </span>
        </div>
        <div className="thumbnailImg">
          <img
            src={book.volumeInfo?.imageLinks.thumbnail}
            alt={book.volumeInfo?.title}
          />
        </div>
        <div className="attributesBody">
          <p>ISBN: </p>
          <p>Page Count: {book.volumeInfo?.pageCount}</p>
          <p>Published: {book.volumeInfo?.publishedDate}</p>
          <p>Publisher: {book.volumeInfo?.publisher}</p>
          <p>Genre: {book.volumeInfo?.categories}</p>
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
