import React, { Component } from 'react';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            minutes: 0,
            seconds: 0,
        }
    }

    incrementSeconds = () => {
        this.setState({seconds: this.state.seconds + 1})
    }

    decrementSeconds = () => {
        this.setState({seconds: this.state.seconds - 1})
    }

    incrementMinutes = () => {
        this.setState({minutes: this.state.minutes + 1})
    }

    decrementMinutes = () => {
        this.setState({minutes: this.state.minutes - 1})
    }

    startTimer = () => {
        let interval = setInterval(() => {
            if (this.state.minutes >= 0 && this.state.seconds > 0) {
                this.setState({seconds: this.state.seconds - 1})
            } else if (this.state.minutes > 0 && this.state.seconds === 0) {
                this.setState({minutes: this.state.minutes - 1, seconds: 60})
            } else if (this.state.minutes === 0 && this.state.seconds > 0) {
                this.setState({minutes: 0, seconds: 60})
            } else {
                clearInterval(interval)
            }

        }, 1000)

    }
    render() {
        return (
            <div>
                <h1>{this.state.minutes}:{this.state.seconds}</h1>
                {this.state.minutes < 60 && (<button onClick={this.incrementMinutes}>increment</button>)}
                {this.state.minutes > 0 && (<button onClick={this.decrementMinutes}>decrement</button>)}
                {this.state.seconds < 60 && (<button onClick={this.incrementSeconds}>increment</button>)}
                {this.state.seconds > 0 && (<button onClick={this.decrementSeconds}>decrement</button>)}
                <button onClick={this.startTimer}>Start Timer</button>
            </div>
        )
    }
}

export default Timer;
