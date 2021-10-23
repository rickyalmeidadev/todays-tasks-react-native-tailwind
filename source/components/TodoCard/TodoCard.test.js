import React from 'react'
import {Provider} from 'react-redux'
import {fireEvent, render} from '@testing-library/react-native'
import store from '../../store'
import * as Actions from '../../store/todos/actions'
import TodoCard from './TodoCard'

const mockedDispatch = jest.fn()

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockedDispatch
}))

const wrapper = ({children}) => <Provider store={store}>{children}</Provider>

const props = {children: 'foo bar', index: 0}

afterEach(jest.clearAllMocks)

it('should render the todo name', () => {
  const screen = render(<TodoCard {...props} />, {wrapper})
  expect(screen.getByText(props.children)).toBeTruthy()
})

it('should dipatch an action to delete the todo when pressed', () => {
  const screen = render(<TodoCard {...props} />, {wrapper})
  fireEvent.press(screen.getByText(props.children))
  expect(mockedDispatch).toHaveBeenCalledWith(Actions.deleteTodo(props.index))
})
