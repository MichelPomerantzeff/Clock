import React from 'react';
import "../css/Main.css";
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from 'react';

function Main(props) {

    const navigate = useNavigate()

    useEffect(() => {
        navigate('/clock')
    }, [])

    return (
        <div className='main-container'>

                    <i className="fa fa-trash" />
            <h1>Clock App </h1>

            <div className='links'>
                <Link to="/clock">
                    Clock
                </Link>

                <Link to="/clock/alarm">
                    Alarm
                </Link>
                <Link to="/clock/stopwatch">
                    Stopwatch
                </Link>

                <Link to="/clock/countdown">
                    Countdown
                </Link>
            </div>

        </div>
    );
}

export default Main;