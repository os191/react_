import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './home.css'
import Header from '../header/Header'
import Main from '../main/Main';
import ProductList from '../product/ProductList'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='home'>
            <Router>
                <Header />
                <Main />
                <Route path="/productList" component={ProductList}/>
            </Router>
            </div>
        );
    }
}

export default Home;