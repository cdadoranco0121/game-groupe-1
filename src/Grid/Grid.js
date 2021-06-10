import React from 'react';
import classes from './Grid.module.css';

const Grid = (props) => {

    const { matrix } = props;



    return (
        <div className={classes.Grid}>
            { matrix.map( (xItem, xIndex) => {
                return (
                    <div className="grid-row">
                        { xItem.map( (yItem, yIndex) => {
                            return (
                                <div className="grid-col"></div>
                            )})
                        }
                    </div>
                )})
            }
        </div>
    )
}

export default Grid;