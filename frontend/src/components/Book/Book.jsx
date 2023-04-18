import React from "react";

const Book = (props) => {
  return (
    <div>
      <div>
        <h3>This is a Book. It will show the following details:</h3>
        <ul>
          <ol>basic attributes</ol>
          <ol>title</ol>
          <ol>author</ol>
          <ol>pageCount</ol>
          <ol>genre</ol>
          {/* TODO: #5 make false advanced attributes hidden (Bonus pts if we can give the user to ability to toggle this.) */}
          <ol>advanced attributes</ol>
          <ol>publisher</ol>
          <ol>publicDomainAccess</ol>
          <ol>sharableQuotes</ol>
          <ol>sharableQuotes</ol>
        </ul>
        {/* TODO: #7 map out details */}
      </div>
    </div>
  );
};

export default Book;
