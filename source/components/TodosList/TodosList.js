import React from 'react'
import {FlatList, Text, View} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {TodoCard} from '..'

const TodosList = ({todos, onDeleteTodo}) => (
  <FlatList
    contentContainerStyle={tw`p-5`}
    data={todos}
    keyExtractor={todo => todo}
    ItemSeparatorComponent={() => <View style={tw`h-5`} />}
    ListEmptyComponent={() => <Text style={tw`text-gray-400`}>No tasks for now...</Text>}
    renderItem={({item: todo}) => <TodoCard onPress={onDeleteTodo}>{todo}</TodoCard>}
  />
)

export default TodosList
