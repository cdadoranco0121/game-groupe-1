import './App.css';
import { generateGridMapBlank, buttonsSimpleMoves, matrixReducer } from './utils/utils';
import Grid from './Grid/Grid';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import { useReducer, useState } from 'react';

// Init one player by default
const initialPlayerState = { number: 1, color: "blue", avatar: ":)" }

// Init matrix
const matrixBlank = generateGridMapBlank(11,11);
matrixBlank[5][5] = initialPlayerState;

function App() {

    const [player, setPlayer] = useState(initialPlayerState);
    const [matrix, dispatch] = useReducer(matrixReducer, matrixBlank);

    const handleButtonClick = (data) => {

        // prevent empty objects to dispatch
        if (Object.keys(data).length > 0) {

            dispatch({
                type: data.action_type,
                payload: {
                    move: data.action_payload,
                    player 
                }
            })
        }
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

export default App;
