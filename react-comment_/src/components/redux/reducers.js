/**
 * redux 定义仓库函数
 * 
 */
import { ADD_COMMENT, DEL_COMMENT, COMMENT_ASYNC} from './action-type'

const initComments = []
export function comments(state = initComments, action){
    console.log('comment',state,action)
    switch(action.type){
        case ADD_COMMENT:
            return [action.data,...state];
        case DEL_COMMENT:
            return state.filter((comment,index) => index !== action.data)   
        case COMMENT_ASYNC:
            return action.data
        default:
            return state
    }
}