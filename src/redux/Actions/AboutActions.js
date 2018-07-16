import axios from 'axios'

export const FETCH_ABOUT_SUCCESS = 'FETCH_ABOUT_SUCCESS'
export const FETCH_ABOUT_FAILED = 'FETCH_ABOUT_FAILED'

export const fetchAbout = () => {
    return dispatch => {
      axios.get(`http://immense-temple-74459/api/v1/about`)
        .then(res => dispatch({
          type: FETCH_ABOUT_SUCCESS,
          payload: res.data.data
        }))
        .catch(err => dispatch({
          type: FETCH_ABOUT_FAILED,
          payload: err
        }))
    }
  }
