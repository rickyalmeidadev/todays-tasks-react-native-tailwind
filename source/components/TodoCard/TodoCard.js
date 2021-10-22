import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import tw from 'tailwind-react-native-classnames'

const TodoCard = ({children, index, onPress}) => (
  <TouchableOpacity
    style={tw`w-full h-14 flex-row items-center p-4 bg-white rounded-lg border border-gray-100 shadow-md`}
    onPress={() => onPress(index)}
  >
    <View style={tw`w-6 h-6 bg-blue-200 rounded-md`} />
    <Text style={tw`flex-1 ml-4`}>{children}</Text>
    <View style={tw`w-3 h-3 bg-transparent rounded-sm border-2 border-blue-400`} />
  </TouchableOpacity>
)

export default TodoCard
