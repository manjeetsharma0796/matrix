const advance = (list) => {
  let temp = list.pop();
  list.unshift(temp);

  return list;
};

const impede = (list) => {
  let temp = list.shift();
  list.push(temp);

  return list;
}

const matrix = () => {
  let space = new Array(9).fill(' ');
  let space1 = new Array(9).fill(' ');
  // const grid = new Array(2).fill().map(() => new Array(2).fill(1));

  space[0] = 'せ';
  space[1] = 'ぁ';
  space[2] = 'ぉ';

  space1[6] = 'せ';
  space1[7] = 'ぁ';
  space1[8] = 'ぉ';
  // grid[0][1] = 'm';
  // console.log(grid.join('\n'));
  // grid.forEach((line) => {
  //   console.log(line[0])
  // })

  setInterval(() => {
    console.clear();
    console.log('\033[38;5;82m' + [space.join('\n'),space1.join('')]);

    space = advance(space);
    space1 = impede(space1);

  }, 300);
};

matrix();