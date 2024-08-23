// Gameboard.js
class Gameboard {
  constructor() {
    this.grid = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
    this.missedShots = [];
    this.attackedPositions = new Set();
    this.ships = [];
  }

  clearBoard() {
    this.grid = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
    this.missedShots = [];
    this.attackedPositions.clear();
    this.ships = [];
  }

  placeShip(ship, startPosition, direction) {
    const [x, y] = startPosition;

    if (direction === "horizontal") {
      if (y + ship.length > 10) return false;
      for (let i = 0; i < ship.length; i++) {
        if (this.grid[x][y + i] !== null) return false;
      }
      for (let i = 0; i < ship.length; i++) {
        this.grid[x][y + i] = ship;
      }
    } else if (direction === "vertical") {
      if (x + ship.length > 10) return false;
      for (let i = 0; i < ship.length; i++) {
        if (this.grid[x + i][y] !== null) return false;
      }
      for (let i = 0; i < ship.length; i++) {
        this.grid[x + i][y] = ship;
      }
    }

    this.ships.push(ship);
    return true;
  }

  receiveAttack(coordinates) {
    const [x, y] = coordinates;
    const key = `${x},${y}`;

    if (this.attackedPositions.has(key)) {
      return;
    }

    this.attackedPositions.add(key);
    if (this.grid[x][y] !== null) {
      this.grid[x][y].hit();
    } else {
      this.missedShots.push(coordinates);
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}

export { Gameboard };
