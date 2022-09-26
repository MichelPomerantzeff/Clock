import React, { useState } from 'react';
import "../css/Alarm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh as alarmIcon} from '@fortawesome/free-solid-svg-icons'

const alarm = <FontAwesomeIcon icon={alarmIcon} />

function Alarm(props) {

    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    const [hour, setHour] = useState(0)



    return (
        <div className='alarm-container'>
            <div className='icon'>
                {alarm}
            </div>
            <div className='alarm'>
                <span>{("0" + (hour)).slice(-2)}:</span>
                <span>{("0" + (min)).slice(-2)}:</span>
                <span>{("0" + (sec)).slice(-2)}</span>
            </div>
        </div>
    );
}

export default Alarm;