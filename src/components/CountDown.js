import React, { Component } from 'react';
import '../css/countdown.css';
import gameboy from '../media/gameboy.mp4';
import arrow from '../media/arrow.png';
const borderStyle = {
    transform: 'rotate(180deg)',
    opacity: '0.5'
};
const CountDown = (props) => {
    return(
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
}

export default CountDown
