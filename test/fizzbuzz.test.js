// import theoretically from 'jest-theories';
const fizzBuzz = require("../src/fizzbuzz")
const computeAge = require("../src/computeage")

// Tests unitaires fizzBuzz
test('fizzBuzz return Fizz if n is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
})

test('fizzBuzz return Fizz if n is divisible by 3', () => {
    expect(fizzBuzz(-3)).toBe("Fizz");
})

test('fizzBuzz return Buzz if n is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
})

test('fizzBuzz return Buzz if n is divisible by 5', () => {
    expect(fizzBuzz(-5)).toBe("Buzz");
})

test('fizzBuzz return fizzbuzz if n is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
})

test('fizzBuzz return fizzbuzz if n is divisible by 3 and 5', () => {
    expect(fizzBuzz(-15)).toBe("fizzbuzz");
})

test('fizzBuzz return n if n is not divisible by 3 or 5', () => {
    expect(fizzBuzz(2)).toBe(2);
})

test('fizzBuzz return n if n is not divisible by 3 or 5', () => {
    expect(fizzBuzz(-2)).toBe(-2);
})

// describe('fizzBuzz return Fizz if n is divisible by 3 (theory)', () => {
//     const theories = [
//         {input: 3, expected: 'One hundred'},
//         {input: 12, expected: 'One thousand'},
//         {input: 30, expected: 'Ten thousand'}
//     ]

//     theoretically('fizzBuzz return Fizz if n is divisible by 3', () => {
//         expect(fizzBuzz(3)).toBe("Fizz");
//     })
// });

// Tests unitaires computeAge
test('computeAge return 35 if birthday is 1982/11/4', () => {
    expect(computeAge(new Date(1999, 4, 11), Date.now())).toBe(22);
})

test('computeAge return 56 if birthday is 1962/1/1', () => {
    expect(computeAge(new Date(1962, 3, 24), Date.now())).toBe(59);
})

test('computeAge return 56 if birthday is 1962/1/1', () => {
    expect(computeAge(new Date(1961, 2, 14), Date.now())).toBe(60);
})
