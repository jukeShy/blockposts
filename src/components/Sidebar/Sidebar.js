import styles from './styles.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <aside className={`${styles.appSidebar}`}>
        <ul className={`collection ${styles.sidebarMenu}`}>
          <li className="collection-item">
            <Link to="/">Посты</Link>
          </li>
          <li className="collection-item">
            <Link to="add">Добавить новый пост</Link>
          </li>
          <li className="collection-item">
            <Link to="about">О приложении</Link>
          </li>
          <li className="collection-item">
            <Link to="settings">Выбор темы</Link>
          </li>
        </ul>
      </aside>
    )
  }
}

export default Sidebar;