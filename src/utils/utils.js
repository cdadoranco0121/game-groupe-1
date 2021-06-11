// GRID

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

// BUTTONS

export const buttonsSimpleMoves = [
    [
        { name: "North West", sybmol: '↖', html: '&nwarr;', code: 0 },
        { name: "Up", sybmol: '↑', html: '&uarr;', code: 1 },
        { name: "North East", sybmol: '↗', html: '&nearr;', code: 2 },
    ],
    [
        { name: 'Left', symbol: '←', html: '&larr;', code: 3 },
        {},
        { name: "Right", sybmol: '→', html: '&rarr;', code: 4 }
    ],
    [
        { name: "South West", sybmol: '↙', html: '&swarr;', code: 5 },
        { name: "Down", sybmol: '↓', html: '&darr;', code: 6 },
        { name: "South East", sybmol: '↘', html: '&searr;', code: 7 },
    ]
]