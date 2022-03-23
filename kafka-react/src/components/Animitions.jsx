import React, { Component } from 'react';
import '../css/Animition.css';
// import anime from 'animejs';

class Animitions extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    // componentDidUpdate(){

    //     console.log(this.props.state.acks)

    //     var basicTimeline1 = anime.timeline({
    //         easing:"easeOutSine",
    //         duration: 500,
    //         loop: true
    //     });
    //     basicTimeline1
    //         //ball2 green
    //         .add({
    //             targets: '.ball2',
    //             translateX: [0, "160px"],
    //         })            
    //         .add({
    //             targets: '.ball2',
    //             translateX: ["160px", "480px"],
    //             translateY: [0, "200px"]
    //         })
    //         .add({
    //             targets: '.ball2',
    //             translateX: ["480px", "710px"],
    //         })
    //         .add({
    //             targets: '.ball2',
    //             translateX: ["710px", "1010px"],
    //             translateY: ["200px", 0]
    //         })
    //         .add({
    //             targets: '.ball2',
    //             translateX: ["1010px", "1210px"],
    //         })
    //         //ball1 red
    //         .add({
    //             targets: '.ball1',
    //             translateX: [0, "200px"],
    //         })            
    //         .add({
    //             targets: '.ball1',
    //             translateX: ["200px", "520px"],
    //             translateY: [0, "200px"]
    //         })
    //         .add({
    //             targets: '.ball1',
    //             translateX: ["520px", "750px"],
    //         })
    //         .add({
    //             targets: '.ball1',
    //             translateX: ["750px", "1050px"],
    //             translateY: ["200px", 0]
    //         })
    //         .add({
    //             targets: '.ball1',
    //             translateX: ["1050px", "1210px"],
    //         })
            
        
    //     setTimeout(() => {
    //         var basicTimeline2 = anime.timeline({
    //             easing:"easeOutSine",
    //             duration: 400,
    //             loop: true
    //         });
    //         basicTimeline2
    //             //ball4 pink
    //             .add({
    //                 targets: '.ball4',
    //                 translateX: [0, "160px"],
    //             })            
    //             .add({
    //                 targets: '.ball4',
    //                 translateX: ["160px", "480px"],
    //                 translateY: [0, "-240px"]
    //             })
    //             .add({
    //                 targets: '.ball4',
    //                 translateX: ["480px", "710px"],
    //             })
    //             .add({
    //                 targets: '.ball4',
    //                 translateX: ["710px", "1010px"],
    //                 translateY: ["-240px", 0]
    //             })
    //             .add({
    //                 targets: '.ball4',
    //                 translateX: ["1010px", "1210px"],
    //             })

    //             //ball3 blue
    //             .add({
    //                 targets: '.ball3',
    //                 translateX: [0, "200px"],
    //             })            
    //             .add({
    //                 targets: '.ball3',
    //                 translateX: ["200px", "520px"],
    //                 translateY: [0, "-240px"]
    //             })
    //             .add({
    //                 targets: '.ball3',
    //                 translateX: ["520px", "750px"],
    //             })
    //             .add({
    //                 targets: '.ball3',
    //                 translateX: ["750px", "1050px"],
    //                 translateY: ["-240px", 0]
    //             })
    //             .add({
    //                 targets: '.ball3',
    //                 translateX: ["1050px", "1210px"],
    //             })
    //     }, 400);
        
    // }

    render() {    
        return (
            <div className="frame clearfix">
                <div className="producers">
                    <div className="producer1 box">PRODUCER-1
                        <div className='ball1 ball'></div>
                        <div className='ball2 ball'></div>
                    </div>
                    <div className="producer2 box">PRODUCER-2
                        <div className='ball3 ball'></div>
                        <div className='ball4 ball'></div>
                    </div>
                </div>

                <div className="topics">
                    <div className="topic1 box">TOPIC-1</div>
                </div>

                <div className="consumers">
                    <div className="consumer1 box">CONSUMER-1</div>
                    <div className="consumer2 box">CONSUMER-2</div>
                </div>

                <div>
                    <div>{this.props.acks}</div>
                    <div>{this.props.batchSize}</div>
                    <div>{this.props.lingerMs}</div>
                    <div>{this.props.partitions}</div>
                    <div>{this.props.repilications}</div>
                </div>
            </div>
        );
    }
}

export default Animitions;