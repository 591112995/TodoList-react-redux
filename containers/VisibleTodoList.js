import TodoList from '../components/TodoList.js';//组件不要
import {connect} from 'react-redux';
import {toggleTodo} from '../actions/index.js';//方法记得加括号
const getVisibleTodos = (todos,filter) =>{
  switch (filter) {
    case "SHOW_ALL"://最开始返回的是ALL
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter(t=>!t.completed);
    case "SHOW_COMPLETED":
      return todos.filter(t=>t.completed);//返回的是todo中completed为真的选项
  }
}
const mapStateToProps = (state)=>{
  return {
    todos : getVisibleTodos(state.todos,state.visibilityFilter)//返回筛选的
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    onTodoClick : (id)=>{
      dispatch(toggleTodo(id))
    }
  }
}
const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList);//把store的todos,visibilityFilter对象个dispatch方法封装好
export default VisibleTodoList;

// import React from 'react';
// import {connect} from "react-redux";
// import {toggleTodo} from "../actions";
// import TodoList from "../components/TodoList";
//
// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case "SHOW_ALL":
//       return todos;
//     case "SHOW_COMPLETED":
//       return todos.filter(t => t.completed)
//     case "SHOW_ACTIVE":
//       return todos.filter(t => !t.completed)
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }
//
// const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
//
// export default VisibleTodoList;
