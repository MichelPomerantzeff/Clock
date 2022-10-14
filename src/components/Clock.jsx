import React, { useState } from 'react';
import "../css/Clock.css";

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
            <p className='date'>{date}</p>
            <p className='time'>{time}</p>
        </div>
    );
}

export default Clock;