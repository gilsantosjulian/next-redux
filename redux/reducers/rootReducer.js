import { combineReducers } from 'redux'
import main from './main'
import todo from './todo'

const rootReducer = combineReducers({
    main,
    todo,
})

export default rootReducer