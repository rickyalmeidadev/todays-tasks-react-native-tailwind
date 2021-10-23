import React from 'react'
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
import {TodoForm, TodoCard} from './components'
import {useTodos} from './hooks'

const App = () => {
  const {input, onChangeText, onCreateTodo, onDeleteTodo, todos} = useTodos()

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
            ListEmptyComponent={() => (
              <Text style={tw`text-gray-400`}>No tasks for now...</Text>
            )}
            renderItem={({item: todo}) => (
              <TodoCard onPress={onDeleteTodo}>{todo}</TodoCard>
            )}
          />
          <TodoForm onChangeText={onChangeText} value={input} onSubmit={onCreateTodo} />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  )
}

export default App
