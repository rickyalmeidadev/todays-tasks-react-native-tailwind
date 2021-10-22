import React from 'react'
import {fireEvent, render} from '@testing-library/react-native'
import CreateTodoField from './CreateTodoField'

const makeProps = props => ({
  onChangeText: jest.fn(),
  onCreate: jest.fn(),
  value: 'foo bar',
  ...props
})

it('should render a textinput and a button to create a todo', () => {
  const props = makeProps()
  const screen = render(<CreateTodoField {...props} />)
  expect(screen.getByPlaceholderText(/write a task/i)).toBeTruthy()
  expect(screen.getByRole('button')).toBeTruthy()
})

it('should have the given value in the field', () => {
  const props = makeProps()
  const screen = render(<CreateTodoField {...props} />)
  expect(screen.getByDisplayValue(props.value)).toBeTruthy()
})

it('should call the given callbacks on change text and on press', () => {
  const props = makeProps()
  const screen = render(<CreateTodoField {...props} />)
  fireEvent.changeText(screen.getByPlaceholderText(/write a task/i), 'foo bar')
  fireEvent.press(screen.getByRole('button'))
  expect(props.onChangeText).toHaveBeenCalled()
  expect(props.onCreate).toHaveBeenCalled()
})
