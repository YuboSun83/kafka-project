import React, { Component } from 'react';
import "../css/About.css"

class About extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li className='about-list'>
                        <div className='info'>
                            <img src={require('../images/jingye.jpg')} alt="" className='about-image'/>
                            <div className='name'>Jessie Jiang</div>
                        </div>
                    </li>
                    <li className='about-list'>
                        <div className='info'>
                            <img src={require('../images/dingci.jpg')} alt="" className='about-image'/>
                            <div className='name'>Marco Sun</div>
                        </div>
                    </li>
                    <li className='about-list'>
                        <div className='info'>
                            <img src={require('../images/luwan.jpg')} alt="" className='about-image'/>
                            <div className='name'>Lin Dai</div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default About;