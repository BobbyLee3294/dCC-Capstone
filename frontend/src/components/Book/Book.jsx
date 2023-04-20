import React from "react";

const Book = (props) => {
  return (
    <div>
      <div>
        <h3>This is a Book. It will show the following details:</h3>
        <div>
          <ol>
            <ol>
              basic attributes such as:
              <li>title</li>
              <li>author</li>
              <li>pageCount</li>
              <li>genre</li>
            </ol>
            {/* TODO: #5 make false advanced attributes hidden (Bonus pts if we can give the user to ability to toggle this.) */}
            <ol>
              and advanced attributes like:
              <li>ISBN</li>
              <li>publisher</li>
              <li>publicDomainAccess</li>
              <li>sharableQuotes</li>
            </ol>
          </ol>
        </div>
        {/* TODO: #7 map out details */}
        {props.book.id}
      </div>
    </div>
  );
};

export default Book;
