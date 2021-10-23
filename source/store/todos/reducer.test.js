import reducer from './reducer'

it('should return the intitial state for unhandled action types', () => {
  const action = {type: 'unhandled'}
  expect(reducer(undefined, action)).toEqual([])
})

it('should handle a action to create a todo with the provided payload', () => {
  const todo = 'foo bar'
  expect(reducer(undefined, {type: 'CREATE_TODO', payload: {todo}})).toEqual([todo])
})

it('should handle a action to delete a todo by its index position', () => {
  expect(
    reducer(['foo', 'bar', 'qux'], {type: 'DELETE_TODO', payload: {index: 1}})
  ).toEqual(['foo', 'qux'])
})
