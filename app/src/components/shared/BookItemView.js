import React from "react";

const BookItemView = props => {
  let title = props.book.title;

  if (title.length > 40) {
    title = `${title.substr(0, 40)}...`;
  }

  let thumbnail = {};
  if (typeof props.book.imageLinks !== "undefined") {
    thumbnail = {
      backgroundImage: `url(${props.book.imageLinks.thumbnail})`
    };
  }

  return (
    <li className="book-item">
      <div className="book-cover-wrapper">
        <div className="book-cover" style={thumbnail} />
        <div className="book-shelf-changer">
          <select
            onChange={e => props.onBookAddUpdate(props.book, e.target.value)}
            value={props.currentShelf}
          >
            <option value="" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-author">
        {typeof props.book.authors !== "undefined" &&
          props.book.authors.map(author => {
            return (
              <div className="author-name" key={author}>
                {author}
              </div>
            );
          })}
      </div>
    </li>
  );
};

export default BookItemView;
