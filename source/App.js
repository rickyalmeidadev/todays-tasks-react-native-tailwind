import React from 'react'
import {Text, View} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import tw from 'tailwind-react-native-classnames'

const App = () => (
  <>
    <StatusBar style="auto" />
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  </>
)

export default App
