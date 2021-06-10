import './App.css';
import { generateGridMap } from './utils/utils';
import Grid from './Grid/Grid';

function App() {

    // array.map( (xItem, xIndex) => {
    //     console.log("Row " + xIndex);

    //     xItem.map( (yItem, yIndex) => {
    //         console.log("\t Col " + yIndex);
    //     })
    // })
    
    return (
        <div className="App">
            <Grid matrix={generateGridMap(10,10)} />
        </div>
    );
}

export default App;
