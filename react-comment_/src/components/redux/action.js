/**
 * redux action 针对reducers 函数封装
 */
import { ADD_COMMENT, DEL_COMMENT, COMMENT_ASYNC } from './action-type'
 //增加
export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})

//删除
export const delComment = (index) => ({type: DEL_COMMENT, data: index})

//模拟异步请求
const commentAsync = (comments) => ({type: COMMENT_ASYNC, data: comments})

export const commentAsyncRequest = () =>{
    return dispatch =>{
        setTimeout(() =>{
            //模拟异步请求分发
            const comments = [
                {userName:'Tom', content:'Reant挺难的'},
                {userName:'Jack', content:'Reant很简单'}
            ]
            dispatch(commentAsync(comments))
        },1000)
    }
}