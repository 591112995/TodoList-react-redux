let nextTodoId = 0;
export const addTodo = text =>{//用户添加的行为，告诉reducer是添加并且ID和text是什么
  return{
    type:"ADD_TODO",
    id:nextTodoId++,
    text
  }
}
export const toggleTodo = id =>{//切换，根据当前待办项的id
  return {
    type :"TOGGLE_TODO",
    id
  }
}
export const setVisibility = filter =>{//设置过滤
  return {
    type :"SET_VISIBILITY",
    filter
  }
}

// let nextTodoId = 0;
//
// /* 添加 */
// export const addTodo = (text) => {
// 	return {
// 		type: 'ADD_TODO', // 必填
// 		id: nextTodoId++,
// 		text
// 	}
// }
//
// /* 底部显示状态 */
// export const setVisibility = (filter) => {
// 	return {
// 		type: "SET_VISIBILITY",
// 		filter
// 	}
// }
//
// /* 触发 */
// export const toggleTodo = (id) => {
// 	return {
// 		type: "TOGGLE_TODO",
// 		id
// 	}
// }
