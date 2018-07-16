import axios from 'axios'

export const FETCH_PIPER_STORIES_FAILED = 'FETCH_PIPER_STORIES_FAILED'
export const FETCH_PIPER_STORIES_SUCCESS = 'FETCH_PIPER_STORIES_SUCCESS'
export const ADD_PIPER_STORIES_FAILED = 'ADD_PIPER_STORIES_FAILED'
export const ADD_PIPER_STORIES_SUCCESS = 'ADD_PIPER_STORIES_SUCCESS'
export const DELETE_PIPER_STORIES_FAILED = 'DELETE_PIPER_STORIES_FAILED'
export const DELETE_PIPER_STORIES_SUCCESS = 'DELETE_PIPER_STORIES_SUCCESS'
export const PUT_PIPER_STORIES_FAILED = 'PUT_PIPER_STORIES_FAILED'
export const PUT_PIPER_STORIES_SUCCESS = 'PUT_PIPER_STORIES_SUCCESS'
//PIPER FIELD REPORTS COMMENTS
export const FETCH_PIPER_COMMENTS_FAILED = 'FETCH_PIPER_COMMENTS_FAILED'
export const FETCH_PIPER_COMMENTS_SUCCESS = 'FETCH_PIPER_COMMENTS_SUCCESS'
export const ADD_PIPER_COMMENTS_FAILED = 'ADD_PIPER_COMMENTS_FAILED'
export const ADD_PIPER_COMMENTS_SUCCESS = 'ADD_PIPER_COMMENTS_SUCCESS'
export const DELETE_PIPER_COMMENTS_FAILED = 'DELETE_PIPER_COMMENTS_FAILED'
export const DELETE_PIPER_COMMENTS_SUCCESS = 'DELETE_PIPER_COMMENTS_SUCCESS'
export const PUT_PIPER_COMMENTS_FAILED = 'PUT_PIPER_COMMENTS_FAILED'
export const PUT_PIPER_COMMENTS_SUCCESS = 'PUT_PIPER_COMMENTS_SUCCESS'

export const fetchPiperStories = () => {
  return dispatch => {
    axios.get('http://immense-temple-74459/api/v1/piper_news/')
    .then(res => dispatch({
      type: FETCH_PIPER_STORIES_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: FETCH_PIPER_STORIES_FAILED,
      payload: err
    }))
  }
}

export const fetchPiperComments = () => {
  return dispatch => {
    axios.get('http://immense-temple-74459/api/v1/piper_comments/')
    .then(res => dispatch({
      type: FETCH_PIPER_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: FETCH_PIPER_COMMENTS_FAILED,
      payload: err
    }))
  }
}

export const addPiperComments = (name, comment, avatar) => {
  return dispatch => {
    axios.post('http://immense-temple-74459/api/v1/piper_comments/', {name, comment, avatar})
    .then(res => dispatch({
      type: ADD_PIPER_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: ADD_PIPER_COMMENTS_FAILED,
      payload: err
    }))
  }
}
