import React, { useState } from 'react';

const hocDemo = (Component) => {
    const NewComponent = () => {
        const [count, setCount] = useState(0);

        const handleClick = () => {
            setCount(count + 1);
        }

        return(
            <Component count={count} handleClick={handleClick}/>
        );
    } 
    return NewComponent;
}

export default hocDemo;