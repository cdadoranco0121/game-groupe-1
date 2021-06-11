import React from 'react';
import Button from '../Button/Button';

const ButtonGroup = (props) => {

    const { buttons } = props;

    return (
        <div>

            {buttons.map(item => {
                <Button />
            })}
        </div>
    )
}

export default ButtonGroup;