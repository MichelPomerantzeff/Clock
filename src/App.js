import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./css/App.css";
import "./css/responsiveness/Ipad.css";
import "./css/responsiveness/Smartphone.css";

import Main from "./Main";
import Clock from "./components/Clock";
import Countdown from "./components/Countdown";
import Stopwatch from "./components/Stopwatch";
import Alarm from "./components/Alarm";

function App() {

  return (

    <div className="App">
        <Router >

          <Main/>

          <Routes>
            <Route path="/clock" element={<Clock />} />
          </Routes>

          <Routes>
            <Route path="/clock/alarm" element={<Alarm />} />
          </Routes>

          <Routes>
            <Route path="/clock/stopwatch" element={<Stopwatch />} />
          </Routes>

          <Routes>
            <Route path="/clock/countdown" element={<Countdown />} />
          </Routes>

        </Router>
    </div>



  )
}

export default App;