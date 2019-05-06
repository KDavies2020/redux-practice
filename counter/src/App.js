import React from 'react';
import Counter from './Counter.js'

import './App.css';
import store from './store/';

function App() {
  return (
    <div className="App">
      <Counter store={store}/>
      
    </div>
  );
}

export default App;
