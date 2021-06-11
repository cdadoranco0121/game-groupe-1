const defaultPlayer = {
    number: 0,
    color: "lightgrey",
    avatar: null
}

export const generateGridMapBlank = (x, y) => {

    const gridMap = [];

    for (let i = 0; i < x; i++) {
        gridMap[i] = [];

        for (let j = 0; j < y; j++) {
            gridMap[i][j] = defaultPlayer;
        }
    }

    return gridMap;
}

export const moveSquare = (matrix, action) => {
    // Data
    const { currentPosition, newPosition, player } = action;
    
    // Coordinates
    const currentX = currentPosition[0];
    const currentY = currentPosition[1];
    const newX = newPosition[0];
    const newY = newPosition[1];
    
    // Init new matrix
    const newMatrix = [...matrix];

    // Remise à zéro
    newMatrix[currentX][currentY] = defaultPlayer;

    // Nouvelle position
    newMatrix[newX][newY] = player;

    return newMatrix;
}