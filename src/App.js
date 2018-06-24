import React, { Component } from 'react';

import Header from './components/header';
import Main from './components/main';
import Frame from './components/frame';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
     <Header></Header>
      <Main></Main>
        <Frame></Frame>
     </div>
    );
  }
}

export default App;
