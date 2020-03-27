In cellular automata,  [the Moore neighborhood](http://en.wikipedia.org/wiki/Moore_neighborhood)  comprises the eight cells surrounding a central cell on a two-dimensional square lattice. The neighborhood is named after Edward F. Moore, a pioneer of cellular automata theory. Many board games are played with a rectangular grid with squares as cells. For some games, it is important to know about the conditions of neighbouring cells for chip (figure, draught etc) placement and strategy.

You are given a state for a rectangular board game grid with chips in a binary matrix, where 1 is a cell with a chip and 0 is an empty cell. You are also given the coordinates for a cell in the form of row and column numbers (starting from 0). You should determine how many chips are close to this cell. Every cell interacts with its eight neighbours; those cells that are horizontally, vertically, or diagonally adjacent.

![enter image description here](https://js-static.checkio.org/media/task/media/11bf8294b5ea4a1a9c5f1663d05986ef/example.svg)


For the given examples (see the schema) there is the same grid:

```javascript
[[1, 0, 0, 1, 0],
 [0, 1, 0, 0, 0],
 [0, 0, 1, 0, 1],
 [1, 0, 0, 0, 0],
 [0, 0, 1, 0, 0]]
```

For the first example coordinates of the cell is (1, 2) and as we can see from the schema this cell has 3 neighbour chips. For the second example coordinates is (0, 0) and this cell contains a chip, but we count only neighbours and the answer is 1.


**Input:** Three arguments. A grid as a tuple of tuples with integers (1/0), a row number and column number for a cell as integers.


**Output:** How many neighbouring cells have chips as an integer.

**Example:**

```javascript
countNeighbours([
  [1,  0,  0,  1,  0],
  [0,  1,  0,  0,  0],
  [0,  0,  1,  0,  1],
  [1,  0,  0,  0,  0],
  [0,  0,  1,  0,  0]],  1,  2)  ==  3

countNeighbours([
  [1,  0,  0,  1,  0],
  [0,  1,  0,  0,  0],
  [0,  0,  1,  0,  1],
  [1,  0,  0,  0,  0],
  [0,  0,  1,  0,  0]],  0,  0)  ==  1
```

