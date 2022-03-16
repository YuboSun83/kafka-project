import React, { Component } from 'react';
import '../css/Welcome.css';


class Welcome extends Component {

    render() {
        return (
            <div>
                <div className='welcome'>
                    Welcome to learn Kafka!
                    <div className="doc_link">
                        Offical Documentation:{" "}
                        <a href='https://kafka.apache.org/documentation/'>
                            https://kafka.apache.org/documentation/
                        </a>
                    </div>
                </div>
                <div className="basic_graph">
                    <img src={require('../images/kafka_basic_graph.png')} alt=""/>
                </div>
                
            </div>
        );
    }
}

export default Welcome;