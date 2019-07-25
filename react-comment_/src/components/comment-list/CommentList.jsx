import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './commentList.css'

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    static propTypes = {
        comments: PropTypes.array.isRequired,
        delComment: PropTypes.func.isRequired
    }
    handleDel(comment,index){
        if(window.confirm(`确定删除${comment.userName}的评论嘛？`)){
            this.props.delComment(index)
        }
    }
    render() {
        const { comments } = this.props
        console.log(comments)
        return (
            <div className='comment-right'>
                <div className='title'>
                    <h4>回复评论：</h4>
                </div>
                {
                    comments.map((comment,index) =>(
                        <div className='list-item' key={index}>
                            <p className='item-del'><button onClick={this.handleDel.bind(this,comment,index)}>删除</button></p>
                            <div className='item-user-name'>{comment.userName} 说</div>
                            <div className='item-comment-content'>{comment.content}</div>
                        </div>
                    ))
                }
                
            </div>
        );
    }
}

export default CommentList;