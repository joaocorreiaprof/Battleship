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

    // Debug: Print the grid to verify ship placement
    console.log("Grid after placing ship:", this.grid);
  }

  receiveAttack(coordinates) {
    const [x, y] = coordinates;
    const key = `${x},${y}`;

    if (this.attackedPositions.has(key)) {
      console.log("This position has already been attacked!");
      return;
    }

    this.attackedPositions.add(key);
    console.log("Attacked Position " + this.attackedPositions);
    console.log("Ship at position:", this.grid([x][y])); //REASON WHY IS NOT WOKRING
    console.log("Grid after placing ship:", this.grid); // this also doesnt work now. only in the first time page loads
    if (this.grid[x][y] !== null) {
      console.log("i need to come here");
      this.grid[x][y].hit(); // not working i think

      if (this.grid[x][y].isSunk()) {
        console.log(`${this.grid[x][y].name} has been sunk!`);
      }
    } else {
      this.missedShots.push(coordinates);
      console.log("Missed Shots Array: " + this.missedShots);
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}

export { Gameboard };
