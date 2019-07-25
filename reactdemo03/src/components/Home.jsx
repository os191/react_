import React,{Component} from 'react';
import axios from 'axios';

import './home.css';
import ImagesList from './ImagesList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            url :"https://api.github.com/search/users?q=",
            name:'',
            items:[],
            loading:false
        };
    }
    handleName = (e) =>{
        // console.log(e.target.value.trim())
        const name = e.target.value.trim();
        this.setState({name})
        
    }
    handelClick = () =>{
        const {url,name , loading} = this.state
        if(name === ''){
            return
        }
        this.setState({
            loading:!loading
        })
        axios.get(url+name)
        .then(response => {
            // console.log(response)
            if(response.status !== 200) {
                alert(response.statusText)
                return
            }
            this.setState({
                items:response.data.items,
                oading:!loading
            })
        }).catch(response =>{
            console.log(response)
        })
    }
    render() {
        const { items , loading } = this.state
        return (
            <div className="home">
                <header className="header">
                    <p>Search Github Users</p>
                    <div className="user-name">
                        <input type="text" value={this.state.name} onChange={this.handleName} placeholder="请输入姓名" />
                        <button className="but" onClick={this.handelClick}>Search</button>
                    </div>
                </header>
                <div className="content-list">
                    {
                        loading ? <h1 className="keyword">数据请求中。。。</h1> :
                            items.length === 0 ? <h1 className="keyword">请输入关键字搜索:</h1> : <ImagesList items={items} />
                    }
                </div>
            </div>
        );
    }
}

export default Home;