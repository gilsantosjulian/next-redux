import * as t from '../type'

const initialState = {
  name: 'Julian'
}

const main = (state = initialState, action) => {

  switch (action.type) {
    case t.SET_TYPE:
      return {
        ...state,
        name: action.payload
      }  
    
    default:
      return { ...state }
  }
}

export default main