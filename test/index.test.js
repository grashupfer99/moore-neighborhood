const matrix1 = require('../index').matrix1;
const matrix2 = require('../index').matrix2;
const matrix3 = require('../index').matrix3;
const countNeighbours = require('../index').countNeighbours;
const getNeighbours = require('../index').getNeighbours;
const expect = require("chai").expect;

describe("getNeighbours", () => {

  it("should be a function", () => {
    expect(getNeighbours).to.be.a("function");
  })

  it("should return an array", () => {
    expect(getNeighbours(matrix1[5], 0)).to.be.an.instanceof(Array);
  })

});

describe("countNeighbours", () => {

  it("should be a function", () => {
    expect(countNeighbours).to.be.a("function");
  })

  it("should return a number", () => {
    expect(countNeighbours(matrix1, 0, 0)).to.be.a('number');
  })

  it("should return 3 for matrix-1 coords: 1, 2", () => {
    expect(countNeighbours(matrix1, 1, 2)).to.equal(3);
  })

  it("should return 1 for matrix-1 coords: 0, 0", () => {
    expect(countNeighbours(matrix1, 0, 0)).to.equal(1);
  })

  it("should return 3 for matrix-2 coords: 0, 2", () => {
    expect(countNeighbours(matrix2, 0, 2)).to.equal(3);
  })

  it("should return 0 for matrix-3 coords: 1, 1", () => {
    expect(countNeighbours(matrix3, 1, 1)).to.equal(0);
  })

});
