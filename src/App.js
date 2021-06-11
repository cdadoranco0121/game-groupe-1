import './App.css';
import { generateGridMapBlank, moveSquare, buttonsSimpleMoves } from './utils/utils';
import Grid from './Grid/Grid';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import { useState } from 'react';

// const player = {
//     name: "name",
//     color: "red"
// }

const matrixBlank = generateGridMapBlank(10,10);

function App() {

    const [matrix, setMatrix] = useState(matrixBlank);

    const moveTest = () => {

        const action = {
            currentPosition: [1,0],
            newPosition: [1,1],
            player: {
                number: 1,
                color: "blue",
                avatar: ":)"
            }
        }

        setMatrix(moveSquare(matrix, action));
    }

    const handleButtonClick = (data) => {
        console.log(data);
    }

    return (
        <div className="App">
            <Grid matrix={matrix} />
            <ButtonGroup buttons={buttonsSimpleMoves}
                handleButtonClick={handleButtonClick}>

            </ButtonGroup>
        </div>
    );
}

// ← &larr;
// ↑ &uarr;
// → &rarr;
// ↓ &darr;
// ↖ &nwarr;
// ↗ &nearr;
// ↘ &searr;
// ↙ &swarr;

export default App;
