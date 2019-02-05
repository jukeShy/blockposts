import React, { Component } from 'react';
import { Context, Consumer } from '../../context';

class About extends Component  {

  state = {
    heading: 'Some heading'
  }

  componentDidMount() {
    this.context.dispatch({
      type: 'SET_HEADING',
      payload: 'О приложении'
    })
  }

  render() {
    return (
      <Consumer>
        {value => (
          <div>
            <p>React приложение для создания микро записей, с возможностью выбирать цветовую тему приложения.</p>
            <h4>Что используется и что я узнал/практиковал:</h4>
            <ul className="collection">
              <li className="collection-item">Context API для манипуляцией глобального state(Выбор цветовой темы, динамического заголовка каждого компонента, добавление/удаление/редактирование записей на стороне ui)</li>
              <li className="collection-item">Firebase/Firestore в качестве облачной NoSQL базы данных(редактирование/удаление/редактирование на стороне базы данных)</li>
              <li className="collection-item">React Router и работа с lifecircle компонентов</li>
              <li className="collection-item">Обработка форм, передача верхных данных в/из firestore</li>
              <li className="collection-item">Materialize.css в качестве css библиотеки</li>
              <li className="collection-item">и немного flexbox ❤</li>
            </ul>
          </div>
        )}
      </Consumer>
    ) 
  }
}

About.contextType = Context;
export default About;