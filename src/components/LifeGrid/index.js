import "./life_grid.css";

const LifeGrid = ({ width, height }) => {
  function createGrid(x, y) {
    const grid = [];
    for (let idx = 0; idx < x; idx++) {
      grid.push([]);
    }
    for (let i = 0; i < grid.length; i++) {
      for (let index = 0; index < y; index++) {
        grid[i].push("X");
      }
    }
    return grid;
  }
  const newGrid = createGrid(height, width);
  return (
    <div>
      {newGrid.map((row, idx) => (
        <div key={`row-${idx}`}>
          {row.map((column, index) => (
            <span class="gol-cell" key={`column-${index}`}>
          0
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LifeGrid;
