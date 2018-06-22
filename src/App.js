import React, { Component } from 'react';

import Header from './components/header';
import Main from './components/main';
import Home from './components/home';
import Description from './components/description';
import Footer from './components/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
     <Header></Header>
      <Main></Main>
      <Home></Home>
      <Description></Description>
      <Footer></Footer>
     </div>
    );
  }
}

export default App;
