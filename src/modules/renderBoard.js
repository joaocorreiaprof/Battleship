function renderGameboard(gameboard, boardElement) {
  // Clear the board element
  boardElement.innerHTML = "";

  // Create a 10x10 grid representing the gameboard
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.dataset.x = i;
      cell.dataset.y = j;

      // Render ships, hits, and misses
      if (gameboard.grid[i][j] !== null) {
        cell.classList.add("ship"); // Mark ship cells
      }

      if (
        gameboard.missedShots.some((miss) => miss[0] === i && miss[1] === j)
      ) {
        cell.classList.add("miss"); // Mark missed shots
      }

      if (gameboard.grid[i][j] && gameboard.grid[i][j].hits > 0) {
        cell.classList.add("hit"); // Mark hit cells
      }

      boardElement.appendChild(cell);
    }
  }
}

export { renderGameboard };
