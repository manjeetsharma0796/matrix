class Matrix {
  #matrix

  constructor(grid) {
    this.#matrix = grid;
  };

  #cycler() {
    const lastRow = this.#matrix.pop();
    this.#matrix.unshift(lastRow);
  }

  animate() {
    this.#cycler();
    return this.#matrix.map((element) => element.join('  ')).join('\n');
  }
}

const grid = [
  [1, 'a', 'x', 'ぁ'],
  [2, 'b', 'あ', 'y'],
  [3, 'c', 'z', 'ぃ'],
  [2, 'b', 'い', 'y'],
  [1, 'a', 'x', 'ぇ'],
  [2, 'b', 'ぉ', 'y'],
  [3, 'c', 'z', 'き']
];

const p = new Matrix(grid);

setInterval(() => {
  console.clear();
  console.log('\033[38;5;82m' + p.animate());
}, 300);