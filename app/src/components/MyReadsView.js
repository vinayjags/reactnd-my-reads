import React, { Component } from "react";
import BookShelf from "./shared/BookShelf";
import { Link } from "react-router-dom";

export default class MyReadsView extends Component {

    filterBooksForShelf(shelf) {
        return this.props.shelfBooks.filter((book) => {
            return book.shelf === shelf;
        });
    }

    updateBookShelf(book, newShelf) {
        this.props.onBookUpdate(book, newShelf)
    }

    render() {
        const shelfs = [
            {
                id: "currentlyReading",
                label: "Currently Reading",
            },
            {
                id: "wantToRead",
                label: "Want to Read",
            },
            {
                id: "read",
                label: "Read",
            }
        ]

        return (
            <div>
                <div className="book-shelf-hdr">
                    MyReads
                </div>
                <div className="shelf-container">
                    {
                        shelfs.map((shelf) => {
                            return (
                                <BookShelf
                                    key={shelf.id}
                                    title={shelf.label}
                                    books={this.filterBooksForShelf(shelf.id)}
                                    onBookAddUpdate={(book, shelf) => this.updateBookShelf(book, shelf)}
                                />
                            )
                        })
                    }
                </div>
                <Link to="/search" className="search-book">
                    <i className="fa fa-plus"></i>
                </Link>
            </div>
        )
    }
}