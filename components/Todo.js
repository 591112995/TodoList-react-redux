// import React from 'react';
// export const Todo = ({onClick,text,completed})=>{
//   <li onClick={onClick} style={{textDecoration:completed?"line-through":"none"}}>
//     {text}
//   </li>
// }
import React from 'react';

const Todo = ({
	onClick,
	completed,
	text
}) => (
	<li onClick={onClick} style={{textDecoration:completed ? "line-through" : "none",
	cursor: completed ? 'default' : 'pointer'}}>
		{text}
	</li>
)

export default Todo;
