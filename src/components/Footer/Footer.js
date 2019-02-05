import styles from './styles.css';
import React from 'react';
import { Consumer } from '../../context';

const Footer = () => {
  return (
    <Consumer>
      {value => (
        <footer className={`${styles.appFooter} ${value.themeColor}`}>
          <span>&copy; 2019 by Andrew Shy</span>
        </footer>
      )}
    </Consumer>
    
  )
}

export default Footer;