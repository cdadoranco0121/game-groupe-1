import { useReducer, useState } from 'react';
import './App.css';
import Grid from './Grid/Grid';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import {
    generateGridMapBlank, 
    buttonsSimpleMoves, 
    buttonsSpecialMoves,
    matrixReducer 
} from './utils/utils';

// Init one player by default
const initialPlayerState = { number: 1, color: "blue" };
const player2 = { number: 2, color: "red" };

// Init matrix
const matrixBlank = generateGridMapBlank(11,11);
matrixBlank[9][9] = initialPlayerState;
matrixBlank[1][1] = player2;

const switchPlayer = (player) => {
    return player.number === 1 
        ? player2
        : initialPlayerState;
}

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

            // MultiPlayer
            setPlayer(switchPlayer(player));
        }
    }

    return (
        <div className="App">
            <h1>Now playing: <span style={{ color: player.color}}>{player.number}</span></h1>
            <Grid matrix={matrix} />
            <br/>
            <div class="button-group-wrapper">
                <ButtonGroup buttons={buttonsSimpleMoves}
                    handleButtonClick={handleButtonClick}>
                </ButtonGroup>
                <ButtonGroup buttons={buttonsSpecialMoves}
                    handleButtonClick={handleButtonClick}>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default App;
