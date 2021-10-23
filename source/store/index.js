import {combineReducers, createStore} from 'redux'
import todos from './todos/reducer'

const store = createStore(combineReducers({todos}))

export default store
