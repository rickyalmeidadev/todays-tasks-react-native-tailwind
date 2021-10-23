import React from 'react'
import {Provider} from 'react-redux'
import {fireEvent, render} from '@testing-library/react-native'
import store from '../../store'
import * as Actions from '../../store/todos/actions'
import TodoForm from './TodoForm'

const mockedDispatch = jest.fn()

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockedDispatch
}))

const wrapper = ({children}) => <Provider store={store}>{children}</Provider>

afterEach(jest.clearAllMocks)

it('should render a textinput and a button to create a todo', () => {
  const screen = render(<TodoForm />, {wrapper})
  expect(screen.getByPlaceholderText(/write a task/i)).toBeTruthy()
  expect(screen.getByRole('button')).toBeTruthy()
})

it('should dispatch an action to create a todo when form is filled', async () => {
  const value = 'foo bar'
  const screen = render(<TodoForm />, {wrapper})
  fireEvent.changeText(screen.getByPlaceholderText(/write a task/i), value)
  fireEvent.press(screen.getByRole('button'))
  expect(mockedDispatch).toHaveBeenCalledWith(Actions.createTodo(value))
})

it('should not dispatch an action to create a todo when form is empty', () => {
  const screen = render(<TodoForm />, {wrapper})
  fireEvent.press(screen.getByRole('button'))
  expect(mockedDispatch).not.toHaveBeenCalled()
})
