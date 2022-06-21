import React, {useState} from 'react';
import Cover from './Component/Header/Cover';
import List from './Component/Music_List/List';
import './App.css';


function App() {
  return (
    <div className="App">
      <Cover />
      <List/>
    </div>
  );
}

export default App;
