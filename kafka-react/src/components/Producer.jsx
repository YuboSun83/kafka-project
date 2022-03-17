import React, { Component } from 'react';
import '../css/Producer.css'
import 'bootstrap/dist/css/bootstrap.css'

class Producer extends Component {

    constructor(props){
        super(props);
        this.state = {
            display: false
        }
    }

    handleClick = () => {
        this.setState({
            display: !this.state.display
        })
        // console.log(this.state.display)
    }

    render() {
        return (
            <div className='container'>
                <h2 className='title'>Producer</h2>
                <div className="setting">
                    <div className='set' onClick={this.handleClick}>Setting
                        <img src="https://img.icons8.com/ios-filled/50/000000/settings.png" alt='' className='setting_icon'/>
                    </div>
                    <div className = {this.state.display? 'showUp' : 'showNone'}>
                        <form action="submit" className='setting_form'>
                            <ul>
                                <span>Producer Items</span>
                                <li>acks:<input type="text" /></li>
                                <li>batch size:<input type="text" />{" "}MB</li>
                                <li>linger ms:<input type="text" />{" "}ms</li>
                                <span>Topic Items</span>
                                <li>partitions:<input type="text" /></li>
                                <li>replications:<input type="text" /></li>
                            </ul>
                            
                            <button className='btn-danger'>Cancel</button>
                            <button className='btn-success' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Producer;