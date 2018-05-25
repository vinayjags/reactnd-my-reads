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
                return <BookItemView key={book.id} book={book} />
            })
        }

        return (
            <div>
                <div className="hdr">
                    <div className="search-book-hdr-wrapper">
                        <Link to="/" className="back-arrow">
                            <i className="fa fa-lg fa-arrow-left"></i>
                        </Link>
                        <div className="search-books-input-wrapper">
                            <input onChange={(e) => this.changeQyery(e)} placeholder="Search by title or author" type="text" value={this.state.query} className="search-input" />
                        </div>
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