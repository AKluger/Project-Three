import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import PrettyCity from './Books/prettyCity/prettyCity'
import BobbyWalk from './Books/bobbyWalk/BobbyWalk'
import Game from './Books/game/Game'
import trashFall from './Books/trashFall'
import Landing from './components/Landing'
import Login from './pages/Login'
import Educator from './pages/Educator.js'
import Welcome from './pages/Welcome.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './App.css';
library.add(faUser)

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/library" component={Landing} />
        <Route exact path="/educator" component={Educator} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/bobbysWalk" component={BobbyWalk} />
        <Route exact path="/prettybooks" component={PrettyCity} />
        <Route exact path="/trashFall" component={trashFall} />
        <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;