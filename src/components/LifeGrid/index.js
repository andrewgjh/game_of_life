import "./life_grid.css";
import gameFunctions from "../../gameOfLife";
import { useEffect, useState } from "react";

const LifeGrid = ({ width, height, generations }) => {
  const { createGrid, populateGrid, randomlifeMap, nextGen, sleep } =
    gameFunctions;

  let [gameGrid, setGameGrid] = useState(
    populateGrid(createGrid(height, width), randomlifeMap(height * width))
  );

  const runNextGen = () => {
    setGameGrid(prevGrid => nextGen(prevGrid));
  };

  const runSim = async numGens => {
    for (let index = 0; index < numGens; index++) {
      runNextGen();
      await sleep(100);
    }
  };

  useEffect(() => {
    setGameGrid(
      populateGrid(createGrid(height, width), randomlifeMap(height * width))
    );
  }, [height, width]);

  return (
    <div className="grid-container">
      {gameGrid.map((row, idx) => (
        <div key={`row-${idx}`} className="row-container">
          {row.map((cellLife, index) => (
            <div className="gol-cell" key={`column-${index}`}>
              <span className="cell-life">{cellLife ? "👽" : ""}</span>
            </div>
          ))}
        </div>
      ))}
      <button onClick={runNextGen}>Next Gen</button>
      <button
        onClick={() => {
          runSim(generations);
        }}
      >
        Run Sim
      </button>
    </div>
  );
};

export default LifeGrid;
