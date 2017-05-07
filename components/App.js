import AddTodo from '../containers/AddTodo';//括号到目前为止貌似是库方法才需要
import VisibleTodoList from '../containers/VisibleTodoList.js'
import Footer from './Footer';
import React from 'react';
var App = () => (//App就是React.CreateClass()+render()方法
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
);
export default App//这里相当于var App=function(){}当然const的意义就在于不能改变
/*首先做注释是可以的！！！
bundle.js:307 Uncaught Invariant Violation: Element type is invalid: expected a string (for built-in components) or
a class/function (for composite components) but got: undefined.
You likely forgot to export your component from the file it's defined in. Check the render method of `App`.
报这个错就是import进来的组件是不需要括号的
*/

//这个App是Component
// import React from 'react';
// import AddTodo from "../containers/AddTodo";
// import VisibleTodoList from "../containers/VisibleTodoList";
// import Footer from './Footer';
//
// const App = () => (
// 	<div>
// 		<AddTodo />
// 		<VisibleTodoList />
// 		<Footer />
// 	</div>
// );
//
// export default App;
