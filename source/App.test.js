import React from 'react'
import {fireEvent, render} from '@testing-library/react-native'
import App from './App'

it('should render a screen title', () => {
  const screen = render(<App />)
  expect(screen.getByRole('header')).toHaveTextContent(/today's tasks/i)
})

it('should render a form to create a todo', () => {
  const screen = render(<App />)
  expect(screen.getByPlaceholderText(/write a task/i)).toBeTruthy()
  expect(screen.getByRole('button')).toBeTruthy()
})

it('should render a message when there are no todos in screen', () => {
  const screen = render(<App />)
  expect(screen.getByText(/no tasks for now/i)).toBeTruthy()
})

it('should be able to create many todos', async () => {
  const todos = ['foo', 'bar']
  const screen = render(<App />)
  const inputElement = screen.getByPlaceholderText(/write a task/i)
  const buttonElement = screen.getByRole('button')
  todos.forEach(todo => {
    fireEvent.changeText(inputElement, todo)
    fireEvent.press(buttonElement)
    expect(screen.getByText(todo)).toBeTruthy()
    expect(inputElement).toHaveProp('value', '')
  })
})

it('should not be able to create a todo with an empty value', async () => {
  const todo = 'foo bar'
  const screen = render(<App />)
  fireEvent.press(screen.getByRole('button'))
  expect(screen.queryByText(todo)).toBeNull()
})

it('should remove the todo on press', async () => {
  const todo = 'foo bar'
  const screen = render(<App />)
  const inputElement = screen.getByPlaceholderText(/write a task/i)
  fireEvent.changeText(inputElement, todo)
  fireEvent.press(screen.getByRole('button'))
  fireEvent.press(screen.getByText(todo))
  expect(screen.queryByText(todo)).toBeNull()
})
