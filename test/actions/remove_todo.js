import { expect, Actions, ActionTypes } from '../util'

describe('actions', () => {
  describe('REMOVE_TODO', () => {
    const id = 0
    const expectedAction = {
      type: ActionTypes.REMOVE_TODO,
      id
    }

    expect(Actions.removeTodo(id)).to.eql(expectedAction)
  })
})
