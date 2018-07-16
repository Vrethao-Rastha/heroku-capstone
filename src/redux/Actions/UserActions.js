import axios from 'axios'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED'

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED'

export const USER_REDIRECT_PENDING = 'USER_REDIRECT_PENDING'


export const fetchUser = (user, history) => {
  console.log('user', user)
  console.log('fire 1')
  return async dispatch => {
    console.log('fire 2')
    try{
      dispatch({type: USER_REDIRECT_PENDING})
    let res = await fetch(`http://immense-temple-74459/api/v1/about/`)
    let userObj = await res.json()
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: userObj.data
    })
    history.push(`/Profile/${user}`)
  }catch(err){
   dispatch({
      type: FETCH_USER_FAILED,
      payload: err
    })
  }
 }
}
