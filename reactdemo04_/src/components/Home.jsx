import React, { Component } from 'react';
import PubSub from 'pubsub-js'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         };
    }
    
    handleClick = () =>{
        const searchName = this.contentInput.value.trim()
        if(searchName){
            PubSub.publish("searchName",searchName)
        }
    }
    
  

    render() {
        return (
            <div style={{margin:'20px 0 0 20px'}}>
                <input value={this.state.content} ref={input => this.contentInput = input}/>
                <button onClick={this.handleClick}>Search</button>
            </div>
        );
    }
}

export default Home;