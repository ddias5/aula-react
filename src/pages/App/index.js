import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import About from '../About'
import Notes from '../Notes'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <switch>
          <Route path="/" exact component={Notes} />
          <Route path="/about" exact component={About } />
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;
