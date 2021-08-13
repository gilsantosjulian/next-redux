import * as t from '../type'

const initialState = {
  name: 'Julian',
  loading: false,
  error: null,
  todos: [],
}

const main = (state = initialState, action) => {

  switch (action.type) {
    case t.SET_TYPE:
      return {
        ...state,
        name: action.payload
      }  

    case t.REGISTER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        age: action.payload.age,
        token: action.payload.token,
        loading: false,
        error: null,
      }  
    
    default:
      return { ...state }
  }
}

export default main