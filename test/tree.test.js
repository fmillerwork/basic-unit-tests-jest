const createTree = require("../src/tree").createTree
const getAbsolutePath = require("../src/tree").getAbsolutePath
const getLowestCommonAncestor = require("../src/tree").getLowestCommonAncestor
const getRelativePath = require("../src/tree").getRelativePath

//#region TU createTree
test('createTree should return the correct tree', () => {
    //Arrange   
    const nodes = [[0, "0", -1], [1, "0-1", 0], [2, "0-2", 0]];
    const expected = new Map();

    expected.set(0, ["0", -1]);
    expected.set(1, ["0-1", 0]);
    expected.set(2, ["0-2", 0]);

    // Act
    const actual = createTree(nodes);

    // Assert
    expect(actual.get(0)).toEqual(expected.get(0));
    expect(actual.get(1)).toEqual(expected.get(1));
    expect(actual.get(2)).toEqual(expected.get(2));
})
//#endregion

//#region TU getAbsolutePath
test('getAbsolutePath should return the correct absolute path if node is leaf', () => {
    //Arrange   
    const nodes = [[0, "0", -1], [1, "0-1", 0], [2, "0-2", 0], [3, "0-2-1", 2]];
    const targetId = 3
    const tree = createTree(nodes)

    // Act
    const actual = getAbsolutePath(tree, targetId);
    const expected = [0, 2, 3]

    // Assert
    expect(actual).toEqual(expected);
})

test('getAbsolutePath should return the correct absolute path if node is root', () => {
    //Arrange   
    const nodes = [[0, "0", -1], [1, "0-1", 0], [2, "0-2", 0], [3, "0-2-1", 2]];
    const targetId = 0
    const tree = createTree(nodes)
    
    // Act
    const actual = getAbsolutePath(tree, targetId);
    const expected = [0]

    // Assert
    expect(actual).toEqual(expected);
})

test('getAbsolutePath should return the correct absolute path if node is not a leaf or root', () => {
    //Arrange   
    const nodes = [[0, "0", -1], [1, "0-1", 0], [2, "0-2", 0], [3, "0-2-1", 2]];
    const targetId = 2
    const tree = createTree(nodes)
    
    // Act
    const actual = getAbsolutePath(tree, targetId);
    const expected = [0, 2]

    // Assert
    expect(actual).toEqual(expected);
})
// #endregion

// #region TU getLowestCommonAncestor
test('getLowestCommonAncestor should return the correct lowest common ancestor if it is root', () => {
    //Arrange   
    const nodes = [[0, "0", -1], [1, "0-1", 0], [2, "0-2", 0], [3, "0-2-1", 2]];
    const targetId1 = 1
    const targetId2 = 3
    const tree = createTree(nodes)
    
    // Act
    const actual = getLowestCommonAncestor(tree, targetId1, targetId2);
    const expected = 0

    // Assert
    expect(actual).toEqual(expected);
})

test('getLowestCommonAncestor should return the correct lowest common ancestor of leafs', () => {
    //Arrange   
    const nodes = [[0, "0", -1], [1, "0-1", 0], [2, "0-2", 0], [3, "0-2-1", 2], [4, "0-2-2", 2]];
    const targetId1 = 3
    const targetId2 = 4
    const tree = createTree(nodes)
    
    // Act
    const actual = getLowestCommonAncestor(tree, targetId1, targetId2);
    const expected = 2

    // Assert
    expect(actual).toEqual(expected);
})
// #endregion

// #region TU getRelativePath
// test('getRelativePath should return the correct relative if nodes are at the same depth', () => {
//     //Arrange   
//     const nodes = [[0, "0", -1], [1, "0-1", 0], [2, "0-2", 0], [3, "0-2-1", 2], [4, "0-2-2", 2], [5, "0-4-1", 4]];
//     const targetId1 = 3
//     const targetId2 = 4
//     const tree = createTree(nodes)

//     // Act
//     const actual = getRelativePath(tree, targetId1, targetId2);
//     const expected = "/4"

//     // Assert
//     expect(actual).toEqual(expected);
// })

// test('getRelativePath should return the correct relative path if node 1 is deeper then node 2', () => {
//         //Arrange   
//         const nodes = [[0, "0", -1], [1, "0-1", 0], [2, "0-2", 0], [3, "0-2-1", 2], [4, "0-2-2", 2], [5, "0-4-1", 4]];
//         const targetId1 = 3
//         const targetId2 = 1
//         const tree = createTree(nodes)
    
//         // Act
//         const actual = getRelativePath(tree, targetId1, targetId2);
//         const expected = "../../1"
    
//         // Assert
//         expect(actual).toEqual(expected);
// })

// test('getRelativePath should return the correct relative path if node 2 is deeper then node 1', () => {
//     //Arrange   
//     const nodes = [[0, "0", -1], [1, "0-1", 0], [2, "0-2", 0], [3, "0-2-1", 2], [4, "0-2-2", 2], [5, "0-4-1", 4]];
//     const targetId1 = 3
//     const targetId2 = 5
//     const tree = createTree(nodes)

//     // Act
//     const actual = getRelativePath(tree, targetId1, targetId2);
//     const expected = "../4/5"

//     // Assert
//     expect(actual).toEqual(expected);
// })

// test('getRelativePath should return the correct relative path if node 1 is root', () => {
//     //Arrange   
//     const nodes = [[0, "0", -1], [1, "0-1", 0], [2, "0-2", 0], [3, "0-2-1", 2], [4, "0-2-2", 2], [5, "0-4-1", 4]];
//     const targetId1 = 0
//     const targetId2 = 5
//     const tree = createTree(nodes)

//     // Act
//     const actual = getRelativePath(tree, targetId1, targetId2);
//     const expected = "/2/4/5"

//     // Assert
//     expect(actual).toEqual(expected);
// })

// test('getRelativePath should return the correct relative path if node 2 is root', () => {
//     //Arrange   
//     const nodes = [[0, "0", -1], [1, "0-1", 0], [2, "0-2", 0], [3, "0-2-1", 2], [4, "0-2-2", 2], [5, "0-4-1", 4]];
//     const targetId1 = 5
//     const targetId2 = 0
//     const tree = createTree(nodes)

//     // Act
//     const actual = getRelativePath(tree, targetId1, targetId2);
//     const expected = "../../../"

//     // Assert
//     expect(actual).toEqual(expected);
// })
// #endregion