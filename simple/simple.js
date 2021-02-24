const {sumAsync, subtractAsync} = require('./math');

test('sumAsync', async () => {
  const result = await sumAsync(3,7);
  const expected = 10;
  expect(result).toBe(expected)
})

test('subtractAsync', async () => {
  const result = await subtractAsync(7,3);
  const expected = 4;
  expect(result).toBe(expected)
});


async function test(title, cb) {
  try {
    await cb();
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