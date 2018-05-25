import React, { Component } from 'react';
import MyReadsView from "./components/MyReadsView";
import SearchBookView from "./components/SearchBookView";
import './App.css';
import { Route } from "react-router-dom";
import { update, getAll } from "./services/BooksAPI";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelfBooks: []
    }
  }

  getAllBooks() {
    getAll().then(response => {
      this.setState({
        shelfBooks: response
      })
    })
  }

  addUpdateBook(book, shelfType) {
    update(book, shelfType).then((response) => {
      this.getAllBooks();
    })
  }

  componentDidMount() {
    this.getAllBooks()
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <MyReadsView
            onBookUpdate={(book, shelfType) => this.addUpdateBook(book, shelfType)}
            shelfBooks={this.state.shelfBooks}
          />
        )}
        />
        <Route path="/search" render={() => (
          <SearchBookView
            onBookAddUpdate={(book, shelfType) => this.addUpdateBook(book, shelfType)}
            shelfBooks={this.state.shelfBooks}
          />
        )}
        />
      </div>
    );
  }
}

export default App;
