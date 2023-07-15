import './css/App.css'
import './css/style.css'
import Clock from "./components/clock/Clock";
import Stopwatch from "./components/stopwatch/Stopwatch";
import Countdown from "./components/countdown/Countdown";
// import Alarm from "./components/Alarm";
import { useState } from "react";

function App(props) {

    const [isClockSelected, setIsClockSelected] = useState(true)
    const [isStopwatchSelected, setIsStopwatchSelected] = useState(false)
    const [isCountdownSelected, setIsCountdownSelected] = useState(false)
    const [index, setIndex] = useState(0)

    const handleFunctionSelected = (func) => {
        switch (func) {
            case 'clock':
                setIsClockSelected(true)
                setIsStopwatchSelected(false)
                setIsCountdownSelected(false)
                setIndex(0)
                break;
            case 'stopwatch':
                setIsClockSelected(false)
                setIsStopwatchSelected(true)
                setIsCountdownSelected(false)
                setIndex(-100)
                break;
            case 'countdown':
                setIsClockSelected(false)
                setIsStopwatchSelected(false)
                setIsCountdownSelected(true)
                setIndex(-200)
                break;
            default:
                setIsClockSelected(true)
                setIsStopwatchSelected(false)
                setIsCountdownSelected(false)
        }
    }

    return (
        <main className='app'>

            <div className="app-wrapper">

                <h1 className='header'>Clock App </h1>

                <div className='functions-title'>
                    <div onClick={() => handleFunctionSelected('clock')} className={`function-title ${isClockSelected && 'selected'}`}>Clock</div>
                    <div onClick={() => handleFunctionSelected('stopwatch')} className={`function-title ${isStopwatchSelected && 'selected'}`}>Stopwatch</div>
                    <div onClick={() => handleFunctionSelected('countdown')} className={`function-title ${isCountdownSelected && 'selected'}`}>Countdown</div>

                    {/* <a onClick={() => setSlide(3)} className='function'>Alarm</a> */}

                </div>

                <div className="functions-container">

                    <div className="functions-wrapper">

                        <div style={{ transform: `translateX(${index}%)` }} className="function">
                            <Clock />
                        </div>

                        <div style={{ transform: `translateX(${index}%)` }} className="function">
                            <Stopwatch />
                        </div>

                        <div style={{ transform: `translateX(${index}%)` }} className="function">
                            <Countdown />
                        </div>

                        {/* <div className="function">
                            <Alarm />
                        </div> */}

                    </div>
                </div>

                <footer>&copy; 2022 Michel Pomerantzeff</footer>
            </div>

        </main>
    );
}

export default App;