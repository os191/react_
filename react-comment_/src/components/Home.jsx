import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import '../assets/css/home.css'
import CommentHeader from './comment-header/CommentHeader'
import CommentInput from './comment-input/CommentInput'
import CommentList from './comment-list/CommentList'
import { addComment, delComment, commentAsyncRequest  } from './redux/action'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    static propTypes = {
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired,
        delComment: PropTypes.func.isRequired,
        commentAsyncRequest: PropTypes.func.isRequired,
    }
    componentDidMount(){
        this.props.commentAsyncRequest()
    }
    render() {
        const { comments } = this.props
        return (
            <div className='home'>
                <CommentHeader />
                <div className='content'>
                    <CommentInput addComment={this.props.addComment}/>
                    <CommentList comments={comments} delComment={this.props.delComment}/>
                </div>
            </div>
        );
    }
}

export default connect(
    state =>({comments : state}),
    { addComment, delComment, commentAsyncRequest}
)(Home);