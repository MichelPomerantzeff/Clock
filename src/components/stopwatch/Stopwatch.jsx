import './Stopwatch.css'
import { useEffect, useState } from 'react';
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
            <div className='time text-smoke stopwatch'>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>

            <div className='action-buttons-wrapper'>
                {!timerOn && time === 0 && <button className='action-btn start' onClick={() => setTimerOn(true)}>Start</button>}
                {timerOn && <button className='action-btn stop' onClick={() => setTimerOn(false)}>Stop</button>}
                {!timerOn && time !== 0 && <button className='action-btn resume' onClick={() => setTimerOn(true)}>Resume</button>}
                {!timerOn && time > 0 && <button className='action-btn reset' onClick={() => setTime(0)}>Reset</button>}
            </div>

        </div>
    );
}

export default Stopwatch;