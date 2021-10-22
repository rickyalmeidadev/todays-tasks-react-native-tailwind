import React from 'react'
import {render} from '@testing-library/react-native'
import App from './App'

it('should render the initial message', () => {
  const screen = render(<App />)
  const regexp = /open up app\.js to start working on your app!/i
  expect(screen.getByText(regexp)).toBeTruthy()
})
