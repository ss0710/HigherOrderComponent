import React, { useState } from 'react';

const hocDemo = (Component, num) => {
    const NewComponent = () => {
        const [count, setCount] = useState(0);

        const handleClick = () => {
            setCount(count + num);
        }

        return(
            <Component count={count} handleClick={handleClick}/>
        );
    } 
    return NewComponent;
}

export default hocDemo;