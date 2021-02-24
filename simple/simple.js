const {sum, subtract} = require('./math');

test('sum', () => {
  const result = sum(3,7);
  const expected = 10;
  expect(result).toBe(expected)
})

test('subtract', () => {
  const result = subtract(7,3);
  const expected = 4;
  expect(result).toBe(expected)
});


function test(title, cb) {
  try {
    cb();
    console.log('\x1b[32m%s\x1b[0m','V ' + title + '\n');
  }
  catch (error) {
    console.error('\x1b[31m%s\x1b[0m','X ' + title),
    console.error(error.message + '\n')
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toEquals(expected) {

    },
    toBeGreaterThan(expected) {}
  }
}