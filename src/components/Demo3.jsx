import React, { useState } from 'react';
import hocDemo from './Hoc';

const Demo3 = (props) => {
    return (
        <div>
            <h1>The First Component</h1>
            <div>
            <h4>the count is = {props.count}</h4>
            <button onClick={props.handleClick}>Fire</button>
            </div>
        </div>
    )
}

export default hocDemo(Demo3);
