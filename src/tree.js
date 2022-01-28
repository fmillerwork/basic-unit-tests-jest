function createTree(nodes){
    const res = new Map();

    nodes.forEach(n => {
        res.set(n[0], [n[1], n[2]]);
    });

    return res;
}

function getAbsolutePath(tree, targetId){
    var currentNodeId = targetId
    var path = []

    do{
        var currentNode = tree.get(currentNodeId)
        path.push(currentNodeId)
        currentNodeId = currentNode[1] //Parent id
    }while(currentNodeId != -1);
    
    return path.reverse();
}

function getLowestCommonAncestor(tree, targetId1, targetId2){
    var target1AbsPath = getAbsolutePath(tree, targetId1)
    var target2AbsPath = getAbsolutePath(tree, targetId2)

    for (let i = 0; i < Math.min(target1AbsPath.length, target2AbsPath.length); i++) {
        if(target1AbsPath[i] != target2AbsPath[i])
            return target1AbsPath[i-1];
    }
    return -1; // never reached
}

// function getRelativePath(tree, targetId1, targetId2){
//     const commonAncestor = getLowestCommonAncestor(tree, targetId1, targetId2);
//     var relativePath = "";
//     var currentNode = tree.get(targetId1)
    
//     // Aller vers ancetre commun
//     while(currentNode[1] != commonAncestor){
//         relativePath += "../";
//         currentNode = currentNode[1]
//     }

//     // Descendre vers node2
//     var elementsBetwCAandTgt2 = []
//     currentNode = targetId2
//     do{
//         elementsBetwCAandTgt2.push(currentNode)
//         currentNode = tree.get(targetId2)[1]
//     }while(currentNode != commonAncestor)
// }

module.exports = {createTree, getAbsolutePath, getLowestCommonAncestor, /*getRelativePath*/}