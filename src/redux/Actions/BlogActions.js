import axios from 'axios'

export const FETCH_BLOG_STORIES_FAILED = 'FETCH_BLOG_STORIES_FAILED'
export const FETCH_BLOG_STORIES_SUCCESS = 'FETCH_BLOG_STORIES_SUCCESS'
export const ADD_BLOG_STORIES_FAILED = 'ADD_BLOG_STORIES_FAILED'
export const ADD_BLOG_STORIES_SUCCESS = 'ADD_BLOG_STORIES_SUCCESS'
export const DELETE_BLOG_STORIES_FAILED = 'DELETE_BLOG_STORIES_FAILED'
export const DELETE_BLOG_STORIES_SUCCESS = 'DELETE_BLOG_STORIES_SUCCESS'
export const PUT_BLOG_STORIES_FAILED = 'PUT_BLOG_STORIES_FAILED'
export const PUT_BLOG_STORIES_SUCCESS = 'PUT_BLOG_STORIES_SUCCESS'
export const FETCH_BLOG_SINGLE_FAILED = 'FETCH_BLOG_SINGLE_FAILED'
export const FETCH_BLOG_SINGLE_SUCCESS = 'FETCH_BLOG_SINGLE_SUCCESS'
export const BLOG_REDIRECT_PENDING = 'BLOG_REDIRECT_PENDING'

export const fetchBlogStories = () => {
  return dispatch => {
    axios.get('http://immense-temple-74459/api/v1/blogs/')
    .then(res => dispatch({
      type: FETCH_BLOG_STORIES_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: FETCH_BLOG_STORIES_FAILED,
      payload: err
    }))
  }
}

export const addBlog = (title, body, picture) => {
  return dispatch => {
    axios.post('http://immense-temple-74459/api/v1/blogs/', {title, body, picture})
    .then(res => dispatch({
      type: ADD_BLOG_STORIES_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: ADD_BLOG_STORIES_FAILED,
      payload: err
    }))
  }
}

export const deleteBlog = (id) => {
  return dispatch => {
    axios.delete(`http://immense-temple-74459/api/v1/blogs/ ${id}`)
    .then(res => dispatch({
      type: DELETE_BLOG_STORIES_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: DELETE_BLOG_STORIES_FAILED,
      payload: err
    }))
  }
}

export const editBlog = (id, title, body, picture) => {
  return dispatch => {
    axios.put(`http://immense-temple-74459/api/v1/blogs/${id}`, {title, body, picture})
    .then(res => dispatch({
      type: PUT_BLOG_STORIES_SUCCESS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: PUT_BLOG_STORIES_FAILED,
      payload: err
    }))
  }
}

export const fetchBlogSingle = (id, history) => {
  return async dispatch => {
    try{
      dispatch({type: BLOG_REDIRECT_PENDING})
    let res = await fetch(`http://immense-temple-74459/api/v1/blogs/${id}`)
    let userObj = await res.json()
    dispatch({
      type: FETCH_BLOG_SINGLE_SUCCESS,
      payload: userObj.data
    })
    history.push(`/DetailBlog/${id}`)
  }catch(err){
   dispatch({
      type: FETCH_BLOG_SINGLE_FAILED,
      payload: err
    })
  }
}
}
