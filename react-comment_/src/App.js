import React, { Component } from 'react';
import { Provider } from 'react-redux'


import './assets/css/App.css';
import Home from './components/Home'
import store from './components/redux/store'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
        <div>
          <Provider store={store}>
            <Home/>
          </Provider>
        </div>
    );
  }
}

export default App;

