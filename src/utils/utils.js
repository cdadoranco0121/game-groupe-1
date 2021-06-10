export const generateGridMap = (x, y) => {

    const gridMap = [];

    for (let i = 0; i < x; i++) {
        gridMap[i] = [];

        for (let j = 0; j < y; j++) {
            gridMap[i][j] = j;
        }
    }
    // const array = generateGridMap(15,10);
    return gridMap;
}