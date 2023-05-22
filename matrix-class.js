class Matrix {
  #matrix

  constructor(grid) {
    this.#matrix = grid;
  };

  #cycler() {
    const temp = this.#matrix.pop();
    this.#matrix.unshift(temp);
  }

  animate() {
    this.#cycler();
    console.log(this.#matrix);
  }
}

const grid = [
  [1, 'a', 'x'],
  [2, 'b', 'y'],
  [3, 'c', 'z']
];

const p = new Matrix(grid);
p.