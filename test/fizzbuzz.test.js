const fizzBuzz = require("../src/fizzbuzz")

test('fizzBuzz return Fizz if n is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
})

test('fizzBuzz return Fizz if n is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
})

test('fizzBuzz return Fizz if n is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
})
