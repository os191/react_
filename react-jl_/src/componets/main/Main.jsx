import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './main.css'
import ProductList from '../product/ProductList'
import UploadImg from "../upload/UploadImg"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            money: '',

         };
    }
    render() {
        return (
            <div className='main'>
                <div className='main-top'>
                    <p className='main-top-title situation-color'>请录入您的信息</p>
                    <div className='main-top-money situation'>
                        <span className='top-title'>销售金额：</span>
                        <input className='top-input' type="number" placeholder='请输入订单金额'/>
                    </div>
                    <div className='main-top-name situation'>
                        <span className='top-title'>客户姓名：</span>
                        <input className='top-input' type="text" placeholder='请输入客户姓名'/>
                    </div>
                    <div className='main-top-phone situation'>
                        <span className='top-title'>客户电话：</span>
                        <input className='top-input' type="text" placeholder='请输入客户电话'/>
                    </div>
                </div>
                <div className='main-centre'>
                    <p className='main-centre-title situation-color'>请选择销售的产品</p>
                    <div className='main-centre-pro'>
                            <Link to="/productList"><span>选择产品</span></Link>
                    </div>
                </div>
                <div className='main-footer'>
                    <p className='main-footer-title situation-color'>请选择销售的产品</p>
                    <div className='main-footer-file'>
                        {/* <input type='file'>上传图片</input> */}
                        <UploadImg />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;