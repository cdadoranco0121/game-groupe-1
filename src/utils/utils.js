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

const getCurrentPositionForPlayer = (matrix, player) => {
    const pos = [];

    // Find in rows
    pos[0] = matrix.findIndex( row => {
        // Find in square the element that matches palyer.number
        pos[1] = row.findIndex( square => {
            return square.number === player.number;
        });

        // break loop if element is found
        return pos[1] > -1;
    });

    // return position of player found
    return [
        pos[0] < 0 ? 0 : pos[0],
        pos[1] < 0 ? 0 : pos[1]
    ];
}

const getNewPositionForPlayer = (currentPosition, payload) => {
    const new_x = currentPosition[0] + payload[0];
    const new_y = currentPosition[1] + payload[1];

    return [new_x, new_y];
}

const getSafePosition = (gridSize, position) => {
    const max_x = gridSize[0] - 1;
    const max_y = gridSize[1] - 1;

    const safe_x = position[0] > max_x ? max_x : position[0] < 0 ? 0 : position[0];
    const safe_y = position[1] > max_y ? max_y : position[1] < 0 ? 0 : position[1];

    return [safe_x, safe_y];
}

// REDUCER
export const matrixReducer = (state, action) => {
    // Quick deep copy...
    const newState = JSON.parse(JSON.stringify(state));

    // Get current position
    const currentPosition = getCurrentPositionForPlayer(newState, action.payload.player);
    
    // Mise à zéro de la position
    newState[currentPosition[0]][currentPosition[1]] = defaultPlayer;

    const gridSize = [newState.length, newState[0].length];
    // Calculate new position
    const newPosition = getSafePosition(
        gridSize, 
        getNewPositionForPlayer(currentPosition, action.payload.move)
    );

    switch (action.type) {
        case "move_north_west":
        case "move_up":
        case "move_north_east":
        case "move_left":
        case "move_right":
        case "move_south_west":
        case "move_down":
        case "move_south_east":
            newState[newPosition[0]][newPosition[1]] = action.payload.player;
            return newState;
        default: 
            return state;
    }
}

// BUTTONS

export const buttonsSimpleMoves = [
    [
        { name: "North West", sybmol: '↖', html: '&nwarr;', code: 0, action_type: "move_north_west", action_payload: [-1,-1] },
        { name: "Up", sybmol: '↑', html: '&uarr;', code: 1, action_type: "move_up", action_payload: [-1,0] },
        { name: "North East", sybmol: '↗', html: '&nearr;', code: 2, action_type: "move_north_east", action_payload: [-1,1] },
    ],
    [
        { name: 'Left', symbol: '←', html: '&larr;', code: 3, action_type: "move_left", action_payload: [0,-1] },
        {},
        { name: "Right", sybmol: '→', html: '&rarr;', code: 4, action_type: "move_right", action_payload: [0,1] }
    ],
    [
        { name: "South West", sybmol: '↙', html: '&swarr;', code: 5, action_type: "move_south_west", action_payload: [1,-1] },
        { name: "Down", sybmol: '↓', html: '&darr;', code: 6, action_type: "move_down", action_payload: [1,0] },
        { name: "South East", sybmol: '↘', html: '&searr;', code: 7, action_type: "move_south_east", action_payload: [1,1] },
    ]
]