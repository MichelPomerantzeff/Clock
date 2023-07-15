import { useEffect } from 'react';
import './AlarmBeep.css'

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
        <div className='alarm-beep'>

            <div className="alarm-beep-wrapper">

                <audio src={alarm} ref={alarmElem} />

                <div className="alarm-beep-img">
                    <img src={alarmImage} alt="" />
                </div>

                <button
                    className="action-btn silence_button"
                    onClick={() => props.pauseAudio(alarmImage)}
                >
                    Silence
                </button>

            </div>

        </div>
    );
}

export default AlarmGoingOff;