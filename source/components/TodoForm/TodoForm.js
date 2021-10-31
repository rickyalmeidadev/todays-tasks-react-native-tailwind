import React, {useState} from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import {useDispatch} from 'react-redux'
import tw from 'twrnc'
import * as Actions from '../../store/todos/actions'

const TodoForm = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (!value.trim()) {
      return
    }

    dispatch(Actions.createTodo(value))
    setValue('')
    Keyboard.dismiss()
  }

  return (
    <KeyboardAvoidingView behavior={Platform.select({android: 'height', ios: 'padding'})}>
      <View style={tw`flex-row justify-between items-center bg-white shadow-md`}>
        <TextInput
          style={tw`h-full flex-1 bg-transparent px-5`}
          placeholder="Write a task"
          onChangeText={setValue}
          onSubmitEditing={handleSubmit}
          value={value}
        />
        <TouchableOpacity
          style={tw`w-14 h-14 bg-transparent items-center justify-center ml-5`}
          accessibilityRole="button"
          onPress={handleSubmit}
        >
          <Text style={tw`text-gray-400 text-xl`}>+</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default TodoForm
