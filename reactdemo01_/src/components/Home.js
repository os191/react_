import React, { Component } from 'react';
import Login from '../assets/images/logo.svg';

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = { 

         }
    }
    
    render() {
        return (
            <div>
                <p>Home 组件</p>
                <img src={Login} alt="小图片"/>
            </div>
        );
    }
}