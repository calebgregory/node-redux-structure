import { expect, Actions, ActionTypes } from '../util'

describe('actions', () => {
  describe('ADD_TODO', () => {
    it('takes a text and creates a todo action with that text', () => {
      const text = 'some text'
      const expectedAction = {
        type: ActionTypes.ADD_TODO,
        text
      }

      expect(Actions.addTodo(text)).to.eql(expectedAction)
    })
  })
})
