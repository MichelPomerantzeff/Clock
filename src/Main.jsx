import "./css/Main.css";
import Clock from "./components/Clock";
import Countdown from "./components/Countdown";
import Stopwatch from "./components/Stopwatch";
import Alarm from "./components/Alarm";
import { useState } from "react";

function Main(props) {

    const [slide, setSlide] = useState(0)

    return (
        <div className='main_container'>

            <h1 className='header'>Clock App </h1>

            <div className='links'>
                <a onClick={() => setSlide(0)} className=''>Clock</a>
                <a onClick={() => setSlide(1)} className=''>Stopwatch</a>
                <a onClick={() => setSlide(2)} className=''>Countdown</a>

                {/* <a onClick={() => setSlide(3)} className=''>Alarm</a> */}

            </div>

            <div className="clock_functionalities_container">

                <div className="clock_functionalities_wrapper">

                    <div style={{ transform: `translateX(-${100 * slide}%)` }} className="clock_functionality">
                        <Clock />
                    </div>

                    <div style={{ transform: `translateX(-${100 * slide}%)` }} className="clock_functionality">
                        <Stopwatch />
                    </div>

                    <div style={{ transform: `translateX(-${100 * slide}%)` }} className="clock_functionality">
                        <Countdown />
                    </div>
                                        
                    {/* <div style={{ transform: `translateX(-${100 * slide}%)` }} className="clock_functionality">
                        <Alarm />
                    </div> */}

                </div>
            </div>

            <footer>&copy; 2022 by Michel Pomerantzeff</footer>

        </div>
    );
}

export default Main;