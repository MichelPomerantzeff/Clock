import './Clock.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const clock = <FontAwesomeIcon icon={faClock} />

function Clock(props) {

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    const date = new Date().toDateString()

    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000)

    return (
        <div className='clock-container'>
            <div className='icon'>
                {clock}
            </div>
            <p className='time text-smoke'>{time}</p>
            <p className='date text-smoke'>{date}</p>
        </div>
    );
}

export default Clock;