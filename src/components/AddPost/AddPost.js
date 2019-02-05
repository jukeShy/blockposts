import React, { Component } from 'react';
import db from '../../firestore';
import { Context, Consumer } from '../../context';

import uuid from 'uuid';

class AddPost extends Component {

  state = {
    postName: '',
    postBody: ''
  }

  addPost = (e) => {
    e.preventDefault();
    const post = {
      id: uuid.v4(),
      title: this.state.postName,
      body: this.state.postBody,
      date: Date.now()
    }

    this.context.dispatch({ type: 'ADD_ITEM', payload: post })

    db.collection('posts').doc(post.id).set(post)
      .then(() => { 
        // TODO: добавить materialize toast
      })
      .catch(err => console.log(err))

    this.props.history.push('/')
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    this.context.dispatch({type: 'SET_HEADING', payload: 'Добавить новый пост'})
  }

  render() {
   return (
     <Consumer>
       {value => (
         <div className="add-form">
           <form className="col s6" onSubmit={this.addPost}>
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
             <button className={`btn ${value.themeColor}`} type="submit">Добавить</button>
           </form>
         </div>
       )}
     </Consumer>
      
   )
  }
}

AddPost.contextType = Context;
export default AddPost