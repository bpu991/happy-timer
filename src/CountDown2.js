import React, { Component } from 'react';
import './css/countdown.css';
import skeleton from './skeleton.mp4';
const CountDown2 = (props) => {
    return(
        <main>
            <section className='showcase'>

                <div className='video-container'>
                    <video autoPlay muted loop src={skeleton} type="video/mp4"></video>
                </div>
                <div className='content'>
                    <div className='content-1'>

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

export default CountDown2
