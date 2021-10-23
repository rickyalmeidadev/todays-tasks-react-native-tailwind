import * as Types from './types'

export const createTodo = todo => ({
  type: Types.CREATE_TODO,
  payload: {todo}
})

export const deleteTodo = index => ({
  type: Types.DELETE_TODO,
  payload: {index}
})
