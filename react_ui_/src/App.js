import React, { Component } from 'react';

import './assets/css/App.css';
import Home from './components/Home'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;

