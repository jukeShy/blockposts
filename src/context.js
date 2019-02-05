import React, { Component } from 'react';
import db from './firestore';

export const Context = React.createContext();

const reducer = (action, state) => {
  switch(action.type) {
    case 'SET_HEADING':
      return {
        ...state,
        contentHeading: action.payload
      }
    case 'ADD_ITEM':
      return {
        ...state,
        posts: [action.payload, ...state.posts, ]
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        posts: state.posts.filter( post => post.id !== action.payload )
      }
    case 'UPDATE_ITEM':
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id!== action.payload.id) {
            return post
          } else {
            return {
              ...post,
              ...action.payload
            }
          }
        }) 
      }
    case 'SET_ITEMS':
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    case 'SET_THEME_COLOR':
      return {
        ...state,
        themeColor: action.payload
      }      
    default:
      return state;
  }
}

export class Provider extends Component {
  state = {
    appTitle: 'Block Post',
    contentHeading: 'Content Heading',
    themeColor: 'green',
    posts: [],
    dispatch: action => this.setState(state => reducer(action, state))
  }

  componentDidMount() {
    db.collection('posts').orderBy('date', 'desc').get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.setState({
            posts: [...this.state.posts, doc.data()]
          })
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;