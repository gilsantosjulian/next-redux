import * as t from '../type'
import axios from "axios";
import { request } from '../../util/request';
require('dotenv').config()

const { API_ADDRESS } = process.env

export const getTodos = () => async dispatch => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true
    })

    const userData = JSON.parse(localStorage.getItem('user_info'))
    const email = userData?.email
    const URL = `${API_ADDRESS}/api/todos/my`

    const apiResponse = await request.post(URL, { email })

    dispatch({
      type: t.GET_TODOS,
      payload: apiResponse.data.todos,
    })
    dispatch({
      type: t.LOADING,
      payload: false,
    })
  } catch (error) {
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