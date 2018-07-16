import axios from 'axios'

export const FETCH_MAIN_STORY_FAILED = 'FETCH_MAIN_STORY_FAILED'
export const FETCH_MAIN_STORY_SUCCESS = 'FETCH_MAIN_STORY_SUCCESS'
export const ADD_MAIN_STORY_FAILED = 'ADD_MAIN_STORY_FAILED'
export const ADD_MAIN_STORY_SUCCESS = 'ADD_MAIN_STORY_SUCCESS'
export const DELETE_MAIN_STORY_FAILED = 'DELETE_MAIN_STORY_FAILED'
export const DELETE_MAIN_STORY_SUCCESS = 'DELETE_MAIN_STORY_SUCCESS'
export const PUT_MAIN_STORY_FAILED = 'PUT_MAIN_STORY_FAILED'
export const PUT_MAIN_STORY_SUCCESS = 'PUT_MAIN_STORY_SUCCESS'
export const FETCH_MAIN_SINGLE_SUCCESS ='FETCH_MAIN_SINGLE_SUCCESS'
export const FETCH_MAIN_SINGLE_FAILED ='FETCH_MAIN_SINGLE_FAILED'

export const FETCH_MAIN_STORY_COMMENTS_FAILED = 'FETCH_MAIN_STORY_COMMENTS_FAILED'
export const FETCH_MAIN_STORY_COMMENTS_SUCCESS = 'FETCH_MAIN_STORY_COMMENTS_SUCCESS'
export const ADD_MAIN_STORY_COMMENTS_FAILED = 'ADD_MAIN_STORY_COMMENTS_FAILED'
export const ADD_MAIN_STORY_COMMENTS_SUCCESS = 'ADD_MAIN_STORY_COMMENTS_SUCCESS'
export const DELETE_MAIN_STORY_COMMENTS_FAILED = 'DELETE_MAIN_STORY_COMMENTS_FAILED'
export const DELETE_MAIN_STORY_COMMENTS_SUCCESS = 'DELETE_MAIN_STORY_COMMENTS_SUCCESS'
export const PUT_MAIN_STORY_COMMENTS_FAILED = 'PUT_MAIN_STORY_COMMENTS_FAILED'
export const PUT_MAIN_STORY_COMMENTS_SUCCESS = 'PUT_MAIN_STORY_COMMENTS_SUCCESS'

export const MAIN_REDIRECT_PENDING = 'REDIRECT_PENDING'

export const fetchMainStory = () => {
  return dispatch => {
    axios.get('http://immense-temple-74459/api/v1/main_story/')
    .then(res => dispatch({
      type: FETCH_MAIN_STORY_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: FETCH_MAIN_STORY_FAILED,
      payload: err
    }))
  }
}

export const fetchMainSingle = (id, history) => {
  return async dispatch => {
    try{
      dispatch({type: MAIN_REDIRECT_PENDING})
    let res = await fetch(`http://immense-temple-74459/api/v1/main_story/${id}`)
    let userObj = await res.json()
    dispatch({
      type: FETCH_MAIN_SINGLE_SUCCESS,
      payload: userObj.data
    })
    history.push(`/MainDetails/${id}`)
  }catch(err){
   dispatch({
      type: FETCH_MAIN_SINGLE_FAILED,
      payload: err
    })
  }
}
}

export const fetchMainStoryComments = () => {
  return dispatch => {
    axios.get('http://immense-temple-74459/api/v1/main_story_comments/')
    .then(res => dispatch({
      type: FETCH_MAIN_STORY_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: FETCH_MAIN_STORY_COMMENTS_FAILED,
      payload: err
    }))
  }
}

export const addMainStoryComments = (name, comment, avatar, storyId) => {
  return dispatch => {
    axios.post('http://immense-temple-74459/api/v1/main_story_comments/', {name, comment, avatar, storyId})
    .then(res => dispatch({
      type: ADD_MAIN_STORY_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: ADD_MAIN_STORY_COMMENTS_FAILED,
      payload: err
    }))
  }
}

export const deleteMainComments = (id) => {
  return dispatch => {
    axios.delete(`http://immense-temple-74459/api/v1/main_story_comments/${id}`)
    .then(res => dispatch({
      type: DELETE_MAIN_STORY_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: DELETE_MAIN_STORY_COMMENTS_FAILED,
      payload: err
    }))
  }
}

export const editMainComments = (name, comment, avatar, storyId) => {
  return dispatch => {
    axios.put('http://immense-temple-74459/api/v1/main_story_comments/', {name, comment, avatar, storyId})
    .then(res => dispatch({
      type: PUT_MAIN_STORY_COMMENTS_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: PUT_MAIN_STORY_COMMENTS_FAILED,
      payload: err
    }))
  }
}
