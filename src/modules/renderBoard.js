function renderGameboard(gameboard, boardElement) {
  boardElement.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.dataset.x = i; // Ensure correct data attributes
      cell.dataset.y = j;
      const keys = `${i},${j}`;

      if (gameboard.grid[i][j] !== null) {
        cell.classList.add("ship");
      }

      if (
        gameboard.missedShots.some((miss) => miss[0] === i && miss[1] === j)
      ) {
        cell.classList.add("miss");
      }

      if (
        gameboard.grid[i][j] &&
        gameboard.grid[i][j].hits > 0 &&
        gameboard.attackedPositions.has(keys)
      ) {
        cell.classList.add("hit");
      }

      boardElement.appendChild(cell);
    }
  }
}
export { renderGameboard };
