import 'react-native-gesture-handler'
import React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {registerRootComponent} from 'expo'
import store, {persistor} from './source/store'
import App from './source/App'

registerRootComponent(() => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
))
