import React from 'react';
import './App.css';
import World from "./components/World"
import LineChart from "./components/LineChart"

function App() {
  return (
    <div className="App">
        <World name="World!"/>
        <LineChart />
    </div>
  );
}

export default App;