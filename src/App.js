import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import Main from "./components/Main";
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
            <Route path="/" element={<Clock />} />
          </Routes>

          <Routes>
            <Route path="/alarm" element={<Alarm />} />
          </Routes>

          <Routes>
            <Route path="/stopwatch" element={<Stopwatch />} />
          </Routes>

          <Routes>
            <Route path="/countdown" element={<Countdown />} />
          </Routes>

        </Router>
    </div>



  )
}

export default App;