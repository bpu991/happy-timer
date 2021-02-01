import React, { Component } from 'react';
import './css/countdown.css';
import gameboy1 from './gameboy1.mp4';
const CountDown = (props) => {
    return(
        // <div className='video-container'>
        //     <video autoPlay muted loop src={gameboy1} type="video/mp4"></video>
        // </div>
        // <h2>{props.minutes}{props.minutes2}:{props.seconds}{props.seconds2}</h2>
        <main>
            <section className='showcase'>

                <div className='video-container'>
                    <video autoPlay muted loop src={gameboy1} type="video/mp4"></video>
                </div>
                <div className='content'>
                    <h2>{props.minutes}{props.minutes2}:{props.seconds}{props.seconds2}</h2>
                </div>
            </section>
        </main>
  );
}

export default CountDown
