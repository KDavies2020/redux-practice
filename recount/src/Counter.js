import React from 'react';

function Counter (props) {
return (
    <div>
        <h1>Counter</h1>
        <button>Increment</button>
        <button>Decrement</button>
        <p>Count: {props.count}</p>
    </div>
)
}

export default Counter;