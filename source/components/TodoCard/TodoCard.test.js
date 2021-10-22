import React from 'react'
import {fireEvent, render} from '@testing-library/react-native'
import TodoCard from './TodoCard'

const makeProps = props => ({children: 'foo bar', index: 0, onPress: jest.fn(), ...props})

it('should render the todo name', () => {
  const props = makeProps()
  const screen = render(<TodoCard {...props} />)
  expect(screen.getByText(props.children)).toBeTruthy()
})

it('should call the given callback with the todo index on press', () => {
  const props = makeProps()
  const screen = render(<TodoCard {...props} />)
  fireEvent.press(screen.getByText(props.children))
  expect(props.onPress).toHaveBeenCalledWith(0)
})
