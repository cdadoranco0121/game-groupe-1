import './App.css';
import { generateGridMapBlank, moveSquare } from './utils/utils';
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

    const buttons = [
        { name: "name", logo: "logo" }, {}, { name: "name", logo: "logo" }
    ]

    return (
        <div className="App">
            <Grid matrix={matrix} />
            <button onClick={moveTest}>Move</button>
            <ButtonGroup buttons={buttons}>

            </ButtonGroup>
        </div>
    );
}

export default App;
