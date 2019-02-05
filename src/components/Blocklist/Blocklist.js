import React, { Component } from 'react';
import { Consumer, Context } from '../../context';
import Post from '../Post/Post';

class Blocklist extends Component {

  componentDidMount() {
    this.context.dispatch({type: 'SET_HEADING', payload: 'Посты'})
  }

  render() {
    return (
      <Consumer>
        {value => (
          <div className="post-list">
            <div className="row" style={style}>
              {value.posts.map(post => (
                <Post key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}
      </Consumer>
    )
  }
}
    

const style = {
  marginLeft: '-10px',
  marginRight: '-10px'
}

Blocklist.contextType = Context;
export default Blocklist;