//1.创建仓库
//2.构建reducer
//3.构建action改变状态

import {createStore} from 'redux'

export default createStore((state=[],action)=>{
  switch(action.type){
    case 'add_house': return [...new Set([action.obj,...state])]

    default: return state
  }
})