import * as React from 'react'
const wrapper = (props) => { 
 console.log(props,"This is class name");
  return (
    <div className={props.className}>
        {props.children}
    </div>
  );
}

export default wrapper;
