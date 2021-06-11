import React from 'react';
import Button from '../Button/Button';

const ButtonGroup = (props) => {

    const { buttons, handleButtonClick } = props;

    return (
        <div>
            {buttons.map( (xItem, xIndex) => {
                return (
                    <div className="grid-row" key={"grid-row-" + xIndex}>
                        {xItem.map( (yItem, yIndex) => 
                            <Button data={yItem} 
                                handleButtonClick={handleButtonClick}
                                key={`button-${xIndex}-${yIndex}`} /> 
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default ButtonGroup;