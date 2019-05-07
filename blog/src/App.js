import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Post from './components/post';
import Postform from './components/postform';
import store from './components/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Postform />
    <hr />
      <Post />
    </div>
    </Provider>
  );
}

export default App;
