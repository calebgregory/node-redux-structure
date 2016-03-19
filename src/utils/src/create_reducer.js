export const createReducer = (initialState, handlers) =>
  (state = initialState, action) => {
    const { type } = action
    if( handlers.hasOwnProperty(type) ) {
      return handlers[type](state, action)
    }
    return state
  }
