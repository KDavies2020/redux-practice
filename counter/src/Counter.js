import React from 'react';

function Counter(props) {
    return (
        <div>
            <h1>I am a counter!</h1>
            <p>Count: {props.count}</p>
      <button>Increment</button>
      <button>Decrement</button>
        </div>
    )
}

export default Counter;