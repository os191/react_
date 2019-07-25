import React, { Component } from 'react';
import { Button, WhiteSpace, WingBlank ,Toast} from 'antd-mobile';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleOnClick = () =>{
        Toast.info('提交成功',1)
    }
    render() {
        return (
            <WingBlank>
                <Button type="primary" onClick={this.handleOnClick}>Start</Button><WhiteSpace />
            </WingBlank>
        );
    }
}

export default Home;