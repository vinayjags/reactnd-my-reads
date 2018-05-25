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
                <div className="book-cover" style={thumbnail} />
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