import "./App.css";
import { useState } from "react";
import VariablesForm from "./components/VariablesForm";

import LifeGrid from "./components/LifeGrid";

function App() {
  const runGameOfLife = e => {
    e.preventDefault();
  };
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(5);
  const [generations, setGenerations] = useState(20);
  const [inhabitants, setInhabitants] = useState("🙂");

  return (
    <div className="App">
      <h1>
        Conway's Game of{" "}
        {inhabitants === "💃" || inhabitants === "🕺" ? "Dance" : "Life"}
      </h1>
      <VariablesForm
        runSim={runGameOfLife}
        width={width}
        height={height}
        setWidth={setWidth}
        setHeight={setHeight}
        generations={generations}
        setGenerations={setGenerations}
        inhabitants={inhabitants}
        setInhabitants={setInhabitants}
      />
      <LifeGrid
        width={width}
        height={height}
        generations={generations}
        inhabitants={inhabitants}
      />
    </div>
  );
}

export default App;
