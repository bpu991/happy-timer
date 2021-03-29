import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

import gameboy from '../media/gameboy.mp4';
import skeleton from '../media/skeleton.mp4';
import caveman from '../media/caveman.mp4';
import knight from '../media/knight.mp4';
import '../css/countdown.css';

const borderStyle = {
    transform: 'rotate(180deg)',
    opacity: '0.5'
};

const CountDown = (props) => {
    const history = useHistory();

    const handleClick = () => {
        window.location.reload(true);
    }

    if (props.gameboyAnimation) {
        return (
            <main>
                <section className='showcase'>

                    <div className='video-container'>
                        <video autoPlay muted loop src={gameboy} type="video/mp4"></video>
                    </div>
                    <div className='content'>
                        <div className='content-1'>
        
                        </div>
                        <div className='content-2' onClick={handleClick}>
                            <h2>{props.minutes} {props.minutes2} : {props.seconds} {props.seconds2}</h2>
                        </div>
                        <div className='content-3'>

                        </div>

                    </div>
                </section>
            </main>
        );
    } else if (props.skeletonAnimation) {
        return (
            <main>
                <section className='showcase'>

                    <div className='video-container'>
                        <video autoPlay muted loop src={skeleton} type="video/mp4"></video>
                    </div>
                    <div className='content'>
                        <div className='content-1'>
                           
                        </div>
                        <div className='content-2' onClick={handleClick}>
                            <h2>{props.minutes} {props.minutes2} : {props.seconds} {props.seconds2}</h2>
                        </div>
                        <div className='content-3'>

                        </div>

                    </div>
                </section>
            </main>
        );
    } else if (props.cavemanAnimation) {
        return (
            <main>
                <section className='showcase'>

                    <div className='video-container'>
                        <video autoPlay muted loop src={caveman} type="video/mp4"></video>
                    </div>
                    <div className='content'>
                        <div className='content-1'>
                           
                        </div>
                        <div className='content-2' onClick={handleClick}>
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
    } else if (props.knightAnimation) {
        return (
            <main>
                <section className='showcase'>

                    <div className='video-container'>
                        <video autoPlay muted loop src={knight} type="video/mp4"></video>
                    </div>
                    <div className='content'>
                        <div className='content-1'>
                         
                        </div>
                        <div className='content-2' onClick={handleClick}>
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
