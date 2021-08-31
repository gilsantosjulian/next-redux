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

    default:
      return { ...state }
  }
}

export default main