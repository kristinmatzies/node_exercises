const fibonacci = require("./fibonacci_functions");

test("it should return fibonacci number", () => {
  let actualResult = fibonacci(10);

  let expectedResult = 55;

  expect(actualResult).toEqual(expectedResult);
});

test("it should handle non-numbers", () => {
  let actualResult = fibonacci([1, 2, 3]);

  let expectedResult = [1, 2, 3];

  expect(actualResult).toEqual(expectedResult);
});

test("it should handle no argument", () => {
  let actualResult = fibonacci();

  let expectedResult = undefined;

  expect(actualResult).toEqual(expectedResult);
});

test("it should handle objects", () => {
  let actualResult = fibonacci({ name: "paul" });

  let expectedResult = { name: "paul" };

  expect(actualResult).toEqual(expectedResult);
});
