import React, { Component } from 'react';

import './commentHeader.css'

class CommentHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='comment-header'>
                <header className='header'>
                    <h2>请发表对React的评论</h2>
                </header>
            </div>
        );
    }
}

export default CommentHeader;