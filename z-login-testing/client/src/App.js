import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import {ProtectedRoute} from './protectedRoutes'
import PrettyCity from './Books/prettyCity/prettyCity'
import BobbyWalk from './Books/bobbyWalk/BobbyWalk'
import Game from './Books/game/Game'
import Landing from './components/Landing'
import EduLanding from './components/EducatorLanding'
import Login from './pages/Login'
import LandingLogin from './pages/LandingLogin.js'
import Educator from './pages/Educator.js'
import Welcome from './pages/Welcome.js'
import EduWelcome from './pages/EduWelcome.js'
import LandingLogout from './pages/LandingLogout.js'
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
        <Route exact path="/eduwelcome" component={EduWelcome} />
        <Route exact path="/edulibrary" component={EduLanding} />
        <Route exact path="/educator" component={Educator} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/bobbysWalk" component={BobbyWalk} />
        <Route exact path="/prettybooks" component={PrettyCity} />
        <Route exact path="/login" component={LandingLogin} />
        {/* <Route exact path="/logout" component={LandingLogout} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;