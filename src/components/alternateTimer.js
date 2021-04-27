import React, { Component } from 'react';
import CountDown from './CountDown';
import logo from '../media/logo2.png';
import icon2 from '../media/skeleton-icon.png';
import icon3 from '../media/caveman-icon.png';
import cavemanGif from '../media/caveman.gif';
import knightGif from '../media/knight.gif';
import skeletonGif from '../media/skeleton.gif';
import icon4 from '../media/knight-icon.png';
import '../css/alternate-timer.css';

// This component is for the alternate timer function that is talked about on the
// README.md. It features a different startTimer function and a slightly different
// user interface

// This component is not the one that is deployed onto the live link

class AlternateTimer extends Component {
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
            knightAnimation: false
        }
    }

    handleMinutes = (e) => {
        if (e.target.value > 60) {
            alert('Please enter a number between 0 and 60')
        } else {
             this.setState({ minutes: e.target.value })
        }
    }

    handleSeconds = (e) => {
        if (e.target.value === `${0}${0}`  || e.target.value > 59) {
            alert('Please enter a number between 0 and 59')
        } else {
            this.setState({ seconds: e.target.value })
        }
    }

    // Handles the increment/decrement logic for seconds
    incrementSeconds = (e) => {
        if (e.target.value > 60) {
            alert('enter valid number')
        } else {
            this.setState({ seconds: e.target.value })
        }
    }

    decrementSeconds = () => {
        if (this.state.seconds > 0) {
            this.setState({ seconds: this.state.seconds - 1 })
        }

    }

    incrementSeconds2 = () => {
        if (this.state.seconds2 < 9) {
            this.setState({ seconds2: this.state.seconds2 + 1 })
        }
    }

    decrementSeconds2 = () => {
        if (this.state.seconds2 > 0) {
            this.setState({ seconds2: this.state.seconds2 - 1 })
        }

    }

    // Handles the increment/decrement logic for minutes

    selectGameboyAnimation = () => {
        if (this.state.gameboyAnimation === false) { // if gameboyAnimation is false, this changes it to true and changes the other animations to false
            this.setState({ gameboyAnimation: true, skeletonAnimation: false, cavemanAnimation: false, knightAnimation: false });
        } else { // handles the case where you select an animation and want to deselect it without having to choose another one
            this.setState({ gameboyAnimation: false });
        }

    }

    selectSkeletonAnimation = () => {
        if (this.state.skeletonAnimation === false) {
            this.setState({ gameboyAnimation: false, skeletonAnimation: true, cavemanAnimation: false, knightAnimation: false });
        } else {
            this.setState({ skeletonAnimation: false });
        }

    }

    selectCavemanAnimation = () => {
        if (this.state.cavemanAnimation === false) {
            this.setState({ gameboyAnimation: false, skeletonAnimation: false, cavemanAnimation: true, knightAnimation: false });
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

    startTimer = () => {
        let interval = setInterval(() => {
            if (this.state.minutes !== 0 && this.state.seconds !== 0) {
                this.setState({ running: true, seconds: this.state.seconds - 1 })
            } else if (this.state.minutes !== 0 && this.state.seconds === 0) {
                this.setState({ running: true, minutes: this.state.minutes - 1, seconds: 59 })
            } else if (this.state.minutes === 0 && this.state.seconds !== 0) {
                this.setState({ running: true, seconds: this.state.seconds - 1 })
            } else {
                alert('All Done!')
                clearInterval(interval)
                window.location.reload(true);
            }
        }, 1000)
    }

    render() {
        if (this.state.running === false) {
            return (
                <div className='timer-body'>
                    <div className='logo-title'>
                        <img className='logo' src={logo}></img>
                    </div>
                    <div className='timer-content'>
                        <div className='input-fields'>
                            <input className='field' placeholder={this.state.minutes} value={this.state.minutes} onChange={this.handleMinutes} />
                            <input className='field' placeholder={this.state.seconds} value={this.state.seconds} onChange={this.handleSeconds} />
                        </div>
                        <div className='input-descriptions'>
                            <div className='min'>
                                <h2>min</h2>
                            </div>
                            <div className='sec'>
                                <h2>sec</h2>
                            </div>
                            
                        </div>
                        <div className='animation-selection'>
                            {this.state.skeletonAnimation === true ?
                                <div>
                                    <img onClick={this.selectSkeletonAnimation} className='icon-skeleton' src={skeletonGif}></img>
                                </div>
                                :
                                <div>
                                    <img onClick={this.selectSkeletonAnimation} className='icon-skeleton' src={icon2}></img>
                                </div>
                            }
                            {this.state.cavemanAnimation === true ?
                                <div >
                                    <img onClick={this.selectCavemanAnimation} className='icon' src={cavemanGif}></img>
                                </div>
                                :
                                <div>

                                    <img onClick={this.selectCavemanAnimation} className='icon' src={icon3}></img>
                                </div>
                            }
                            {this.state.knightAnimation === true ?
                                <div>
                                    <img onClick={this.selectKnightAnimation} className='icon-knight' src={knightGif}></img>
                                </div>
                                :
                                <div>
                                    <img onClick={this.selectKnightAnimation} className='icon-knight' src={icon4}></img>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='start-button'>
                        <button className='button-start' onClick={this.startTimer}>Start Timer</button>
                    </div>
                    <div className='footer'>

                    </div>

                </div>
            )
        } else {
            return (
                <CountDown
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}
                    gameboyAnimation={this.state.gameboyAnimation}
                    skeletonAnimation={this.state.skeletonAnimation}
                    cavemanAnimation={this.state.cavemanAnimation}
                    knightAnimation={this.state.knightAnimation}
                />
            )
        }
    }
}

export default AlternateTimer;
