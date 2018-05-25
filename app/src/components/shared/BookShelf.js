import React, { Component } from 'react';
import BookItemView from "./BookItemView";

export default class BookShelf extends Component {
    updateBookShelf(book, newShelf) {
        this.props.onBookAddUpdate(book, newShelf)
    }

    getBookShelf(book) {
        let currentShelf = '';
        let [bookFiltered] = this.props.books.filter(bookItem => {
            return bookItem.id === book.id
        })

        if (bookFiltered) {
            currentShelf = bookFiltered.shelf;
        }

        return currentShelf;
    }

    render() {
        let bookShelfView = (
            <div className="text-center">No Books found in this shelf.</div>
        )

        if (this.props.books.length > 0) {
            bookShelfView = (this.props.books.map((book) => {
                return (
                    <BookItemView
                        onBookAddUpdate={(book, shelf) => this.updateBookShelf(book, shelf)}
                        key={book.id}
                        book={book}
                        currentShelf={this.getBookShelf(book)}
                    />
                )
            }))
        }
        return (
            <div className="shelf">
                <div className="shelf-title">
                    <h3>{this.props.title}</h3>
                </div>
                <hr />
                <ul className="book-list">
                    {bookShelfView}
                </ul>
            </div>
        )
    }
}