import React, { Component } from 'react';

import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='header situation-bck-color'>
                <header>
                    <span className='header-left'></span>
                    <span className='header-centre'>首页</span>
                    <span className='header-right'>右</span>
                </header>
            </div>
        );
    }
}

export default Header;