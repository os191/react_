import React, { Component } from 'react';

import { productList } from '../common/productList'
import './productList.css'

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list :[
               
            ]
         };
    }
    render() {
        return (
            <div className='product-list'>
                <ul className='pro-list-ul'>
                    <li className='pro-item'>
                        <div className='pro-item-select'>
                            <span className='pro-item-icon'></span>
                            <span className='pro-item-name'></span>
                            <span></span>
                        </div>
                        <div className='pro-item-edit'>
                            <span className='icon-jian'></span>
                            <span className='pro-num'>0</span>
                            <span className='icon-jia'></span>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ProductList;