import axios from 'axios'

export const FETCH_DCR_COMMENTS_FAILED = 'FETCH_DCR_COMMENTS_FAILED'
export const FETCH_DCR_COMMENTS_SUCCESS = 'FETCH_DCR_COMMENTS_SUCCESS'
export const ADD_DCR_COMMENTS_FAILED = 'ADD_DCR_COMMENTS_FAILED'
export const ADD_DCR_COMMENTS_SUCCESS = 'ADD_DCR_COMMENTS_SUCCESS'
export const DELETE_DCR_COMMENTS_FAILED = 'DELETE_DCR_COMMENTS_FAILED'
export const DELETE_DCR_COMMENTS_SUCCESS = 'DELETE_DCR_COMMENTS_SUCCESS'
export const PUT_DCR_COMMENTS_FAILED = 'PUT_DCR_COMMENTS_FAILED'
export const PUT_DCR_COMMENTS_SUCCESS = 'PUT_DCR_COMMENTS_SUCCESS'

export const FETCH_DCR_STORIES_FAILED = 'FETCH_DCR_STORIES_FAILED'
export const FETCH_DCR_STORIES_SUCCESS = 'FETCH_DCR_STORIES_SUCCESS'
export const ADD_DCR_STORIES_FAILED = 'ADD_DCR_STORIES_FAILED'
export const ADD_DCR_STORIES_SUCCESS = 'ADD_DCR_STORIES_SUCCESS'
export const DELETE_DCR_STORIES_FAILED = 'DELETE_DCR_STORIES_FAILED'
export const DELETE_DCR_STORIES_SUCCESS = 'DELETE_DCR_STORIES_SUCCESS'
export const PUT_DCR_STORIES_FAILED = 'PUT_DCR_STORIES_FAILED'
export const PUT_DCR_STORIES_SUCCESS = 'PUT_DCR_STORIES_SUCCESS'
export const FETCH_DCR_SINGLE_SUCCESS ='FETCH_DCR_SINGLE_SUCCESS'
export const FETCH_DCR_SINGLE_FAILED ='FETCH_DCR_SINGLE_FAILED'

export const DCR_REDIRECT_PENDING = 'REDIRECT_PENDING'


export const fetchDcrStories = () => {
  return dispatch => {
    axios.get('http://immense-temple-74459/api/v1/dc_rnews/')
    .then(res => dispatch({
      type: FETCH_DCR_STORIES_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: FETCH_DCR_STORIES_FAILED,
      payload: err
    }))
  }
}

export const fetchDcrSingle = (id, history) => {
  return async dispatch => {
    try{
      dispatch({type: DCR_REDIRECT_PENDING})
    let res = await fetch(`http://immense-temple-74459/api/v1/dc_rnews/${id}`)
    let userObj = await res.json()
    dispatch({
      type: FETCH_DCR_SINGLE_SUCCESS,
      payload: userObj.data
    })
    history.push(`/DcrDetails/${id}`)
  }catch(err){
   dispatch({
      type: FETCH_DCR_SINGLE_FAILED,
      payload: err
    })
  }
}
}

export const fetchDcrComments = () => {
  return dispatch => {
    axios.get('http://immense-temple-74459/api/v1/dcr_comments/')
    .then(res => dispatch({
      type: FETCH_DCR_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: FETCH_DCR_COMMENTS_FAILED,
      payload: err
    }))
  }
}

export const deleteDcrComments = (id) => {
  return dispatch => {
    axios.delete(`http://immense-temple-74459/api/v1/dcr_comments/${id}`)
    .then(res => dispatch({
      type: DELETE_DCR_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: DELETE_DCR_COMMENTS_FAILED,
      payload: err
    }))
  }
}

export const addDcrComments = (name, comment, avatar, storyId) => {
  return dispatch => {
    axios.post('http://immense-temple-74459/api/v1/dcr_comments/', {name, comment, avatar, storyId})
    .then(res => dispatch({
      type: ADD_DCR_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: ADD_DCR_COMMENTS_FAILED,
      payload: err
    }))
  }
}

export const editDcrComments = (name, comment, avatar, storyId) => {
  return dispatch => {
    axios.put('http://immense-temple-74459/api/v1/dcr_comments/', {name, comment, avatar, storyId})
    .then(res => dispatch({
      type: PUT_DCR_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: PUT_DCR_COMMENTS_FAILED,
      payload: err
    }))
  }
}
