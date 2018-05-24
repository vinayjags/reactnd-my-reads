import React, { Component } from 'react';
import MyReadsView from "./components/MyReadsView";
import SearchBookView from "./components/SearchBookView";
import './App.css';
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <MyReadsView />
        )}
        />
        <Route path="/search" render={() => (
          <SearchBookView />
        )}
        />
      </div>
    );
  }
}

export default App;
