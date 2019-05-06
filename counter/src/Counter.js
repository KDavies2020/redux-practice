import React from 'react';
import { connect } from 'react-redux';

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
//this function is going where we are assigning a value to state. 
function mapStateToProps (state) {
    console.log('mapStateToProps', state)
    return {
        count: state.count
    }
}
//connect is used below through react-redux. provides a redux wrapper
//on our traditional react component. 
export default connect(mapStateToProps)(Counter);