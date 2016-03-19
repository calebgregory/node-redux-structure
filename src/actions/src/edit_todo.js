import { makeActionCreator } from '../../utils'
import { EDIT_TODO } from '../../constants'

export const editTodo = makeActionCreator(EDIT_TODO, 'id', 'text')
