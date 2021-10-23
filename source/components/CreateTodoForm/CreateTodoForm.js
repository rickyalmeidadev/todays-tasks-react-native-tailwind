import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import tw from 'tailwind-react-native-classnames'

const CreateTodoForm = ({onChangeText, onSubmit, value}) => (
  <KeyboardAvoidingView behavior={Platform.select({android: 'height', ios: 'position'})}>
    <View style={tw`flex-row justify-between items-center bg-white shadow-md`}>
      <TextInput
        style={tw`h-full flex-1 bg-transparent px-5`}
        placeholder="Write a task"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        value={value}
      />
      <TouchableOpacity
        style={tw`w-14 h-14 bg-transparent items-center justify-center ml-5`}
        accessibilityRole="button"
        onPress={onSubmit}
      >
        <Text style={tw`text-lg text-gray-400 text-xl`}>+</Text>
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
)

export default CreateTodoForm
