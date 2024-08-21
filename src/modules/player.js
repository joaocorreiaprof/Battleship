//import { Gameboard } from "./gameboard";

class Player {
  constructor(name, board) {
    this.name = name;
    this.gameboard = board;
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
