import React from 'react';
import classes from './Grid.module.css';

import Square from '../Square/Square';

const Grid = (props) => {

    const { matrix } = props;

    return (
        <div className={classes.Grid}>
            { matrix.map( (xItem, xIndex) => {
                return (
                    <div className="grid-row">
                        {xItem.map( (yItem, yIndex) => <Square data={yItem} />)}
                    </div>
                )})
            }
        </div>
    )
}

export default Grid;