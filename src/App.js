import "./App.css";
import { useState } from "react";
import VariablesForm from "./components/VariablesForm";

import LifeGrid from "./components/LifeGrid";

function App() {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [inhabitants, setInhabitants] = useState("🙂");

  return (
    <div className="App">
      <h1 className="header">
        Conway's Game of{" "}
        {inhabitants === "💃" || inhabitants === "🕺" ? "Dance" : "Life"}
      </h1>
      <VariablesForm
        width={width}
        height={height}
        setWidth={setWidth}
        setHeight={setHeight}
        inhabitants={inhabitants}
        setInhabitants={setInhabitants}
      />
      <LifeGrid
        width={width}
        height={height}
    
        inhabitants={inhabitants}
      />
    </div>
  );
}

export default App;
