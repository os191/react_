import React, { Component } from 'react';

import './assets/css/App.css';
import Home from './componets/home/Home'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
        <Home />
    );
  }
}

export default App;

