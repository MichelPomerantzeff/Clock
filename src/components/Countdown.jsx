import { useEffect, useState } from 'react';
import "../css/Countdown.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const hourglass = <FontAwesomeIcon icon={faHourglassHalf} />
const up = <FontAwesomeIcon icon={faCaretUp} />
const down = <FontAwesomeIcon icon={faCaretDown} />

function Countdown(props) {

    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    const [hour, setHour] = useState(0)

    const [isVisible, setIsVisible] = useState(true)

    const [timerOn, setTimerOn] = useState(false)

    useEffect(() => {
        sec + min + hour === 0 && setTimerOn(prev => false)
    }, [sec])


    useEffect(() => {
        if (min === 59 && timerOn) {
            setHour(prevHour => prevHour < 1 ? 23 : prevHour - 1)
        }
    }, [min])

    useEffect(() => {
        if (sec === 59 && timerOn) {
            setMin(prevMin => prevMin < 1 ? 59 : prevMin - 1)
        }
    }, [sec])

    useEffect(() => {
        let interval = null

        if (timerOn) {
            interval = setInterval(() => {

                setSec(prevSec => prevSec < 1 ? 59 : prevSec - 1)

            }, 1000)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [timerOn])


    return (
        <div className='countdown-container'>
            <div className='icon'>
                {hourglass}
            </div>
            <div className='countdown'>
                <div className='hour'>
                    { isVisible && !timerOn &&
                        <button className='arrow-buttons' onClick={() => setHour(prevHour => prevHour < 23 ? prevHour + 1 : 0)}>{up}</button>}
                    <span>{("0" + Math.ceil(hour)).slice(-2)}</span>
                    { isVisible && !timerOn &&
                        <button className='arrow-buttons' onClick={() => setHour(prevHour => prevHour > 0 ? prevHour - 1 : 23)}>{down}</button>}
                </div>

                <span className='colon'>:</span>

                <div className='min'>
                    { isVisible && !timerOn &&
                        <button className='arrow-buttons' onClick={() => setMin(prevMin => prevMin < 59 ? prevMin + 1 : 0)}>{up}</button>}
                    <span>{("0" + Math.ceil(min)).slice(-2)}</span>
                    { isVisible && !timerOn &&
                        <button className='arrow-buttons' onClick={() => setMin(prevMin => prevMin > 0 ? prevMin - 1 : 59)}>{down}</button>}
                </div>

                <span className='colon'>:</span>

                <div className='sec'>
                    { isVisible && !timerOn &&
                        <button className='arrow-buttons' onClick={() => setSec(prevSec => prevSec < 59 ? prevSec + 1 : 0)}>{up}</button>}
                    <span>{("0" + (sec)).slice(-2)}</span>
                    { isVisible && !timerOn &&
                        <button className='arrow-buttons' onClick={() => setSec(prevSec => prevSec > 0 ? prevSec - 1 : 59)}>{down}</button>}
                </div>

            </div>

            <div className='countdown-buttons'>

                {!timerOn && <button  className='start' onClick={() => setTimerOn(true)}>Start</button>}
                {/* {!timerOn && sec + min + hour > 0 && <button onClick={() => setTimerOn(true)} className='resume'>Resume</button>} */}
                {timerOn && <button className='stop' onClick={() => setTimerOn(false)}>Stop</button>}
                {/* {!timerOn && sec + min + hour === 0 && <button onClick={() => setIsVisible(true)} className='set'>Set Time</button>} */}
                {!timerOn && sec + min + hour > 0 && <button className='reset' onClick={() => {
                    setHour(0)
                    setMin(0)
                    setSec(0)
                }}>Reset</button>}

            </div>

        </div>
    );
}

export default Countdown;