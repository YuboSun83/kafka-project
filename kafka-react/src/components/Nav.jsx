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
                        <li className="list item">Graphic Demonstration
                            <ul className='second_items'>
                                <li className='second_item'><Link to="/producer" className='item'>Producer</Link></li>
                                <li className='second_item'><Link to="/broker" className='item'>Broker</Link></li>
                                <li className='second_item'><Link to="/consumer" className='item'>Consumer</Link></li>
                                <li className='second_item'><Link to="/zookeeper" className='item'>Zookeeper</Link></li>
                                <li className='second_item'><Link to="/desasterRecovery" className='item'>Desaster Recovery</Link></li>
                            </ul>
                        </li>
                        <li className="list"><Link to="/about" className='item'>About Us</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navigator;