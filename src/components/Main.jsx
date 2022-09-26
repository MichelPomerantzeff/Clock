import React from 'react';
import "../css/Main.css";
import { Link } from "react-router-dom"

function Main(props) {
    return (
        <div className='main-container'>

                    <i className="fa fa-trash" />
            <h1>Clock App </h1>

            <div className='links'>
                <Link to="/">
                    Clock
                </Link>

                <Link to="/alarm">
                    Alarm
                </Link>
                <Link to="/stopwatch">
                    Stopwatch
                </Link>

                <Link to="/countdown">
                    Countdown
                </Link>
            </div>

        </div>
    );
}

export default Main;