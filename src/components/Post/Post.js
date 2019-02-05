import React, { Component } from 'react';
import db from '../../firestore';
import { Consumer, Context } from '../../context';
import { Link } from 'react-router-dom';

class Post extends Component {

  deletePost = () => {
    this.context.dispatch({ type: 'REMOVE_ITEM', payload: this.props.post.id })
    db.collection('posts').doc(this.props.post.id).delete()
      .then(() => {
        
      })
      .catch(err => console.log(err));
  }

  render() {
    const { title, body, date, id } = this.props.post;

    return (
      <Consumer>
        {value => (
          <div className="col s12 m6">
            <div className="card hoverable" style={{ minHeight: '205px' }}>
              <div className="card-content">
                <span className="card-title">{title}</span>
                <p style={{ minHeight: '1em' }}>{body}</p>
                <span>{new Date(date).toLocaleString()}</span>
              </div>
              <div className="card-action">
                <Link to={`/${id}`} style={{ color: value.themeColor }}>Редактировать</Link>
                <button className={`btn ${value.themeColor}`} onClick={this.deletePost}>Удалить</button>
              </div>
            </div>
          </div>
        )}
      </Consumer>
    )
  }


  
}
Post.contextType = Context;
export default Post;