function mergeSortedArrays(t1, t2){
    var tRes = []
    var t1Cursor = 0
    var t2Cursor = 0
    var tResCursor = 0
    while(t1Cursor < t1.length && t2Cursor < t2.length){
        if(t1[t1Cursor] <= t2[t2Cursor]){
            tRes[tResCursor] = t1[t1Cursor]
            t1Cursor += 1
        }
        else
        {
            tRes[tResCursor] = t2[t2Cursor]
            t2Cursor +=1
        } 
        tResCursor += 1
    }

    // Ajout du reste des élements de t1
    while(t1Cursor < t1.length){
        tRes[tResCursor] = t1[t1Cursor]
        t1Cursor += 1
        tResCursor += 1
    }
    
    while(t2Cursor < t2.length){
        tRes[tResCursor] = t2[t2Cursor]
        t2Cursor +=1
        tResCursor += 1
    }
    return tRes
}

module.exports = mergeSortedArrays