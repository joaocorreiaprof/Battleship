import { Player } from "./player";

class ComputerPlayer extends Player {
  constructor(name) {
    super(name);
  }

  makeMove() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    this.receiveAttack([x, y]);
  }
}

export { ComputerPlayer };
