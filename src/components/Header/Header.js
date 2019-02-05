import styles from './styles.css';
import React from 'react';
import { Consumer } from '../../context';

const Header = () => {
  return (
    <Consumer>
      {(value) => (
        <header className={`${styles.appHeader} ${value.themeColor}`}>
          <h1 className={`${styles.headerHeading}`}>{value.appTitle}</h1>
        </header>
      )}
    </Consumer>
  )
}


// Header.contextType = Context;
export default Header;