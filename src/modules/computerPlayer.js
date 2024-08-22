import { Player } from "./player";

class ComputerPlayer extends Player {
  constructor(name, gameboard) {
    super(name, gameboard);
  }

  makeMove() {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (this.gameboard.attackedPositions.has(`${x},${y}`));
    return [x, y];
  }
}

export { ComputerPlayer };
