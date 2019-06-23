import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'


import Home from './home'


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
