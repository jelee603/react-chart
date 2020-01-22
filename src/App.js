import React from 'react';
import './App.css';
import World from "./components/World"
import LineChart from "./components/chartjs/LineChart"
import MixChart from "./components/echart/MixChart"

function App() {
  return (
    <div className="App">
        <World name="World!"/>
        <LineChart />
        <MixChart />
    </div>
  );
}

export default App;