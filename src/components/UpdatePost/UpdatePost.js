import React, { Component } from 'react';
import db from '../../firestore';
import { Context, Consumer } from '../../context';

class UpdatePost extends Component {
  state = {
    id: '',
    postName: '',
    postBody: '',
    date: ''
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    db.collection('posts').doc(this.props.match.params.id).get()
      .then(doc => {
        if (doc.exists) {
          this.setState({
            id: doc.data().id,
            postName: doc.data().title,
            postBody: doc.data().body
          })
          this.context.dispatch({ type: 'SET_HEADING', payload: `Редактирование поста: '${this.state.postName}'` })
        }
      })
      .catch(err => console.log(err))
    
  } 

  updatePost = (e) => {
    e.preventDefault();
    const post = {
      id: this.state.id,
      title: this.state.postName,
      body: this.state.postBody,
      date: Date.now() 
    }

    this.context.dispatch({type: 'UPDATE_ITEM', payload: post})

    db.collection("posts").doc(this.state.id).set(post)
      .then(() => {})
      .catch(err => console.log(err))
    this.props.history.push('/')
  }

  render() {
    
    return (
      <Consumer>
        {value => (
          <form className="col s6" onSubmit={this.updatePost}>
            <div className="input-field col s12">
              <input
                id="first_name2"
                value={this.state.postName}
                onChange={this.onChangeHandler}
                name="postName"
                type="text"
                className="validate"
                placeholder="Post name" />
            </div>
            <div className="input-field col s12">
              <textarea
                id="textarea1"
                value={this.state.postBody}
                onChange={this.onChangeHandler}
                name="postBody"
                className="materialize-textarea"
                placeholder="Post text"></textarea>
            </div>
            <button className={`btn ${value.themeColor}`} type="submit">Редакировать</button>
          </form>
        )}
      </Consumer>
      
    )
  }
}

UpdatePost.contextType = Context;
export default UpdatePost;