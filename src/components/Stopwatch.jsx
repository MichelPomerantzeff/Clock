import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'

const stopwatch = <FontAwesomeIcon icon={faStopwatch} />

function Stopwatch(props) {

    const [time, setTime] = useState(0)
    const [timerOn, setTimerOn] = useState(false)


    useEffect(() => {
        let interval = null

        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [timerOn])


    return (
        <div className='stopwatch-container'>
            <div className='icon'>
                {stopwatch}
            </div>
            <div className='stopwatch'>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>

            <div className='main_buttons_container'>

                {!timerOn && time === 0 && <button className='start' onClick={() => setTimerOn(true)}>Start</button>}

                {timerOn && <button className='stop' onClick={() => setTimerOn(false)}>Stop</button>}

                {!timerOn && time !== 0 && <button className='resume' onClick={() => setTimerOn(true)}>Resume</button>}

                {!timerOn && time > 0 && <button className='reset' onClick={() => setTime(0)}>Reset</button>}

            </div>

        </div>
    );
}

export default Stopwatch;