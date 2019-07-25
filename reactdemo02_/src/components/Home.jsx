import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         };
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const name = this.nameInput.value.trim();
        console.log(name);
        const textContent = this.textContent.value.trim();
        console.log(textContent)
        if(name === '' || textContent === ''){
            return;
        }
        const{list} = this.state
        list.unshift({name:name,textContent:textContent})
        this.setState({list})
        this.nameInput.value = '';
        this.textContent.value = '';
    }
    del(index){
        console.log(index)
        const {list} = this.state
        list.splice(index,1)
        this.setState({list})
    }
    render() {
        return (
            <div className="home">
                <h3>请发表对React的评论</h3>
                <div className="content">
                    <div className="left">
                        <form onSubmit={this.handleSubmit}>
                            <div className="left-name">
                                用户名<br/>
                                <input typt="text" ref={input=>this.nameInput = input} placeholder="用户名"/>
                            </div>
                            <div className="left-text">
                                评论内容
                                <br/>
                                <textarea ref={textarea => this.textContent = textarea}  placeholder="评论内容"></textarea>
                            </div>
                            <button className="left-sub">提交</button>
                        </form>
                    </div>
                    <div className="right">
                        <p className="right-p">评论回复：</p>
                        {
                            this.state.list.length === 0 ? <h2>暂时没有评论</h2> :
                            this.state.list.map((value,index)=>{
                                return (
                                    <div key={index} className="rigth-data">
                                        <button type="button" onClick={this.del.bind(this,{index})}>删除</button>
                                        <p className="rigth-data-name">{value.name}</p>
                                        <p className="rigth-data-content">{value.textContent}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;