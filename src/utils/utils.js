export const generateGridMapBlank = (x, y) => {

    const gridMap = [];

    for (let i = 0; i < x; i++) {
        gridMap[i] = [];

        for (let j = 0; j < y; j++) {
            gridMap[i][j] = 0;
        }
    }

    return gridMap;
}

export const moveSquare = (matrix, action) => {
    const { currentPosition, newPosition, player : { number } } = action;
    
    const currentX = currentPosition[0];
    const currentY = currentPosition[1];

    const newX = newPosition[0];
    const newY = newPosition[1];

    const newMatrix = [...matrix];

    // Remise à zéro
    newMatrix[currentX][currentY] = 0;

    // Nouvelle position
    newMatrix[newX][newY] = number;

    return newMatrix;
}