import React, { useState } from 'react';

const Demo2 = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>The Second Component</h1>
            <div>
                <h4>the count is = {count}</h4>
                <button onClick={handleClick}>Fire</button>
            </div>
        </div>
    )
}

export default Demo2;
