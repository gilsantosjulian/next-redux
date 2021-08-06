import * as t from '../type'

const initialState = {
  userInfo: {
    name: 'gwest'
  }
}

const main = (state = initialState, action) => {

  switch (action.type) {
    case t.SET_TYPE:
      return {
        ...state, userInfo: {
          name: action.payload
        }
      }  
    
    default:
      return { ...state }
  }
}

export default main