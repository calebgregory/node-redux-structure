import { makeActionCreator } from '../../utils'
import { ADD_TODO } from '../../constants'

export const addTodo = makeActionCreator(ADD_TODO, 'text')
