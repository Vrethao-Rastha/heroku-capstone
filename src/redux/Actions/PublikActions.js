import axios from 'axios'

export const FETCH_PUBLIK_OCCURRENCES_STORIES_FAILED = 'FETCH_PUBLIK_OCCURRENCES_STORIES_FAILED'
export const FETCH_PUBLIK_OCCURRENCES_STORIES_SUCCESS = 'FETCH_PUBLIK_OCCURRENCES_STORIES_SUCCESS'
export const ADD_PUBLIK_OCCURRENCES_STORIES_FAILED = 'ADD_PUBLIK_OCCURRENCES_STORIES_FAILED'
export const ADD_PUBLIK_OCCURRENCES_STORIES_SUCCESS = 'ADD_PUBLIK_OCCURRENCES_STORIES_SUCCESS'
export const DELETE_PUBLIK_OCCURRENCES_STORIES_FAILED = 'DELETE_PUBLIK_OCCURRENCES_STORIES_FAILED'
export const DELETE_PUBLIK_OCCURRENCES_STORIES_SUCCESS = 'DELETE_PUBLIK_OCCURRENCES_STORIES_SUCCESS'
export const PUT_PUBLIK_OCCURRENCES_STORIES_FAILED = 'PUT_PUBLIK_OCCURRENCES_STORIES_FAILED'
export const PUT_PUBLIK_OCCURRENCES_STORIES_SUCCESS = 'PUT_PUBLIK_OCCURRENCES_STORIES_SUCCESS'
export const FETCH_PUBLIK_SINGLE_SUCCESS ='FETCH_PUBLIK_SINGLE_SUCCESS'
export const FETCH_PUBLIK_SINGLE_FAILED ='FETCH_PUBLIK_SINGLE_FAILED'
//PUBLIK OCCURRENCES COMMENT FUNCTIONALITY
export const FETCH_PUBLIK_OCCURRENCES_COMMENTS_FAILED = 'FETCH_PUBLIK_OCCURRENCES_COMMENTS_FAILED'
export const FETCH_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS = 'FETCH_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS'
export const ADD_PUBLIK_OCCURRENCES_COMMENTS_FAILED = 'ADD_PUBLIK_OCCURRENCES_COMMENTS_FAILED'
export const ADD_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS = 'ADD_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS'
export const DELETE_PUBLIK_OCCURRENCES_COMMENTS_FAILED = 'DELETE_PUBLIK_OCCURRENCES_COMMENTS_FAILED'
export const DELETE_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS = 'DELETE_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS'
export const PUT_PUBLIK_OCCURRENCES_COMMENTS_FAILED = 'PUT_PUBLIK_OCCURRENCES_COMMENTS_FAILED'
export const PUT_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS = 'PUT_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS'

export const PUBLIK_REDIRECT_PENDING = 'REDIRECT_PENDING'

export const fetchPublikStories = () => {
  return dispatch => {
    axios.get('http://immense-temple-74459/api/v1/publik_news/')
    .then(res => dispatch({
      type: FETCH_PUBLIK_OCCURRENCES_STORIES_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: FETCH_PUBLIK_OCCURRENCES_STORIES_FAILED,
      payload: err
    }))
  }
}

export const fetchPublikSingle = (id, history) => {
  return async dispatch => {
    try{
      dispatch({type: PUBLIK_REDIRECT_PENDING})
    let res = await fetch(`http://immense-temple-74459/api/v1/publik_news/${id}`)
    let userObj = await res.json()
    dispatch({
      type: FETCH_PUBLIK_SINGLE_SUCCESS,
      payload: userObj.data
    })
    history.push(`/PublikDetails/${id}`)
  }catch(err){
   dispatch({
      type: FETCH_PUBLIK_SINGLE_FAILED,
      payload: err
    })
  }
}
}

export const fetchPublikComments = () => {
  return dispatch => {
    axios.get('http://immense-temple-74459/api/v1/publik_comments/')
    .then(res => dispatch({
      type: FETCH_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: FETCH_PUBLIK_OCCURRENCES_COMMENTS_FAILED,
      payload: err
    }))
  }
}

export const addPublikComments = (name, comment, avatar) => {
  return dispatch => {
    axios.post('http://immense-temple-74459/api/v1/publik_comments/', {name, comment, avatar})
    .then(res => dispatch({
      type: ADD_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: ADD_PUBLIK_OCCURRENCES_COMMENTS_FAILED,
      payload: err
    }))
  }
}

export const deletePublikComments = (id) => {
  return dispatch => {
    axios.delete(`http://immense-temple-74459/api/v1/publik_comments/${id}`)
    .then(res => dispatch({
      type: DELETE_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: DELETE_PUBLIK_OCCURRENCES_COMMENTS_FAILED,
      payload: err
    }))
  }
}

export const editPublikComments = (id) => {
  return dispatch => {
    axios.put('http://immense-temple-74459/api/v1/publik_comments/', {id})
    .then(res => dispatch({
      type: PUT_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: PUT_PUBLIK_OCCURRENCES_COMMENTS_FAILED,
      payload: err
    }))
  }
}
