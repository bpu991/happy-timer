import React, { Component } from 'react';
import CountDown from './CountDown';
import '../css/timer.css';
import logo from '../media/logo2.png';
import copyright from '../media/copyright.png'
import gameboyIcon from '../media/gameboy-icon.png';
import skeletonIcon from '../media/skeleton-icon.png';
import cavemanIcon from '../media/caveman-icon.png';
import knightIcon from '../media/knight-icon.png';
import cavemanGif from '../media/caveman.gif';
import knightGif from '../media/knight.gif';
import skeletonGif from '../media/skeleton.gif';


class Timer extends Component {
    constructor() {
        super();
        this.state = {
            minutes: 0,
            minutes2: 0,
            seconds: 0,
            seconds2: 0,
            running: false,
            gameboyAnimation: false,
            skeletonAnimation: false,
            cavemanAnimation: false,
            knightAnimation: false,
        }
    }

    // Handles the increment/decrement logic for seconds
    incrementSeconds = () => {
        if (this.state.seconds < 5) {
            this.setState({seconds: this.state.seconds + 1})
        }
    }

    decrementSeconds = () => {
        if (this.state.seconds > 0) {
            this.setState({seconds: this.state.seconds - 1})
        }

    }

    incrementSeconds2 = () => {
        if (this.state.seconds2 < 9) {
            this.setState({seconds2: this.state.seconds2 + 1})
        }
    }

    decrementSeconds2 = () => {
        if (this.state.seconds2 > 0) {
            this.setState({seconds2: this.state.seconds2 - 1})
        }

    }

    // Handles the increment/decrement logic for minutes
    incrementMinutes = () => {
        if (this.state.minutes < 5) {
            this.setState({minutes: this.state.minutes + 1})
        }
        console.log(this.state.minutes)
    }

    decrementMinutes = () => {
        if (this.state.minutes > 0) {
            this.setState({minutes: this.state.minutes - 1})
        }
    }
    incrementMinutes2 = () => {
        if (this.state.minutes2 < 9) {
            this.setState({minutes2: this.state.minutes2 + 1})
        }
    }

    decrementMinutes2 = () => {
        if (this.state.minutes2 > 0) {
            this.setState({minutes2: this.state.minutes2 - 1})
        }
    }

    // The following functions determine the selection for the various animations
    selectGameboyAnimation = () => {

        // if gameboyAnimation is false, this changes it to true and changes the other animations to false
        if (this.state.gameboyAnimation === false) { 
            this.setState({ gameboyAnimation: true, skeletonAnimation: false, cavemanAnimation: false, knightAnimation: false});
        } 

        // handles the case where you select an animation and want to deselect it without having to choose another one
        else { 
            this.setState({gameboyAnimation:false});
        }

    }

    selectSkeletonAnimation = () => {
        if (this.state.skeletonAnimation === false) {
            this.setState({ gameboyAnimation: false, skeletonAnimation: true, cavemanAnimation: false, knightAnimation: false});
        } else {
            this.setState({skeletonAnimation:false});
        }

    }

    selectCavemanAnimation = () => {
        if (this.state.cavemanAnimation === false) {
            this.setState({ gameboyAnimation: false, skeletonAnimation: false, cavemanAnimation: true, knightAnimation: false});
        } else {
            this.setState({ cavemanAnimation: false });
        }
    }

    selectKnightAnimation = () => {
        if (this.state.knightAnimation === false) {
            this.setState({ gameboyAnimation: false, skeletonAnimation: false, cavemanAnimation: false, knightAnimation: true });
        } else {
            this.setState({ knightAnimation: false });
        }
    }

    // Handles the audio playback when the timer is finished
    playAudio = () => {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }


