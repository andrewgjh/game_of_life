import "./life_grid.css";
import gameFunctions from "../../gameOfLife";
import { useEffect, useState } from "react";

const LifeGrid = ({ width, height, generations, inhabitants }) => {
  const { resetGrid, nextGen, sleep } = gameFunctions;

  let [gameGrid, setGameGrid] = useState(resetGrid(height, width));

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
    setGameGrid(resetGrid(height, width));
  }, [height, width, resetGrid]);

  return (
    <div className="grid-container">
      <button onClick={runNextGen}>Next Gen</button>
      <button
        onClick={() => {
          runSim(generations);
        }}
      >
        Run Sim
      </button>
      {gameGrid.map((row, idx) => (
        <div key={`row-${idx}`} className="row-container">
          {row.map((cellLife, index) => (
            <div className="gol-cell" key={`column-${index}`}>
              <span className="cell-life">
                {cellLife ? `${inhabitants}` : ""}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LifeGrid;
