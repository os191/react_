import React, { Component } from 'react';
import PubSub from 'pubsub-js'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchName:''
         };
    }
    componentDidMount(){
        PubSub.subscribe('searchName', (msg,searchName) =>{
            this.setState({searchName})
        })
    }
    render() {
        return (
            <div>
                {this.state.searchName}
            </div>
        );
    }
}

export default Search;