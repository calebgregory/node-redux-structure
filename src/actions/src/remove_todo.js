import { makeActionCreator } from '../../utils'
import { REMOVE_TODO } from '../../constants'

export const removeTodo = makeActionCreator(REMOVE_TODO, 'id')
