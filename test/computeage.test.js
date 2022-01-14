const computeAge = require("../src/computeage")

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
