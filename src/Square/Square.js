import React from 'react';

const Square = (props) => {

    const { data } = props;

    return (
        <div className="grid-col" /*style={{ backgroundColor: color }}*/>{data}</div>
    )
}

export default Square;