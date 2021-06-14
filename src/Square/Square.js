import React from 'react';
// import { decode } from 'html-entities';
// decode('&swarr;')

const Square = (props) => {

    const { data } = props;
    const { color } = data;

    return (
        <div className="grid-col" style={{ backgroundColor: color }}></div>
    )
}

export default Square;