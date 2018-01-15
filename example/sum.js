const cond = require('preconditions').singleton()

function sum(a, b) {
  cond
    .shouldBeNumber(a, 'second parameter should be a number')
    .shouldBeNumber(b, 'second parameter should be a number')
  const result = a + b
  cond
    .shouldBeNumber(result, 'result should be a number')
  return result
}

module.exports = sum
