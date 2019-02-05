import './App.css';
import React, { Component } from 'react';
import { Provider } from './context';

import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {
    return (
      <Provider>
        <div id="app-wrapper">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </Provider>
      
    );
  }
}


export default App;
