import { Gameboard } from "./gameboard";

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard();
  }

  placeShip(ship, startPosition, direction) {
    this.gameboard.placeShip(ship, startPosition, direction);
  }

  receiveAttack(coordinates) {
    this.gameboard.receiveAttack(coordinates);
  }

  allShipsSunk() {
    return this.gameboard.allShipsSunk();
  }
}

export { Player };
