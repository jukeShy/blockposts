import styles from './styles.css';

import React, { Component } from 'react';
import { Context } from '../../context';

class Settings extends Component {

  onClickHandler = (e) => {
    const themeColor = e.target.getAttribute('data-name');
    this.context.dispatch({
      type: 'SET_THEME_COLOR',
      payload: themeColor
    })
  }

  componentDidMount() {
    this.context.dispatch({type: 'SET_HEADING', payload: 'Выбор темы'})
  }

  render() {
    return (
      <div>
        <h5>Цвет темы</h5>
        <div className={`${styles.colorOptions}`}>
          <div className={`${styles.colorOption}`} data-name="amber" onClick={this.onClickHandler}>
            <div 
              className={`${styles.colorLabel} amber`}></div>
            <div className="colorTitle">Abmer</div>
          </div>
          <div className={`${styles.colorOption}`} data-name="green" onClick={this.onClickHandler}>
            <div
              className={`${styles.colorLabel} green`}></div>
            <div className="colorTitle">Green</div>
          </div>
          <div className={`${styles.colorOption}`} data-name="indigo" onClick={this.onClickHandler}>
            <div 
              className={`${styles.colorLabel} indigo`}></div>
            <div className="colorTitle">Indigo</div>
          </div>
          <div className={`${styles.colorOption}`} data-name="red" onClick={this.onClickHandler}>
            <div
              className={`${styles.colorLabel} red`}></div>
            <div className="colorTitle">Red</div>
          </div>
          <div className={`${styles.colorOption}`} data-name="purple" onClick={this.onClickHandler}>
            <div
              className={`${styles.colorLabel} purple`}></div>
            <div className="colorTitle">Purple</div>
          </div>
        </div>
      </div>
    )
  }
  
}

Settings.contextType = Context;
export default Settings;