import { expect, reducers, ActionTypes } from '../util'

const { todos } = reducers

describe('reducers', () => {
  describe('todos', () => {
    it('handles ADD_TODO', () => {
      const text = 'some text'
      const action = {
        type: ActionTypes.ADD_TODO,
        text
      }

      const state = todos([], action)

      expect(state).to.eql([ { id: 0, text } ])
    })

    it('handles EDIT_TODO', () => {
      const id = 0
      const text = 'some diff text'
      const action = {
        type: ActionTypes.EDIT_TODO,
        id,
        text
      }

      const state = todos([{ id: 0, text: 'some text' }], action)

      expect(state).to.eql([ { id: 0, text } ])
    })

    it('handles REMOVE_TODO', () => {
      const id = 0
      const action = {
        type: ActionTypes.REMOVE_TODO,
        id
      }

      const state = todos([{ id: 0, text: 'some text' }], action)

      expect(state).to.eql([])
    })
  })
})
