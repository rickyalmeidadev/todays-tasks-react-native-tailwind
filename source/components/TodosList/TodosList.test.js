import React from 'react'
import {Provider} from 'react-redux'
import {render} from '@testing-library/react-native'
import store from '../../store'
import TodosList from './TodosList'

const todos = ['foo', 'bar', 'qux']

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => todos
}))

const wrapper = ({children}) => <Provider store={store}>{children}</Provider>

it('should render todos passed by props', () => {
  const screen = render(<TodosList />, {wrapper})
  todos.forEach(todo => expect(screen.getByText(todo)).toBeTruthy())
})
