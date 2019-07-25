import React, { Component } from 'react';

import './assets/css/App.css';
import Home from './components/Home';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <Home />
        <Search />

      </div>
    );
  }
}

export default App;