const matrix1 = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
];

const matrix2 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]

const matrix3 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]

function countNeighbours(data, row, col) {
  const up = getNeighbours(data[row - 1], col)
  const center = getNeighbours(data[row], col, true)
  const down = getNeighbours(data[row + 1], col)
  return [...center, ...up, ...down].reduce((val, acc) => val + acc, 0);
}

function getNeighbours(data, i, isCenter = false) {
  if (!data) return [];
  return [data[i - 1], isCenter ? 0 : data[i], data[i + 1]].filter(c => c !== undefined)
}

console.log('answer >>> ', countNeighbours(matrix2, 0, 2))

module.exports = {
  matrix1,
  matrix2,
  matrix3,
  countNeighbours,
  getNeighbours
}
