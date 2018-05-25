import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "../services/BooksAPI";
import BookItemView from "./shared/BookItemView";

export default class SearchBookView extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            searchedBooks: [],
            searchText: ''
        }
        this.queryPromise = null;
    }

    updateBookShelf(book, newShelf) {
        this.props.onBookAddUpdate(book, newShelf)
    }

    getBookShelf(book) {
        let currentShelf = '';
        let [bookFiltered] = this.props.shelfBooks.filter(bookItem => {
            return bookItem.id === book.id
        })

        if (bookFiltered) {
            currentShelf = bookFiltered.shelf;
        }

        return currentShelf;
    }

    searchBooks() {
        if (this.state.query !== "") {
            this.queryPromise = search(this.state.query);
            this.queryPromise.then((response) => {
                this.queryPromise = null;
                let message = '';
                if (typeof response.error !== 'undefined') {
                    message = 'No Books found for your search. Please try something else.'
                }
                this.setState((previousState) => {
                    return {
                        searchedBooks: response,
                        searchText: message
                    }
                });
            });
        } else {
            this.setState((previousState) => {
                return {
                    searchedBooks: [],
                    searchText: ''
                }
            });
        }
    }

    changeQyery(event) {
        const value = event.target.value;
        this.setState((previousState) => {
            return {
                query: value,
                searchText: 'Searching for Books. Please wait...',
                searchedBooks: []
            }
        }, (event) => {
            this.searchBooks();
        })
    }

    render() {

        let bookView = (
            <div>{this.state.searchText}</div>
        )

        if (this.state.searchedBooks.length > 0) {
            bookView = this.state.searchedBooks.map((book) => {
                return (
                    <BookItemView
                        onBookAddUpdate={(book, shelf) => this.updateBookShelf(book, shelf)}
                        key={book.id}
                        book={book}
                        currentShelf={this.getBookShelf(book)}
                    />
                )
            })
        }

        return (
            <div>
                <div className="search-book-hdr-wrapper">
                    <Link to="/" className="back-arrow">
                        <i className="fa fa-lg fa-arrow-left"></i>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            onChange={(e) => this.changeQyery(e)}
                            placeholder="Search by title or author"
                            type="text"
                            value={this.state.query}
                            className="search-input" />
                    </div>
                </div>
                <div className="book-list-wrapper">
                    <ul className="book-list">
                        {bookView}
                    </ul>
                </div>
            </div>
        )
    }
}