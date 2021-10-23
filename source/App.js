import React from 'react'
import {Keyboard, SafeAreaView, Text, TouchableWithoutFeedback} from 'react-native'
import {Provider} from 'react-redux'
import {StatusBar} from 'expo-status-bar'
import tw from 'tailwind-react-native-classnames'
import {TodoForm, TodosList} from './components'
import {useTodos} from './hooks'
import store from './store'

const App = () => {
  const {input, onChangeText, onCreateTodo, onDeleteTodo, todos} = useTodos()

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={tw`bg-gray-200 flex-1`}>
          <Text style={tw`ml-5 mt-10 mb-5 font-bold text-2xl`} accessibilityRole="header">
            Today's tasks
          </Text>
          <TodosList todos={todos} onDeleteTodo={onDeleteTodo} />
          <TodoForm onChangeText={onChangeText} value={input} onSubmit={onCreateTodo} />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Provider>
  )
}

export default App
