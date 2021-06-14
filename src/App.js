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
