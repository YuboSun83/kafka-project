import React, { Component } from 'react';
import Animitions from './Animitions';
import '../css/Producer.css'
import 'bootstrap/dist/css/bootstrap.css'

class Producer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: false,
            acks: '',
            batchSize: '',
            lingerMs: '',
            partitions: '',
            replications: ''
        }

        this.changeAcks = this.changeAcks.bind(this);
        this.changeBatchSize = this.changeBatchSize.bind(this);
        this.changeLingerMs = this.changeLingerMs.bind(this);
        this.changePartitions = this.changePartitions.bind(this);
        this.changeRepilications = this.changeRepilications.bind(this);
        this.updateProperties = this.updateProperties.bind(this);
    }

    handleClick = () => {
        this.setState({
            display: !this.state.display
        })
        // console.log(this.state.display)
    }

    changeAcks = (event) => {
        this.setState({
            acks: event.target.value
        });
    }

    changeBatchSize = (event) => {
        this.setState({
            batchSize: event.target.value
        });
    }

    changeLingerMs = (event) => {
        this.setState({
            lingerMs: event.target.value
        });
    }

    changePartitions = (event) => {
        this.setState({
            partitions: event.target.value
        });
    }

    changeRepilications = (event) => {
        this.setState({
            replications: event.target.value
        });
    }

    updateProperties = (e) => {
        e.preventDefault();
        
        this.handleClick();
        console.log(e);
        // console.log(this.state.acks + this.state.batchSize);
    }

    cancelProperties = (e) => {
        e.preventDefault();
        this.handleClick();
        // console.log(this.state.acks + this.state.batchSize);
    }

    // componentDidUpdate(){
    //     var basicTimeline = anime.timeline();
    //     basicTimeline
    //         .add({
    //             targets:'.ball',
    //             translateX: [0, "1000px"],
    //             duration: 500,
    //             easing: "easeOutSine"
    //         })
    // }

    render() {
        return (
            <div className='container'>
                <h2 className='title'>Producer</h2>
                <div className="setting">
                    <div className='set' onClick={this.handleClick}>Setting
                        <img src="https://img.icons8.com/ios-filled/50/000000/settings.png" alt='' className='setting_icon' />
                    </div>
                    <div className={this.state.display ? 'showUp' : 'showNone'}>
                        <form action="submit" className='setting_form'>
                            <ul>
                                <span>Producer Items</span>
                                <li>acks:<input type="number" name='acks' value={this.state.acks} onChange={this.changeAcks} /></li>
                                <li>batch size:<input type="number" name='batchSize' value={this.state.batchSize} onChange={this.changeBatchSize} />{" "}MB</li>
                                <li>linger ms:<input type="number" name='lingerMs' value={this.state.lingerMs} onChange={this.changeLingerMs} />{" "}ms</li>
                                <span>Topic Items</span>
                                <li>partitions:<input type="number" name='partitions' value={this.state.partitions} onChange={this.changePartitions} /></li>
                                <li>replications:<input type="number" name='replications' value={this.state.replications} onChange={this.changeRepilications} /></li>
                            </ul>

                            <button className='btn-danger' onClick={this.cancelProperties}>Cancel</button>
                            <button className='btn-success' type='submit' onClick={this.updateProperties}>Submit</button>
                        </form>
                    </div>
                </div>
                <Animitions />

            </div>
        );
    }
}

export default Producer;