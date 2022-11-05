import React, { useEffect, useState } from 'react';
import '../css/AlarmGoingOff.css'

import alarm from '../alarm/alarm-sound.mp3'
import alarmImage from '../images/bell.png'
import { useRef } from 'react';

function AlarmGoingOff(props) {

    const alarmElem = useRef()

    function playAudio() {
        alarmElem.current.play()
        alarmElem.current.loop = true
    }

    useEffect(() => {
        playAudio()
    }, [])


    return (
        <div className='alarm_going_off_container'>

            <div className="alarm_goin_off_wrapper">

                <audio src={alarm} ref={alarmElem} />

                <img src={alarmImage} alt="" />

                <button
                    className="silence_button"
                    onClick={() => props.pauseAudio(alarmImage)}
                >
                    Silence
                </button>

            </div>

        </div>
    );
}

export default AlarmGoingOff;