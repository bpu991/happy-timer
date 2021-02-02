import React, { Component } from 'react';
import CountDown from './CountDown';
import './css/timer.css';
import ding from './ding.mp3';
import {Howl, Howler} from 'howler';

const audioClips = [
    {sound: {ding}, label: 'ding'}
]
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

    soundPlay = (src) => {
        const sound = new Howl({
            src,
            html5: true
        });
        sound.play()
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
            } else {
                alert('All Done!')
                clearInterval(interval)
                this.setState({running:false})
            }
        }, 1000)

    }
    renderButtonSound = () => {
        return audioClips.map((soundObj, index) => {
            return (
                <button key={index} onClick={() => this.soundPlay(soundObj.sound)}>
                    play
                </button>
            )
        })
    }
    render() {
        if(this.state.running === false) {
            return (
                <div className='timer-body'>
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
                            <button onClick={this.startTimer}>Start Timer</button>
                        </div>

                    </div>
                </div>
            )
        } else {
            return (
                <CountDown minutes={this.state.minutes} minutes2={this.state.minutes2} seconds={this.state.seconds} seconds2={this.state.seconds2}/>
            )
        }
        // return (
        //     <div className='timer-body'>
        //         {this.state.running === true ?
        //             <h1>{this.state.minutes}{this.state.minutes2}:{this.state.seconds}{this.state.seconds2}</h1>
        //             :
        //             <div>
        //                 <button className='minInc'onClick={this.incrementMinutes}>^</button>
        //                 <button className='minInc'onClick={this.incrementMinutes2}>^</button>
        //                 <button className='secInc'onClick={this.incrementSeconds}>^</button>
        //                 <button className='secInc'onClick={this.incrementSeconds2}>^</button>
        //                 <h1>{this.state.minutes}{this.state.minutes2}:{this.state.seconds}{this.state.seconds2}</h1>
        //                 <button className='minDec'onClick={this.decrementMinutes}>v</button>
        //                 <button className='secDec'onClick={this.decrementSeconds}>v</button>
        //                 <button onClick={this.startTimer}>Start Timer</button>
        //             </div>
        //         }
        //     </div>
        // )
    }
}

export default Timer;