    startTimer = () => {
        // If no time is selected, an alert pop ups telling the user to select a time
        if (this.state.minutes === 0 && this.state.minutes2 === 0 && this.state.seconds === 0 && this.state.seconds2 === 0) {
            alert('Please select a time');
            return;
        }
        
         // If no animation is selected, an alert pop ups telling the user to select an animation
        if (!this.state.gameboyAnimation && !this.state.skeletonAnimation && !this.state.cavemanAnimation && !this.state.knightAnimation) {
            alert('Please select an animation');
            return;
        }

        let interval = setInterval(() => {
            if (this.state.minutes !== 0 && this.state.minutes2 !== 0 && this.state.seconds === 0 && this.state.seconds2 !== 0) {
                this.setState({ running: true, seconds2: this.state.seconds2 - 1 })
            } else if (this.state.minutes !== 0 && this.state.minutes2 !== 0 && this.state.seconds === 0 && this.state.seconds2 === 0) {
                this.setState({ running: true, minutes2: this.state.minutes2 - 1, seconds: 5, seconds2: 9 })
            } else if (this.state.minutes !== 0 && this.state.minutes2 !== 0 && this.state.seconds !== 0 && this.state.seconds2 !== 0) {
                this.setState({ running: true, seconds2: this.state.seconds2 - 1 })
            } else if (this.state.minutes !== 0 && this.state.minutes2 !== 0 && this.state.seconds !== 0 && this.state.seconds2 === 0) {
                this.setState({ running: true, seconds: this.state.seconds - 1, seconds2: 9 })
            } else if (this.state.minutes !== 0 && this.state.minutes2 === 0 && this.state.seconds !== 0 && this.state.seconds2 !== 0) {
                this.setState({ running: true, seconds2: this.state.seconds2 - 1 })
            } else if (this.state.minutes !== 0 && this.state.minutes2 === 0 && this.state.seconds !== 0 && this.state.seconds2 === 0) {
                this.setState({ running: true, seconds: this.state.seconds - 1, seconds2: 9 })
            } else if (this.state.minutes !== 0 && this.state.minutes2 === 0 && this.state.seconds === 0 && this.state.seconds2 !== 0) {
                this.setState({ running: true, seconds2: this.state.seconds2 - 1 })
            } else if (this.state.minutes !== 0 && this.state.minutes2 === 0 && this.state.seconds === 0 && this.state.seconds2 === 0) {
                this.setState({ running: true, minutes: this.state.minutes - 1, minutes2: 9, seconds: 5, seconds2: 9 })
            } else if (this.state.minutes === 0 && this.state.minutes2 !== 0 && this.state.seconds !== 0 && this.state.seconds2 !== 0) {
                this.setState({ running: true, seconds2: this.state.seconds2 - 1 })
            } else if (this.state.minutes === 0 && this.state.minutes2 !== 0 && this.state.seconds !== 0 && this.state.seconds2 === 0) {
                this.setState({ running: true, seconds: this.state.seconds - 1, seconds2: 9 })
            } else if (this.state.minutes === 0 && this.state.minutes2 !== 0 && this.state.seconds === 0 && this.state.seconds2 !== 0) {
                this.setState({ running: true, seconds2: this.state.seconds2 - 1 })
            } else if (this.state.minutes === 0 && this.state.minutes2 !== 0 && this.state.seconds === 0 && this.state.seconds2 === 0) {
                this.setState({ running: true, minutes2: this.state.minutes2 - 1, seconds: 5, seconds2: 9 })
            } else if (this.state.minutes === 0 && this.state.minutes2 === 0 && this.state.seconds !== 0 && this.state.seconds2 !== 0) {
                this.setState({ running: true, seconds2: this.state.seconds2 - 1 })
            } else if (this.state.minutes === 0 && this.state.minutes2 === 0 && this.state.seconds !== 0 && this.state.seconds2 === 0) {
                this.setState({ running: true, seconds: this.state.seconds - 1, seconds2: 9 })
            } else if (this.state.minutes === 0 && this.state.minutes2 === 0 && this.state.seconds === 0 && this.state.seconds2 !== 0) {
                this.setState({ running: true, seconds2: this.state.seconds2 - 1 })
            } else {
                this.playAudio();
                clearInterval(interval);
            }
        }, 1000)

    }

    render() {
        if(this.state.running === false) {
            return (
                <div className='timer-body'>
                    <div className='logo-title'>
                        <img className='logo' src={logo}></img>
                    </div>
                    <div className='timer-content'>
                        <div className='inc-buttons'>
                            <button className='myButton'onClick={this.incrementMinutes}>+</button>
                            <button className='myButton'onClick={this.incrementMinutes2}>+</button>
                            <button className='myButton'onClick={this.incrementSeconds}>+</button>
                            <button className='myButton'onClick={this.incrementSeconds2}>+</button>
                        </div>
                        <div className='timer-settings'>
                            <h1>{this.state.minutes} {this.state.minutes2} : {this.state.seconds} {this.state.seconds2}</h1>
                        </div>
                        <div className='dec-buttons'>
                            <button className='myButton'onClick={this.decrementMinutes}>-</button>
                            <button className='myButton'onClick={this.decrementMinutes2}>-</button>
                            <button className='myButton'onClick={this.decrementSeconds}>-</button>
                            <button className='myButton'onClick={this.decrementSeconds2}>-</button>
                        </div>                
                        <div className='animation-selection'>
                            {/* {this.state.gameboyAnimation === true ?
                                <div>
                                    <img onClick={this.selectGameboyAnimation} style={borderStyle} className='icon' src={gameboyIcon}></img>
                                </div>
                                :
                                <div>
                                    <img onClick={this.selectGameboyAnimation} className='icon' src={gameboyIcon}></img>
                                </div>
                            } */}
                            {this.state.skeletonAnimation === true ?
                                <div>
                                    <img onClick={this.selectSkeletonAnimation} className='icon-skeleton' src={skeletonGif}></img>
                                </div>
                                :
                                <div>
                                    <img onClick={this.selectSkeletonAnimation} className='icon-skeleton' src={skeletonIcon}></img>
                                </div>
                            }
                            {this.state.cavemanAnimation === true ?
                                <div >
                                    <img onClick={this.selectCavemanAnimation} className='icon' src={cavemanGif}></img>
                                </div>
                                :
                                <div>
    
                                    <img onClick={this.selectCavemanAnimation} className='icon' src={cavemanIcon}></img>
                                </div>
                            }
                            {this.state.knightAnimation === true ?
                                <div>
                                    <img onClick={this.selectKnightAnimation} className='icon-knight' src={knightGif}></img>
                                </div>
                                :
                                <div>
                                    <img onClick={this.selectKnightAnimation} className='icon-knight' src={knightIcon}></img>
                                </div>
                            }
                    </div> 
                    </div>
                    <div className='start-button'>
                        <button className='button-start' onClick={this.startTimer}>Start Timer</button>
                    </div>
                    <div className='footer'>
                        <a href='https://github.com/bpu991'>
                            <img style={{height: '70px', width: '300px'}}src={copyright} />
                        </a>
                            
                    </div>
                    
                </div>
            )
        } else {
            return (
                <CountDown 
                    minutes={this.state.minutes} 
                    minutes2={this.state.minutes2} 
                    seconds={this.state.seconds} 
                    seconds2={this.state.seconds2}
                    gameboyAnimation={this.state.gameboyAnimation}
                    skeletonAnimation={this.state.skeletonAnimation}
                    cavemanAnimation={this.state.cavemanAnimation}
                    knightAnimation={this.state.knightAnimation}
                />
            )
        }
    }
}

export default Timer;
