import React, {useState} from 'react'
import {
  FlatList,
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import tw from 'tailwind-react-native-classnames'
import {CreateTodoForm, TodoCard} from './components'

const App = () => {
  const [todos, setTodos] = useState(['some'])
  const [input, setInput] = useState('')

  const handleCreateTodo = () => {
    if (!input.trim()) {
      return
    }

    setTodos(prevState => [input, ...prevState])
    setInput('')
    Keyboard.dismiss()
  }

  const handleDeleteTodo = index => {
    const copy = [...todos]
    copy.splice(index, 1)
    setTodos(copy)
  }

  return (
    <>
      <StatusBar style="auto" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={tw`bg-gray-200 flex-1`}>
          <Text style={tw`ml-5 mt-10 mb-5 font-bold text-2xl`} accessibilityRole="header">
            Today's tasks
          </Text>
          <FlatList
            contentContainerStyle={tw`p-5`}
            data={todos}
            keyExtractor={todo => todo}
            ItemSeparatorComponent={() => <View style={tw`h-5`} />}
            renderItem={({item: todo}) => (
              <TodoCard onPress={handleDeleteTodo}>{todo}</TodoCard>
            )}
          />
          <CreateTodoForm
            onChangeText={setInput}
            value={input}
            onSubmit={handleCreateTodo}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  )
}

export default App
