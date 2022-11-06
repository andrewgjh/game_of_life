import "./life_grid.css";
import gameFunctions from "../../gameOfLife";

const LifeGrid = ({ width, height }) => {
  const { createGrid } = gameFunctions;
  const newGrid = createGrid(height, width);
  return (
    <div className="grid-container">
      {newGrid.map((row, idx) => (
        <div key={`row-${idx}`} className="row-container">
          {row.map((column, index) => (
            <div className="gol-cell" key={`column-${index}`}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LifeGrid;
