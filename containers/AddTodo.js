import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../actions";

let AddTodo1 = ({dispatch})=>{
  let input;
  return(
    <div>
      <form onSubmit={e=>{
        e.preventDefault();
        if(!input.value.trim())
          return;
        dispatch(addTodo(input.value));
        input.value='';
      }}>
        <input ref={node=>{input=node}}/>{/*这种方法就避免了onchange和findDOMNode繁琐的操作*/}
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}
var AddTodo = connect()(AddTodo1);//这里为了说明connect方法是把父组件的方法属性传给后者

export default AddTodo;
// import React from 'react';
// import {connect} from "react-redux";
// import {addTodo} from "../actions";
//
// var AddTodo = ({dispatch}) => {
//   let input;
//   return (
//     <div>
//       <form onSubmit={e => {
//         e.preventDefault();
//         if (!input.value.trim()) {
//           return
//         }
//         dispatch(addTodo(input.value))
//         input.value = ""
//       }}>
//         <input ref={node => {
//           input = node
//         }}/>
//         <button type="submit">
//           Add Todo
//         </button>
//       </form>
//     </div>
//   );
// }
// AddTodo = connect()(AddTodo);
//
// export default AddTodo;
