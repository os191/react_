import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './imagesList.css';

class ImagesList extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    static propTypes = {
        items : PropTypes.array.isRequired
    }

    render() {
        const { items } = this.props
        const display = items === null ? 'node' : 'block';
        return (
            <div className="images-list">
                <div style={{display}}>
                    <ul>
                        { 
                            items.map((value,index) =>{
                                return (
                                    <li key={index}>
                                        <div className="user-img">
                                            <a href={value.html_url}>
                                                <img src={value.avatar_url} alt={value.login} />
                                            </a>
                                            <p>{value.login}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ImagesList;