function createGrid(x = 5, y = 5) {
  const grid = [];
  for (let idx = 0; idx < x; idx++) {
    grid.push([]);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let index = 0; index < y; index++) {
      grid[i].push(0);
    }
  }
  return grid;
}

function populateGrid(grid, gridString) {
  if (grid.length < 0) return;
  const populatedGrid = createGrid(grid.length, grid[0].length);

  for (let index = 0; index < gridString.length; index++) {
    const element = gridString[index];
    const x = Math.floor(index / grid[0].length);
    const y = Math.floor(index % grid[0].length);
    if (element === "*") {
      populatedGrid[x][y] = 1;
    }
  }
  return populatedGrid;
}

function countNeighbours(i, j, arr) {
  let counter = 0;

  for (let x = i - 1; x <= i + 1; x++) {
    for (let y = j - 1; y <= j + 1; y++) {
      if ((i === x && j === y) || x < 0 || y < 0 || !arr[x][y]) {
        continue;
      }
      counter += arr[x][y];
    }
  }
  return counter;
}

function nextGen(arr) {
  if (arr.length < 1) return;
  const nextGenArr = createGrid(arr.length, arr[0].length);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      const aliveNeighbours = countNeighbours(i, j, arr);
      const currentState = arr[i][j];
      if (currentState === 1) {
        if (aliveNeighbours < 2 || aliveNeighbours > 3) {
          nextGenArr[i][j] = 0;
        } else if (aliveNeighbours === 2 || aliveNeighbours === 3) {
          nextGenArr[i][j] = 1;
        }
      } else {
        if (aliveNeighbours === 3) {
          nextGenArr[i][j] = 1;
        }
      }
    }
  }
  return nextGenArr;
}

function randomlifeMap(squares) {
  let mapString = "";
  for (let index = 0; index < squares; index++) {
    if (Math.round(Math.random())) {
      mapString += "*";
    } else {
      mapString += ".";
    }
  }
  return mapString;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function draw(grid) {
  const gridArr = grid.map(row => {
    const rowStr = row.map(el => {
      if (el) return "X";
      return " ";
    });
    return rowStr.join(" ");
  });
  console.log(gridArr.join("\n"));
}

async function gameOfLife(x, y, loopTimes) {
  let counter = 0;
  const grid = createGrid(x, y);
  const gridState = randomlifeMap(x * y);
  let startGrid = populateGrid(grid, gridState);

  // draw(startGrid);
  while (counter < loopTimes) {
    // console.clear();
    startGrid = nextGen(startGrid);
    // draw(startGrid);
    await sleep(100);
    counter++;
  }
}

const resetGrid = (height, width) =>
  populateGrid(
    createGrid(height || 5, width || 5),
    randomlifeMap(height * width || 25)
  );

const gameFunctions = {
  sleep,
  nextGen,
  resetGrid,
};

export default gameFunctions;
