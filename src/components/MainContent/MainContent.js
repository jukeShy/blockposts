import styles from './styles.css';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
// import { Comsumer } from '../../context';

class MainContent extends Component {
  render() {
    return (
      <Router>
        <main className={`${styles.appContent}`}>
          <Sidebar />
          <Content />
          
        </main>
      </Router>
    )
  }
}

export default MainContent;