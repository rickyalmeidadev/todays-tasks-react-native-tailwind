import React from 'react'
import {render} from '@testing-library/react-native'
import TodoCard from './TodoCard'

it('should render the todo name', () => {
  const todo = 'foo bar'
  const screen = render(<TodoCard>{todo}</TodoCard>)
  expect(screen.getByText(todo)).toBeTruthy()
})
