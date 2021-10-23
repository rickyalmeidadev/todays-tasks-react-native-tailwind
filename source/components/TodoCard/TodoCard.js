import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import {useDispatch} from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import * as Actions from '../../store/todos/actions'

const TodoCard = ({children, index}) => {
  const dispatch = useDispatch()

  const handlePress = () => dispatch(Actions.deleteTodo(index))

  return (
    <TouchableOpacity
      style={tw`w-full h-14 flex-row items-center p-4 bg-white rounded-lg border border-gray-100 shadow-md`}
      onPress={handlePress}
    >
      <View style={tw`w-6 h-6 bg-blue-200 rounded-md`} />
      <Text style={tw`flex-1 ml-4`}>{children}</Text>
      <View style={tw`w-3 h-3 bg-transparent rounded-sm border-2 border-blue-400`} />
    </TouchableOpacity>
  )
}

export default TodoCard
