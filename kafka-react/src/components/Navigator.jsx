import React, { Component } from 'react';
import '../css/Navigator.css';

class Navigator extends Component {    
    render() {
        return (
            <header>
                <div className="nav">
                    <nav>
                        <ul>
                            <li><a href="./index.html">Home</a></li>
                            <li><a href="./html/graph.html">Graphic Demonstration</a></li>
                            <li><a href="./html/about.html">About Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navigator;