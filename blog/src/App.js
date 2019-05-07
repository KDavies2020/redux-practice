import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/post';
import Postform from './components/postform';

function App() {
  return (
    <div className="App">
    <Postform />
    <hr />
      <Post />
    </div>
    
    
  );
}

export default App;
