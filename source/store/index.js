import {combineReducers, createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import todos from './todos/reducer'

const config = {key: 'root', storage: AsyncStorage}

const store = createStore(persistReducer(config, combineReducers({todos})))

export const persistor = persistStore(store)

export default store
