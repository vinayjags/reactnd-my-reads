import React, { Component } from "react";

export default class MyReadsView extends Component {
    constructor() {
        super();
        this.state = {
            'title': 'Vinay Jagnani'
        }
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}