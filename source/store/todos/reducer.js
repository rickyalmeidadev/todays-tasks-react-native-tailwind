import * as Types from './types'

const INTITIAL_STATE = []

const reducer = (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case Types.CREATE_TODO:
      return [action.payload.todo, ...state]

    case Types.DELETE_TODO:
      const copy = [...state]
      copy.splice(action.payload.index, 1)
      return copy

    default:
      return state
  }
}

export default reducer
