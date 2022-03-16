import React, { Component } from 'react';
import '../css/Navigator.css';
import { Link } from 'react-router-dom'

class Navigator extends Component {

    render() {
        return (
            <header className="header">
                <nav>
                    <ul className="items">
                        <li className="list"><Link to="/" className='item'>Home</Link></li>
                        <li className="list"><Link to="/animations" className='item'>Graphic Demonstration</Link></li>
                        <li className="list"><Link to="/about" className='item'>About Us</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navigator;