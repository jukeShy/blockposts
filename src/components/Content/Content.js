import styles from './styles.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Consumer } from '../../context';

import Settings from '../Settings/Settings';
import About from '../About/About';
import Blocklist from '../Blocklist/Blocklist';
import AddPost from '../AddPost/AddPost';
import UpdatePost from '../UpdatePost/UpdatePost';


const Content = () => {
  return (
    <Consumer>
      {value => (
        <div className={`${styles.appContentWrapper}`}>
          <h1>{value.contentHeading}</h1>
          <Switch>
            <Route exact path="/" component={Blocklist} />
            <Route exact path="/about" component={About} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/add" component={AddPost} />
            <Route exact path="/:id" component={UpdatePost} />
          </Switch>
        </div>
      )}
    </Consumer>    
  )
}

export default Content;