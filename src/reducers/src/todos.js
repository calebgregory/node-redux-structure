import { createReducer } from '../../utils'
import * as ActionTypes from '../../constants'

export const todos = createReducer([], {

  [ActionTypes.ADD_TODO](state, action) {
    const { text } = action
    const todo = { id: state.length, text }

    return [ ...state, todo]
  },

  [ActionTypes.EDIT_TODO](state, action) {
    const { text, id } = action

    return [
      ...state.slice(0, id),
      { id, text },
      ...state.slice(id +1)
    ]
  },

  [ActionTypes.REMOVE_TODO](state, action) {
    const { id } = action

    return [
      ...state.slice(0, id),
      ...state.slice(id +1)
    ]
  }
})
