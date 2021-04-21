import './App.css';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./bulma/css/bulma.css";

import Home from './pages/Home';
import SubflowUI from './components/SubflowUI';
import NeuralWeightUI from './components/NeuralWeightUI';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

declare module "*.svg";

class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/subflow" component={SubflowUI}></Route>
        <Route exact path="/neuralweightvirtualization" component={NeuralWeightUI}></Route>
      </Switch>
    </Router>
  }
}

export default App;
