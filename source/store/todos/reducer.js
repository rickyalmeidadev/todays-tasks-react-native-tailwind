const INTITIAL_STATE = []

const reducer = (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return [...state, action.payload.todo]

    case 'DELETE_TODO':
      const copy = [...state]
      copy.splice(action.payload.index, 1)
      return copy

    default:
      return state
  }
}

export default reducer
