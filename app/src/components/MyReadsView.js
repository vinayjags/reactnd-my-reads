import React, { Component } from "react";
import BookShelf from "./shared/BookShelf";

export default class MyReadsView extends Component {
    constructor() {
        super();
        this.state = {
            myBooks: []
        }
    }

    filterBooksForShelf(shelf) {
        return this.state.myBooks.filter((book) => {
            return book.type = shelf;
        });
    }

    render() {

        const shelfs = [
            {
                id: "currentlyReading",
                label: "Currently Reading"
            },
            {
                id: "wantToRead",
                label: "Want to Read"
            },
            {
                id: "read",
                label: "Read"
            }
        ]

        return (
            <div>
                <div className="hdr">
                    MyReads
                </div>
                <div className="shelf-container">
                    {
                        shelfs.map((shelf) => {
                            return (<BookShelf key={shelf.id} title={shelf.label} />)
                        })
                    }
                </div>
                <div className="search-book">
                </div>
            </div>
        )
    }
}