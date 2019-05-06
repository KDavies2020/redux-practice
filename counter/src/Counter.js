import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
    return (
        <div>
            <h1>I am a counter!</h1>
            <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>
      <button onClick={props.onDecrementClick}>Decrement</button>
        </div>
    )
}
//this function is going where we are assigning a value to state. 
//these are actions that really belong in action file or folder. 
// ok for small scale. Notice that action.type = is just used to name 
//the action. nothing more. 
function mapStateToProps (state) {
    console.log('mapStateToProps', state)
    return {
        count: state.count
    }
};

function mapDispatchToProps (dispatch) {
    return {
        onIncrementClick: () => {
            const action = { type: "INCREMENT"};
            dispatch(action)
        },
        onDecrementClick: () => {
            const action = { type: "DECREMENT"};
            dispatch(action)
        }
    }
}

    
//connect is used below through react-redux. provides a redux wrapper
//on our traditional react component. 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);