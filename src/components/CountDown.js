import React, { Component } from 'react';
import '../css/countdown.css';
import gameboy from '../media/gameboy.mp4';
import skeleton from '../media/skeleton.mp4';
import caveman from '../media/caveman.mp4';
import knight from '../media/knight.mp4';
import arrow from '../media/arrow.png';
const borderStyle = {
    transform: 'rotate(180deg)',
    opacity: '0.5'
};

const CountDown = (props) => {
    if (props.bg1) {
        return (
            <main>
                <section className='showcase'>

                    <div className='video-container'>
                        <video autoPlay muted loop src={gameboy} type="video/mp4"></video>
                    </div>
                    <div className='content'>
                        <div className='content-1'>
                            {/* <img style={borderStyle} src={arrow} /> */}
                        </div>
                        <div className='content-2'>
                            <h2>{props.minutes} {props.minutes2} : {props.seconds} {props.seconds2}</h2>
                        </div>
                        <div className='content-3'>

                        </div>

                    </div>
                </section>
            </main>
        );
    } else if (props.bg2) {
        return (
            <main>
                <section className='showcase'>

                    <div className='video-container'>
                        <video autoPlay muted loop src={skeleton} type="video/mp4"></video>
                    </div>
                    <div className='content'>
                        <div className='content-1'>
                            {/* <img style={borderStyle} src={arrow} /> */}
                        </div>
                        <div className='content-2'>
                            <h2>{props.minutes} {props.minutes2} : {props.seconds} {props.seconds2}</h2>
                        </div>
                        <div className='content-3'>

                        </div>

                    </div>
                </section>
            </main>
        );
    } else if (props.bg3) {
        return (
            <main>
                <section className='showcase'>

                    <div className='video-container'>
                        <video autoPlay muted loop src={caveman} type="video/mp4"></video>
                    </div>
                    <div className='content'>
                        <div className='content-1'>
                            {/* <img style={borderStyle} src={arrow} /> */}
                        </div>
                        <div className='content-2'>
                            <a href='/'>
                                <h2>{props.minutes} {props.minutes2} : {props.seconds} {props.seconds2}</h2>
                            </a>
                            
                        </div>
                        <div className='content-3'>

                        </div>

                    </div>
                </section>
            </main>
        );
    } else if (props.bg4) {
        return (
            <main>
                <section className='showcase'>

                    <div className='video-container'>
                        <video autoPlay muted loop src={knight} type="video/mp4"></video>
                    </div>
                    <div className='content'>
                        <div className='content-1'>
                            {/* <img style={borderStyle} src={arrow} /> */}
                        </div>
                        <div className='content-2'>
                            <h2>{props.minutes} {props.minutes2} : {props.seconds} {props.seconds2}</h2>
                        </div>
                        <div className='content-3'>

                        </div>

                    </div>
                </section>
            </main>
        );
    } else {
        return (
            <main>

                <div className='content-basic'>
                    <div className='content-1'>

                    </div>
                    <div className='content-2'>
                        <h2>{props.minutes} {props.minutes2} : {props.seconds} {props.seconds2}</h2>
                    </div>
                    <div className='content-3'>

                    </div>

                </div>
            </main>
        );
    }  
}

export default CountDown
