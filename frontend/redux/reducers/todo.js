import * as t from '../type'

const initialState = {
  todos: [],
}

const main = (state = initialState, action) => {

  switch (action.type) {
    case t.GET_TODOS:
      return {
        ...state,
        todos: action.payload
      }

    case t.CREATE_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      }

    case t.UPDATE_TODO:
      return {
        ...state,
        todos: action.payload
      }

    case t.DELETE_TODO:
      return {
        ...state,
        todos: action.payload
      }

    default:
      return { ...state }
  }
}

export default main