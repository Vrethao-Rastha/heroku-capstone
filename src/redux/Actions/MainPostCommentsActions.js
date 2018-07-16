import axios from 'axios'

export const FETCH_MAIN_POST_COMMENTS_FAILED = 'FETCH_MAIN_POST_COMMENTS_FAILED'
export const FETCH_MAIN_POST_COMMENTS_SUCCESS = 'FETCH_MAIN_POST_COMMENTS_SUCCESS'
export const ADD_MAIN_POST_COMMENTS_FAILED = 'ADD_MAIN_POST_COMMENTS_FAILED'
export const ADD_MAIN_POST_COMMENTS_SUCCESS = 'ADD_MAIN_POST_COMMENTS_SUCCESS'
export const DELETE_MAIN_POST_COMMENTS_FAILED = 'DELETE_MAIN_POST_COMMENTS_FAILED'
export const DELETE_MAIN_POST_COMMENTS_SUCCESS = 'DELETE_MAIN_POST_COMMENTS_SUCCESS'
export const PUT_MAIN_POST_COMMENTS_FAILED = 'PUT_MAIN_POST_COMMENTS_FAILED'
export const PUT_MAIN_POST_COMMENTS_SUCCESS = 'PUT_MAIN_POST_COMMENTS_SUCCESS'
export const FETCH_MAIN_SINGLE_POST_COMMENTS_SUCCESS ='FETCH_MAIN_SINGLE_POST_COMMENTS_SUCCESS'
export const FETCH_MAIN_SINGLE_POST_COMMENTS_FAILED ='FETCH_MAIN_SINGLE_POST_COMMENTS_FAILED'


export const MAIN_REDIRECT_PENDING = 'REDIRECT_PENDING'


export const fetchMainPostComments = () => {
  return dispatch => {
    axios.get('http://immense-temple-74459/api/v1/main_post_comments/')
    .then(res => dispatch({
      type: FETCH_MAIN_POST_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: FETCH_MAIN_POST_COMMENTS_FAILED,
      payload: err
    }))
  }
}

export const addMainPostComments = (name, comment, avatar, storyId) => {
  return dispatch => {
    axios.post('http://immense-temple-74459/api/v1/main_post_comments/', {name, comment, avatar, storyId})
    .then(res => dispatch({
      type: ADD_MAIN_POST_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: ADD_MAIN_POST_COMMENTS_FAILED,
      payload: err
    }))
  }
}

export const deleteMainPostComments = (id) => {
  return dispatch => {
    axios.delete(`http://immense-temple-74459/api/v1/main_post_comments/${id}`)
    .then(res => dispatch({
      type: DELETE_MAIN_POST_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: DELETE_MAIN_POST_COMMENTS_FAILED,
      payload: err
    }))
  }
}

export const editMainPostComments = (name, comment, avatar, storyId) => {
  return dispatch => {
    axios.put('http://immense-temple-74459/api/v1/main_post_comments/', {name, comment, avatar, storyId})
    .then(res => dispatch({
      type: PUT_MAIN_POST_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: PUT_MAIN_POST_COMMENTS_FAILED,
      payload: err
    }))
  }
}
