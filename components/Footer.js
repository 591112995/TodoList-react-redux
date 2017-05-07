import FilterLink from '../containers/FilterLink';
import React from 'react';
const Footer = ()=>(
  <p>
    SHOW:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {" "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>{" "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
  </p>
)
export default Footer;
// import React from 'react';
// import FilterLink from '../containers/FilterLink';
//
// const Footer = () => (
// 	<p>
// 		<FilterLink filter="SHOW_ALL">
// 			All
// 		</FilterLink>
// 		{","}
// 		<FilterLink filter="SHOW_ACTIVE">
// 			Active
// 		</FilterLink>
// 		{","}
// 		<FilterLink filter="SHOW_COMPLETED">
// 			Completed
// 		</FilterLink>
// 	</p>
// )
//
// export default Footer;
