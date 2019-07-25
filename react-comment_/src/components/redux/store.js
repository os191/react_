/**
 * redux 仓库 store
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { comments } from './reducers'
//创建仓库
export default createStore(comments , applyMiddleware(thunk))