
import React from "react";
import { MDBCheckbox } from 'mdb-react-ui-kit';
const todos=["gotogym","do laundry","food shopping","do homework"];

// const deleteToDo = value =>{
//     this.setState(prevState => ({
//         todos:prevState.todos.filter( todo => todo!=value)
//     }))
// }

const ToDo = props=> 
<li onClick={()=>props.deleteToDo(props.todo)}>{props.todo}</li>
 
 const ToDoList = props => (
    <ul>
      {props.todos.map(todo => (
        <ToDo todo={todo} key={todo} />
      ))}
    </ul>
  );


export default ToDoList;
