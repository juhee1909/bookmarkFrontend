import React, { Component } from 'react';
import { Router,Route, browserHistory } from 'react-router';

import SigninSignup from './components/SigninSignup';
import Bookmark from './components/Bookmark';


import './resources/css/styles.css';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import 'rodal/lib/rodal.css';

class App extends Component {
  render() {
    return (
      <Router history = { browserHistory }>
        <Route path = '/' component = {SigninSignup}> </Route>
        <Route path = '/bookmark' component = {Bookmark}> </Route>
      </Router>
    );
  }
}

export default App;
