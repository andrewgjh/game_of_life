import "./life_grid.css";
import gameFunctions from "../../gameOfLife";
import { useEffect, useState } from "react";

const LifeGrid = ({ width, height, inhabitants }) => {
  const { resetGrid, nextGen, sleep, gridStringify, populateGrid, createGrid } =
    gameFunctions;

  let [gameGrid, setGameGrid] = useState(resetGrid(height, width));
  const [counter, setCounter] = useState(0);
  const [infiniteRun, setInfiniteRun] = useState(false);

  const runNextGen = () => {
    setGameGrid(prevGrid => nextGen(prevGrid));
    setCounter(prev => prev + 1);
  };

  const toggleCell = idStr => {
    const [x, y] = idStr
      .split("-")
      .splice(2, 2)
      .map(el => parseInt(el));

    setGameGrid(prevGrid => {
      let strGrid = gridStringify(prevGrid);
      const flatArr = strGrid.split("");
      flatArr[x * prevGrid[0].length + y] = prevGrid[x][y] ? "." : "*";
      return populateGrid(
        createGrid(prevGrid.length, prevGrid[0].length),
        flatArr.join("")
      );
    });
  };

  useEffect(() => {
    let interval;
    if (infiniteRun) {
      interval = setInterval(() => {
        runNextGen();
      }, 100);
    }
    return () => clearInterval(interval);
  }, [infiniteRun]);

  useEffect(() => {
    setGameGrid(resetGrid(height, width));
  }, [height, width, resetGrid]);

  return (
    <div className="grid-container">
      <button
        onClick={() => {
          setInfiniteRun(!infiniteRun);
        }}
      >
        Start/Stop
      </button>
      <p>{counter}</p>
      {gameGrid.map((row, idx) => (
        <div key={`row-${idx}`} className="row-container">
          {row.map((cellLife, index) => (
            <div className="gol-cell" key={`column-${index}`}>
              <span
                className="cell-life"
                id={`gol-cell-${idx}-${index}`}
                onClick={e => toggleCell(e.target.id)}
              >
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
