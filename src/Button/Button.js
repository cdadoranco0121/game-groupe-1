import React from 'react';
import { decode } from 'html-entities';


const Button = (props) => {
    const { data, handleButtonClick } = props;

    return (
        <div className="grid-col" 
            onClick={() => handleButtonClick(data)}>
            {decode(data.html)}
        </div>
    )
}

export default Button;