import React, { Component } from 'react';
import './css/timer.css';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            minutes: 0,
            minutes2: 0,
            seconds: 0,
            seconds2: 0,
            running: false
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
            }
        }, 1000)
    }
    render() {
        return (
            <div className='timer-body'>
                {this.state.running === true ?
                    <h1>{this.state.minutes}{this.state.minutes2}:{this.state.seconds}{this.state.seconds2}</h1>
                    :
                    <div>
                        <button className='minInc'onClick={this.incrementMinutes}>^</button>
                        <button className='minInc'onClick={this.incrementMinutes2}>^</button>
                        <button className='secInc'onClick={this.incrementSeconds}>^</button>
                        <button className='secInc'onClick={this.incrementSeconds2}>^</button>
                        <h1>{this.state.minutes}{this.state.minutes2}:{this.state.seconds}{this.state.seconds2}</h1>
                        <button className='minDec'onClick={this.decrementMinutes}>v</button>
                        <button className='secDec'onClick={this.decrementSeconds}>v</button>
                        <button onClick={this.startTimer}>Start Timer</button>
                    </div>
                }
            </div>
        )
    }
}

export default Timer;
