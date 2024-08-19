class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit(coordinates) {
    if (this.hits < this.length) {
      this.hits += 1;
    }
    console.log(coordinates + " target hit");
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

export { Ship };
