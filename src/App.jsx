import './css/App.css'
import './css/style.css'
import Clock from "./components/clock/Clock";
import Countdown from "./components/Countdown";
import Stopwatch from "./components/Stopwatch";
// import Alarm from "./components/Alarm";
import { useState } from "react";

function App(props) {

    const [isClockSelected, setIsClockSelected] = useState(false)
    const [isStopwatchSelected, setIsStopwatchSelected] = useState(false)
    const [isCountdownSelected, setIsCountdownSelected] = useState(false)

    const handleFunctionSelected = (func) => {
        switch (func) {
            case 'clock':
                setIsClockSelected(true)
                setIsStopwatchSelected(false)
                setIsCountdownSelected(false)
                break;
            case 'stopwatch':
                setIsClockSelected(false)
                setIsStopwatchSelected(true)
                setIsCountdownSelected(false)
                break;
            case 'countdown':
                setIsClockSelected(false)
                setIsStopwatchSelected(false)
                setIsCountdownSelected(true)
                break;
            default:
                setIsClockSelected(false)
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

                        <div className="function">
                            <Clock />
                        </div>

                        {/* <div className="function">
                            <Stopwatch />
                        </div>

                        <div className="function">
                            <Countdown />
                        </div> */}

                        {/* <div className="function">
                            <Alarm />
                        </div> */}

                    </div>
                </div>

                <footer>&copy; 2022 by Michel Pomerantzeff</footer>
            </div>

        </main>
    );
}

export default App;