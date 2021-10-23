import React from 'react'
import {FlatList, Text, View} from 'react-native'
import {useSelector} from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import TodoCard from '../TodoCard/TodoCard'

const TodosList = () => {
  const todos = useSelector(state => state.todos)

  return (
    <FlatList
      contentContainerStyle={tw`p-5`}
      data={todos}
      keyExtractor={todo => todo}
      ItemSeparatorComponent={() => <View style={tw`h-5`} />}
      ListEmptyComponent={() => (
        <Text style={tw`text-gray-400`}>No tasks for now...</Text>
      )}
      renderItem={({item, index}) => <TodoCard index={index}>{item}</TodoCard>}
    />
  )
}

export default TodosList
