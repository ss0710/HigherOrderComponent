import React, { useState } from 'react';
import hocDemo from './Hoc';

const Demo1 = (props) => {
    return (
        <div>
            <h1>The Fisrt Component</h1>
            <div>
                <h4>the count is = {props.count}</h4>
                <h3>The counter will increase by 10</h3>
                <button onClick={props.handleClick}>Fire</button>
            </div>
        </div>
    )
}

export default hocDemo(Demo1, 10);
