class Gameboard {
  constructor() {
    this.grid = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
  }
  placeShip(ship, startPosition, direction) {
    const [x, y] = startPosition;
    if (direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        this.grid[x][y + i] = ship;
      }
    }
    if (direction === "vertical") {
      for (let i = 0; i < ship.length; i++) {
        this.grid[x + i][y] = ship;
      }
    }
  }

  receiveAttack(coordinates) {}
}
export { Gameboard };
