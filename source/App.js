import React from 'react'
import {Text, SafeAreaView, FlatList, View} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import tw from 'tailwind-react-native-classnames'
import {TodoCard} from './components'

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

export default App
