import React , {Component} from 'react';
import '../assets/css/App.css';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        App 组件
        <Home />
      </div>
    );
  }
}

export default App;
