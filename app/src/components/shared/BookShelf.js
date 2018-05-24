import React, { Component } from 'react';

export default class BookShelf extends Component {
    render() {
        return (
            <div className="shelf">
                <div className="shelf-title">
                    <h3>{this.props.title}</h3>
                </div>
                <ul className="book-list">
                </ul>
            </div>
        )
    }
}