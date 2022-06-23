import React, {useState} from 'react';
import Cover from './Component/Header/Cover';
import List from './Component/Music_List/List';
import './App.css';

export interface ImusicPlaying {
  musicName: string,
  musicTitle: string,
  musicPath: string,
  musicImg: string,
}

function App() {
  return (
    <div className="App">
      <div className='circle xxlarge shade1'></div>
      <div className='circle xlarge shade2'></div>
      <div className='circle large shade3'></div>
      <div className='circle mediun shade4'></div>
      <div className='circle small shade5'></div>
      <Cover />
      <List/>
    </div>
  );
}

export default App;
