import './App.css';
import { generateGridMapBlank, buttonsSimpleMoves, matrixReducer } from './utils/utils';
import Grid from './Grid/Grid';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import { useReducer, useState } from 'react';

const matrixBlank = generateGridMapBlank(10,10);

const initialPlayerState = {
    number: 1,
    color: "blue",
    avatar: ":)"
}

matrixBlank[5][5] = initialPlayerState;

function App() {

    const [player, setPlayer] = useState(initialPlayerState);
    const [matrix, dispatch] = useReducer(matrixReducer, matrixBlank);

    const handleButtonClick = (data) => {
        
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
