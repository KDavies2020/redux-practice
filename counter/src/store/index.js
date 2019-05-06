import { createStore } from 'redux';

const initialState = {
    count: 3
};
// this reducer is where the actual functionalty of each action is determind.
//broken down by action.type
const reducer = (state = initialState, action) => {
    console.log('reducer running', action);

    switch (action.type) {
        case "INCREMENT" :
        return Object.assign({}, state, {count: state.count+1});
        case "DECREMENT" :
        return Object.assign({}, state, {count: state.count - 1});
        default: return state
    }
    
}

// must create and export out store. 
const store = createStore(reducer);

export default store;