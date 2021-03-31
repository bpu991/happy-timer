import React, { Component } from 'react';
import gameboy from '../media/gameboy.mp4';
import skeleton from '../media/skeleton.mp4';
import caveman from '../media/caveman.mp4';
import knight from '../media/knight.mp4';
import skeletonAlert from '../media/boo.mp3'
import cavemanAlert from '../media/bongos.mp3';
import knightAlert from '../media/sword.mp3';
import '../css/countdown.css';

const CountDown = (props) => {
    
    const handleClick = () => {
        window.location.reload(true);
    }

    if (props.skeletonAnimation) {
        return (
            <main>
                {/* If the timer is finished, the video will pause and the count down timer will be replaced with a 'return home' button */}
                {/* This logic is repeated for all the animations */}
                {props.minutes === 0 && props.minutes2 === 0 && props.seconds === 0 && props.seconds2 === 0 ?
                        <section className='showcase'>
                            <div className='video-container'>
                                <video autoPlay muted pause src={skeleton} type="video/mp4"></video>
                            </div>
                            <audio className="audio-element" loop>
                                <source src={skeletonAlert} type='audio/wav'></source>
                            </audio>
                            <div className='content'>
                                <div className='content-2'>
                                    <div className='start-button'>
                                        <button className='button-start' onClick={handleClick}>Return Home</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    :
                    <section className='showcase'>
                        <div className='video-container'>
                            <video autoPlay muted loop src={skeleton} type="video/mp4"></video>
                        </div>
                        <audio className="audio-element" loop>
                            <source src={skeletonAlert}  type='audio/wav'></source>
                        </audio>
                        <div className='content'>
                            <div className='content-2' onClick={handleClick}>
                                <h2 >{props.minutes} {props.minutes2} : {props.seconds} {props.seconds2}</h2>
                            </div>
                        </div>
                    </section>
                }
            </main>
        );
    } else if (props.cavemanAnimation) {
        return (
            <main>
                {props.minutes === 0 && props.minutes2 === 0 && props.seconds === 0 && props.seconds2 === 0 ?
                    <section className='showcase'>
                            <div className='video-container'>
                                <video autoPlay muted pause src={caveman} type="video/mp4"></video>
                            </div>
                        <audio className="audio-element" loop playsinline>
                                <source src={cavemanAlert} type='audio/wav'></source>
                            </audio>
                            <div className='content'>
                                <div className='content-2'>
                                    <div className='start-button'>
                                        <button className='button-start' onClick={handleClick}>Return Home</button>
                                    </div>
                                </div>
                            </div>
                    </section>
                    :  
                    <section className='showcase'>
                        <div className='video-container'>
                            <video autoPlay muted loop src={caveman} type="video/mp4"></video>
                        </div>
                        <audio className="audio-element" loop playsinline>
                            <source src={cavemanAlert} type='audio/wav'></source>
                        </audio>
                        <div className='content'>
                            <div className='content-2' onClick={handleClick}>
                                <h2 >{props.minutes} {props.minutes2} : {props.seconds} {props.seconds2}</h2>
                                {/* <h2 >{props.minutes} {props.minutes2} : {props.seconds > 10 ? props.seconds : `0 ${props.seconds}`}</h2> */}
                            </div>
                        </div>
                    </section>
                    } 
            </main>
        );
    } else if (props.knightAnimation) {
        return (
            <main>
                {props.minutes === 0 && props.minutes2 === 0 && props.seconds === 0 && props.seconds2 === 0 ?
                    <section className='showcase'>
                        <div className='video-container'>
                            <video autoPlay muted pause src={knight} type="video/mp4"></video>
                        </div>
                        <audio className="audio-element" loop playsinline>
                            <source src={knightAlert} type='audio/wav'></source>
                        </audio>
                        <div className='content'>
                            <div className='content-2'>
                                <div className='start-button'>
                                    <button className='button-start' onClick={handleClick}>Return Home</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    :
                    <section className='showcase'>
                        <div className='video-container'>
                            <video autoPlay muted loop src={knight} type="video/mp4"></video>
                        </div>
                        <audio className="audio-element" loop>
                            <source src={knightAlert} type='audio/wav'></source>
                        </audio>
                        <div className='content'>
                            <div className='content-2' onClick={handleClick}>
                                <h2 >{props.minutes} {props.minutes2} : {props.seconds} {props.seconds2}</h2>
                            </div>
                        </div>
                    </section>
                }
            </main>
        );
    } 
}

export default CountDown
