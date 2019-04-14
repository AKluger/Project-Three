import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import Book from './components/Book'
import Landing from './components/Landing'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/prettybooks" component={Book} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
