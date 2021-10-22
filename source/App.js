import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {StatusBar} from 'expo-status-bar'

const App = () => (
  <>
    <StatusBar style="auto" />
    <View style={styles.view}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  </>
)

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
