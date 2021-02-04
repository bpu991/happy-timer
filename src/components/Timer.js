import React, { Component } from 'react';
import CountDown from './CountDown';
import CountDown2 from './CountDown2';
import CountDown3 from './CountDown3';
import '../css/timer.css';
import logo from '../media/logo2.png';
import icon1 from '../media/gameboy-icon.png';
import icon2 from '../media/skeleton-icon.png';
import icon3 from '../media/caveman-icon.png';

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
            bg1: false,
            bg2: false,
            bg3: false
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
            this.setState({bg1: true, bg2: false});
        } else {
            this.setState({bg1:false});
        }

    }

    selectAnimation2 = () => {
        if (this.state.bg2 === false) {
            this.setState({bg1: false, bg2: true});
        } else {
            this.setState({bg2:false});
        }

    }

    selectAnimation3 = () => {
        if (this.state.bg3 === false) {
            this.setState({ bg1: false, bg2: false, bg3: true });
        } else {
            this.setState({ bg3: false });
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
                this.setState({running:false, bg1: false, bg2:false})
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
                                <img onClick={this.selectAnimation1} style={borderStyle} className='icon' src={icon1}></img>
                            </div>
                            :
                            <div>
                                <img onClick={this.selectAnimation1} className='icon' src={icon1}></img>
                            </div>
                        }
                        {this.state.bg2 === true ?
                            <div>
                                <img onClick={this.selectAnimation2} style={borderStyle} className='icon' src={icon2}></img>
                            </div>
                            :
                            <div>
                                <img onClick={this.selectAnimation2} className='icon' src={icon2}></img>
                            </div>
                        }
                        {this.state.bg3 === true ?
                            <div>
                                <img onClick={this.selectAnimation3} style={borderStyle} className='icon' src={icon3}></img>
                            </div>
                            :
                            <div>
                                <img onClick={this.selectAnimation3} className='icon' src={icon3}></img>
                            </div>
                        }
                    </div>
                </div>
            )
        } else if (this.state.running === true && this.state.bg1 ===true ){
            return (
                <CountDown minutes={this.state.minutes} minutes2={this.state.minutes2} seconds={this.state.seconds} seconds2={this.state.seconds2}/>
            )
        } else if (this.state.running === true && this.state.bg2 === true ){
            return (
                <CountDown2 minutes={this.state.minutes} minutes2={this.state.minutes2} seconds={this.state.seconds} seconds2={this.state.seconds2}/>
            )
        } else if (this.state.running === true && this.state.bg3 === true) {
            return (
                <CountDown3 minutes={this.state.minutes} minutes2={this.state.minutes2} seconds={this.state.seconds} seconds2={this.state.seconds2} />
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
                            <img onClick={this.selectAnimation1} className='ani-1' src={icon1}></img>
                            <img onClick={this.selectAnimation2} className='ani-1' src={icon1}></img>
                        </div>

                    </div>
                </div>
            )
        }
    }
}

export default Timer;
