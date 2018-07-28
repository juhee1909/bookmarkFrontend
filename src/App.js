import React, { Component } from 'react';
import { Router,Route, browserHistory } from 'react-router';

import SigninSignup from './components/SigninSignup';

class App extends Component {
  render() {
    return (
      <Router history = { browserHistory }>
        <Route path = '/' component = {SigninSignup}> </Route>
      </Router>
    );
  }
}

export default App;
