import { expect, Actions, ActionTypes } from '../util'

describe('actions', () => {
  describe('EDIT_TODO', () => {
    it('takes a text and creates a todo action with that text', () => {
      const id = 0
      const text = 'some text'
      const expectedAction = {
        type: ActionTypes.EDIT_TODO,
        id,
        text
      }

      expect(Actions.editTodo(id, text)).to.eql(expectedAction)
    })
  })
})
