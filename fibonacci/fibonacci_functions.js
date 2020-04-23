module.exports = function fibonacci(n) {
  if (typeof n !== "number") {
    return n;
  }
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};
