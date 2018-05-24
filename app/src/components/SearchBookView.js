import React, { Component } from "react";

export default class SearchBookView extends Component {
    constructor() {
        super();
        this.state = {
            'title': 'Search Book'
        }
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}