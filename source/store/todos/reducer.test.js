import reducer from './reducer'
import * as Actions from './actions'

it('should return the intitial state for unhandled action types', () => {
  const action = {type: 'unhandled'}
  const actual = reducer(undefined, action)
  const expected = []
  expect(actual).toEqual(expected)
})

it('should handle a action to create a todo with the provided payload', () => {
  const todo = 'foo bar'
  const expected = [todo]
  expect(reducer(undefined, Actions.createTodo(todo))).toEqual(expected)
})

it('should handle a action to delete a todo by its index position', () => {
  const actual = reducer(['foo', 'bar', 'qux'], Actions.deleteTodo(1))
  const expected = ['foo', 'qux']
  expect(actual).toEqual(expected)
})
