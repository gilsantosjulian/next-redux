import * as t from '../type'
import axios from "axios";
require('dotenv').config()

const { API_ADDRESS } = process.env

export const setInfo = (name) => {
  return ({
    type: t.SET_TYPE,
    payload: name
  })
}

export const userSignUp = ({
  name,
  age,
  email,
  password,
}) => async dispatch =>{
  try {
    dispatch({
      type: t.LOADING,
      payload: true,
    })

    const URL = `${API_ADDRESS}/api/auth/register`
    const apiResponse = await axios.post(URL, { name, age, email, password })

    if(apiResponse?.data?.success) {
      localStorage.setItem('user_info', JSON.stringify(apiResponse.data.user))
      dispatch({
        type: t.REGISTER,
        payload: apiResponse?.data?.user,
      })
    }
  } catch (error) {
    dispatch({
      type: t.LOADING,
      payload: false
    })

    console.log({error});
    dispatch({
      type: t.ERROR,
      payload: error.response.data.error
    })
  }
}

export const userSignIn = ({ email, password }) => async dispatch => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true
    })
    const url = `${API_ADDRESS}/api/auth/login`
    const apiResponse = await axios.post(url, { email, password })
    const { success, user } = apiResponse?.data

    if(success) {
      localStorage.setItem('user_info', JSON.stringify(user))
      dispatch({
        type: t.REGISTER,
        payload: user
      })
    }
  } catch (error) {
    console.log(error.response)
    dispatch({
      type: t.LOADING,
      payload: false
    })
    dispatch({
      type: t.ERROR,
      payload: error.response.data.error
    })
  }

}