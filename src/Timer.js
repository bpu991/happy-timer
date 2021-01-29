import React, { Component } from 'react';
import './css/timer.css';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            minutes: 0,
            seconds: 0,
            running: false
        }
    }

    incrementSeconds = () => {
        if (this.state.seconds < 60) {
            this.setState({seconds: this.state.seconds + 1})
        }
    }

    decrementSeconds = () => {
        if (this.state.seconds > 0) {
            this.setState({seconds: this.state.seconds - 1})
        }

    }

    incrementMinutes = () => {
        if (this.state.minutes < 60) {
            this.setState({minutes: this.state.minutes + 1})
        }
    }

    decrementMinutes = () => {
        if (this.state.minutes > 0) {
            this.setState({minutes: this.state.minutes - 1})
        }
    }

    startTimer = () => {
        let interval = setInterval(() => {
            if (this.state.minutes >= 0 && this.state.seconds > 0) {
                this.setState({running: true, seconds: this.state.seconds - 1})
            } else if (this.state.minutes > 0 && this.state.seconds === 0) {
                this.setState({running: true, minutes: this.state.minutes - 1, seconds: 59})
            } else if (this.state.minutes === 0 && this.state.seconds > 0) {
                this.setState({running: true, minutes: 0, seconds: 50})
            } else {
                clearInterval(interval)
                this.setState({running:false})
            }
        }, 1000)
    }
    render() {
        return (
            <div className='timer-body'>
                {this.state.running === true ?
                    <h1>{this.state.minutes}:{this.state.seconds}</h1>
                    :
                    <div>
                        <button className='minInc'onClick={this.incrementMinutes}>^</button>
                        <button className='secInc'onClick={this.incrementSeconds}>^</button>
                        <h1>{this.state.minutes}:{this.state.seconds}</h1>
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
