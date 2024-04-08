/**
 * @param {number[][]} adjMatrix 
 * @returns {number[][]} adjList
 */
function convertToAdjList(adjMatrix) {
    const list = new Array(adjMatrix.length);

    // iterate over each column first
    for (let u = 0; u < adjMatrix.length; u++) {
        const colU = [];

        // foreach col, check for a connection
        for (let v = 0; v < adjMatrix[u].length; v++) {
            if (adjMatrix[u][v] != 0) {
                colU.push(v);
            }
        }

        list[u] = colU;
    }

    return list;
}