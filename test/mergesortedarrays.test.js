const mergeSortedArrays = require("../src/mergesortedarrays")

// Tests unitaires mergeSortedArrays
test('mergeSortedArrays should work if t1 and t2 have different size', () => {
    expect(mergeSortedArrays([1, 3, 5], [2, 4])).toEqual([1, 2, 3, 4, 5]);
})

test('mergeSortedArrays should work if t1 and t2 have duplicated values', () => {
    expect(mergeSortedArrays([1, 3, 3, 8], [2, 3, 9, 14, 32])).toEqual([1, 2, 3, 3, 3, 8, 9, 14, 32]);
})

test('mergeSortedArrays should work if t1 and t2 are equal', () => {
    expect(mergeSortedArrays([1, 3, 5, 8], [1, 3, 5, 8])).toEqual([1, 1, 3, 3, 5, 5, 8, 8]);
})

test('mergeSortedArrays should work if empty array for t2', () => {
    expect(mergeSortedArrays([1, 3, 3, 8], [])).toEqual([1, 3, 3, 8]);
})

test('mergeSortedArrays should work if empty array for t1', () => {
    expect(mergeSortedArrays([], [1, 3, 3, 8])).toEqual([1, 3, 3, 8]);
})