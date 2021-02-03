import React, { Component } from 'react';
import CountDown from './CountDown';
import './css/timer.css';
import ding from './ding.mp3';
import {Howl, Howler} from 'howler';
import logo from './logo.png';
import ani1 from './bg.jpg';

const borderStyle = {
    border: '4px dotted blue'
};

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            minutes: 0,
            minutes2: 0,
            seconds: 0,
            seconds2: 0,
            running: false,
            bg1: false
        }
    }

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

    incrementMinutes = () => {
        if (this.state.minutes < 5) {
            this.setState({minutes: this.state.minutes + 1})
        }
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

    selectAnimation1 = () => {
        if (this.state.bg1 === false) {
            this.setState({bg1: true});
        } else {
            this.setState({bg1:false});
        }
        
    }

    startTimer = () => {
        let interval = setInterval(() => {
            if (this.state.minutes !== 0 && this.state.minutes2 !== 0 && this.state.seconds === 0 && this.state.seconds2 !== 0) {
                this.setState({running: true, seconds2: this.state.seconds2 - 1})
            } else if (this.state.minutes !== 0 && this.state.minutes2 !== 0 && this.state.seconds === 0 && this.state.seconds2 === 0){
                this.setState({running: true, minutes2: this.state.minutes2 - 1, seconds: 5, seconds2: 9})
            } else if (this.state.minutes !== 0 && this.state.minutes2 !== 0 && this.state.seconds !== 0 && this.state.seconds2 !== 0){
                this.setState({running: true, seconds2: this.state.seconds2 - 1})
            } else if (this.state.minutes !== 0 && this.state.minutes2 !== 0 && this.state.seconds !== 0 && this.state.seconds2 === 0){
                this.setState({running: true, seconds: this.state.seconds - 1, seconds2: 9})
            } else if (this.state.minutes !== 0 && this.state.minutes2 === 0 && this.state.seconds !== 0 && this.state.seconds2 !== 0) {
                this.setState({running: true, seconds2: this.state.seconds2 - 1})
            } else if (this.state.minutes !== 0 && this.state.minutes2 === 0 && this.state.seconds !== 0 && this.state.seconds2 === 0) {
                this.setState({running: true, seconds: this.state.seconds - 1, seconds2: 9})
            } else if (this.state.minutes !== 0 && this.state.minutes2 === 0 && this.state.seconds === 0 && this.state.seconds2 !== 0) {
                this.setState({running: true, seconds2: this.state.seconds2 - 1})
            } else if (this.state.minutes !== 0 && this.state.minutes2 === 0 && this.state.seconds === 0 && this.state.seconds2 === 0) {
                this.setState({running: true, minutes: this.state.minutes - 1, minutes2: 9, seconds: 5, seconds2: 9})
            } else if (this.state.minutes === 0 && this.state.minutes2 !== 0 && this.state.seconds !== 0 && this.state.seconds2 !== 0) {
                this.setState({running: true, seconds2: this.state.seconds2 - 1})
            } else if (this.state.minutes === 0 && this.state.minutes2 !== 0 && this.state.seconds !== 0 && this.state.seconds2 === 0) {
                this.setState({running: true, seconds: this.state.seconds - 1, seconds2: 9})
            } else if (this.state.minutes === 0 && this.state.minutes2 !== 0 && this.state.seconds === 0 && this.state.seconds2 !== 0) {
                this.setState({running: true, seconds2: this.state.seconds2 - 1})
            } else if (this.state.minutes === 0 && this.state.minutes2 !== 0 && this.state.seconds === 0 && this.state.seconds2 === 0) {
                this.setState({running: true, minutes2: this.state.minutes2 - 1, seconds: 5, seconds2: 9})
            } else if (this.state.minutes === 0 && this.state.minutes2 === 0 && this.state.seconds !== 0 && this.state.seconds2 !== 0) {
                this.setState({running: true, seconds2: this.state.seconds2 - 1})
            } else if (this.state.minutes === 0 && this.state.minutes2 === 0 && this.state.seconds !== 0 && this.state.seconds2 === 0) {
                this.setState({running: true, seconds: this.state.seconds - 1, seconds2: 9})
            } else if (this.state.minutes === 0 && this.state.minutes2 === 0 && this.state.seconds === 0 && this.state.seconds2 !== 0) {
                this.setState({running: true, seconds2: this.state.seconds2 - 1})
            } else {
                // alert('All Done!')
                clearInterval(interval)
                this.setState({running:false})
            }
        }, 1000)

    }

    stopTimer = () => {
        this.setState({minutes: 0, minutes2: 0, seconds: 0, seconds2: 0, running: false});
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
                        
                        <div className='start-button'> 
                            <button className='button-start' onClick={this.startTimer}>Start Timer</button>
                        </div> 
                        

                    </div>
                    
                    <div className='animation-selection'>
                        {this.state.bg1 === true ? 
                            <div>
                                <img onClick={this.selectAnimation1} style={borderStyle} className='ani-1' src={ani1}></img>
                            </div>
                            :
                            <div>
                                <img onClick={this.selectAnimation1} className='ani-1' src={ani1}></img>
                            </div>
                        }
                    </div>
                </div>
            )
        } else if (this.state.running === true && this.state.bg1 ===true ){
            return (
                <CountDown minutes={this.state.minutes} minutes2={this.state.minutes2} seconds={this.state.seconds} seconds2={this.state.seconds2}/>
            )
        } else if (this.state.running === true && this.state.bg1 === false) {
            return (
                <div className='timer-body'>
                    <div className='logo-title'>
                        <img className='logo' src={logo}></img>
                    </div>
                    <div className='timer-content'>
                        <div className='inc-buttons'>
                            <button className='myButton' onClick={this.incrementMinutes}>+</button>
                            <button className='myButton' onClick={this.incrementMinutes2}>+</button>
                            <button className='myButton' onClick={this.incrementSeconds}>+</button>
                            <button className='myButton' onClick={this.incrementSeconds2}>+</button>
                        </div>
                        <div className='timer-settings'>
                            <h1>{this.state.minutes} {this.state.minutes2} : {this.state.seconds} {this.state.seconds2}</h1>
                        </div>
                        <div className='dec-buttons'>
                            <button className='myButton' onClick={this.decrementMinutes}>-</button>
                            <button className='myButton' onClick={this.decrementMinutes2}>-</button>
                            <button className='myButton' onClick={this.decrementSeconds}>-</button>
                            <button className='myButton' onClick={this.decrementSeconds2}>-</button>
                        </div>
                        {this.state.running === true ?
                            <div className='start-button'>
                                <button className='button-start' onClick={this.stopTimer}>Stop Timer</button>
                            </div>
                            :
                            <div className='start-button'>
                                <button className='button-start' onClick={this.startTimer}>Start Timer</button>
                            </div>
                        }

                    </div>
                    <div className='animation-selection'>
                        <div>
                            <img onClick={this.selectAnimation1} style={borderStyle} className='ani-1' src={ani1}></img>
                        </div>

                    </div>
                </div>
            )
        }
    }
}

export default Timer;
