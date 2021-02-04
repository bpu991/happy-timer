import React, { Component } from 'react';
import '../css/countdownbasic.css';

const CountDownBasic = (props) => {
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

export default CountDownBasic
