import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import Home from './components/home';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
     <Header></Header>
      <Main></Main>
      <Home></Home>
     </div>
    );
  }
}

export default App;
