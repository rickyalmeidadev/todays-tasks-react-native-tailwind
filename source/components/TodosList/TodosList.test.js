import React from 'react'
import {render} from '@testing-library/react-native'
import TodosList from './TodosList'

it('should render todos passed by props', () => {
  const props = {todos: ['foo', 'bar', 'qux'], onDeleteTodo: jest.fn()}
  const screen = render(<TodosList {...props} />)
  props.todos.forEach(todo => expect(screen.getByText(todo)).toBeTruthy())
})
