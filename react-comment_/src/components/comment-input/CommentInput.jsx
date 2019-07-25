import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './commentInput.css'

class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName:'',
            content: ''
         };
    }
    static propTypes = {
        addComment: PropTypes.func.isRequired
    }
    handleUserName = (e) =>{
        const userName = e.target.value.trim();
        this.setState({userName})
    }
    handleContent = (e) =>{
        const content = e.target.value.trim();
        this.setState({content})
    }
    handleSubmit =() =>{
        const { userName, content } = this.state
        if(userName !== '' && content !== ''){
            const comment = ({userName, content})
            console.log(comment)
            this.setState({userName:'', content:''})
            this.props.addComment(comment)
        }
    }

    render() {
        const { userName, content } = this.state
        return (
            <div className='comment-left'>
                <div className='comment-user-name'>
                    <div className='user-name'>
                        用户名
                    </div>
                    <div className='user-input'>
                        <input type="text" value={userName} placeholder='用户名' onChange={this.handleUserName}/>
                    </div>
                </div>
                <div className='comment-content-name'>
                    <div className='content-name'>
                        评论内容
                    </div>
                    <div className='content-textarea'>
                        <textarea rows="3" cols="20" value={content} placeholder='评论内容' onChange={this.handleContent}/>
                    </div>
                </div>
                <div className='comment-submit'>
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
            </div>
        );
    }
}

export default CommentInput;