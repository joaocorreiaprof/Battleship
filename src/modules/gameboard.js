class Gameboard {
  constructor() {
    this.grid = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
    this.missedShots = [];
    this.attackedPositions = new Set();
    this.ships = [];
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

    this.ships.push(ship);
  }

  receiveAttack(coordinates) {
    const [x, y] = coordinates;
    const key = `${x},${y}`;

    if (this.attackedPositions.has(key)) {
      console.log("This position has already been attacked!");
      return;
    }

    this.attackedPositions.add(key);

    if (this.grid[x][y] !== null) {
      this.grid[x][y].hit(coordinates);

      if (this.grid[x][y].isSunk()) {
        console.log(`${this.grid[x][y].name} has been sunk!`);
      }
    } else {
      this.missedShots.push(coordinates);
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}

export { Gameboard };
