import React, { Component } from 'react';
import '../css/Navigator.css';

class Navigator extends Component {
    
    
    
    render() {
        return (
            <header>
                <div className="nav">
                    <nav>
                        <ul>
                            <li><div className='item'>Home</div></li>
                            <li><div className='item'>Graphic Demonstration</div></li>
                            <li><div className='item'>About Us</div></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navigator;