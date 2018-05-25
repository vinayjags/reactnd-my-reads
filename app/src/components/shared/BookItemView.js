import React, { Component } from 'react';

export default class BookItemView extends Component {
    render() {
        let title = this.props.book.title;

        if (title.length > 40) {
            title = `${title.substr(0, 40)}...`;
        }

        let thumbnail = {};
        if (typeof this.props.book.imageLinks !== 'undefined') {
            thumbnail = {
                backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
            }
        }

        return (
            <li className="book-item">
                <div className="book-cover-wrapper">
                    <div className="book-cover" style={thumbnail} />
                    <div className="book-shelf-changer">
                        <select
                            onChange={(e) => this.props.onBookAddUpdate(
                                this.props.book,
                                e.target.value
                            )}
                            value={this.props.currentShelf}
                        >
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">
                    {title}
                </div>
                <div className="book-author">
                    {
                        (typeof this.props.book.authors !== 'undefined') && (this.props.book.authors.map((author) => {
                            return (<div className="author-name" key={author}>{author}</div>)
                        }))
                    }
                </div>
            </li>
        )
    }
}