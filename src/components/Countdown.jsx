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

    // const [time, setTime] = useState({
    //     sec: 0,
    //     min: 0,
    //     hour: 0
    // })

    const [timerOn, setTimerOn] = useState(false)



    useEffect(() => {
        let interval = null

        if (timerOn) {
            interval = setInterval(() => {
                setSec(prevSec => prevSec < 1 ? 59 : prevSec - 1)

                setMin(prevMin => prevMin < 1 ? 59 : ((prevMin * 60) - 1) / 60)

                setHour(prevHour => prevHour > 0 && ((prevHour * 60 * 60) - 1) / 60 / 60)

                console.log(sec, min, hour)
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
                    <button className='arrow-buttons' onClick={() => setHour(prevHour => prevHour < 23 ? prevHour + 1 : 0)}>{up}</button>
                    <span>{("0" + Math.ceil(hour)).slice(-2)}</span>
                    <button className='arrow-buttons' onClick={() => setHour(prevHour => prevHour > 0 ? prevHour - 1 : 23)}>{down}</button>
                </div>

                <span className='colon'>:</span>

                <div className='min'>
                    <button className='arrow-buttons' onClick={() => setMin(prevMin => prevMin < 59 ? prevMin + 1 : 0)}>{up}</button>
                    <span>{("0" + Math.ceil(min)).slice(-2)}</span>
                    <button className='arrow-buttons' onClick={() => setMin(prevMin => prevMin > 0 ? prevMin - 1 : 59)}>{down}</button>
                </div>

                <span className='colon'>:</span>

                <div className='sec'>
                    <button className='arrow-buttons' onClick={() => setSec(prevSec => prevSec < 59 ? prevSec + 1 : 0)}>{up}</button>
                    <span>{("0" + (sec)).slice(-2)}</span>
                    <button className='arrow-buttons' onClick={() => setSec(prevSec => prevSec > 0 ? prevSec - 1 : 59)}>{down}</button>
                </div>

            </div>

            <div className='countdown-buttons'>

                {!timerOn && sec + min + hour === 0 && <button className='start' onClick={() => setTimerOn(true)}>Start</button>}
                {!timerOn && sec + min + hour === 0 && <button className='set'>Set Time</button>}
                {timerOn && <button className='stop' onClick={() => setTimerOn(false)}>Stop</button>}
                {!timerOn && sec + min + hour > 0 && <button className='resume'>Resume</button>}
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