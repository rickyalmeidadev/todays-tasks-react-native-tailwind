import React from 'react'
import {Text, SafeAreaView, FlatList, View, TouchableOpacity} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import tw from 'tailwind-react-native-classnames'

const todos = ['Like 👍', 'Comment 📢', 'Subscribe 🙃']

const App = () => (
  <>
    <StatusBar style="auto" />
    <SafeAreaView style={tw`bg-gray-200 flex-1`}>
      <Text style={tw`ml-5 mt-10 mb-5 font-bold text-2xl`}>Today’s tasks</Text>
      <FlatList
        contentContainerStyle={tw`p-5`}
        data={todos}
        keyExtractor={todo => todo}
        ItemSeparatorComponent={() => <View style={tw`h-5`} />}
        renderItem={({item: todo}) => <TodoCard>{todo}</TodoCard>}
      />
    </SafeAreaView>
  </>
)

const TodoCard = ({children}) => (
  <TouchableOpacity
    style={tw`w-full h-14 flex-row items-center p-4 bg-white rounded-lg border border-gray-100 shadow-md`}
  >
    <View style={tw`w-6 h-6 bg-blue-200 rounded-md`} />
    <Text style={tw`flex-1 ml-4`}>{children}</Text>
    <View style={tw`w-3 h-3 bg-transparent rounded-sm border-2 border-blue-400`} />
  </TouchableOpacity>
)

export default App
