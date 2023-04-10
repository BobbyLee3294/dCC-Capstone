import React from "react";

const BookViewer = () => {
  return (
    <head>
        <meta httpEquiv="content-type" content="text-html; charset=utf-8" />
        <title>Google Books Embedded Viewer</title>
        <script type="text/javascript" src="https://www.google.com/books/jsapi.js"></script>
        <script type="text/javascript">
            google.books.load();

            function initialize() {
                var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
                viewer.load('ISBN:0738531367');
            }
        </script>
    </head>
  );
};

export default BookViewer;
