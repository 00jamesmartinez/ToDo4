import React from "react";
import ToDoList from "./todolist";
import TodoForm from './todoform';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Finish homework", "Wash dishes", "Clean room", "Make waffles"],
    };
  }

  addTodo = todo => {
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }));
  };
  
  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <ToDoList todos={this.state.todos} />
        <TodoForm addTodo={this.addTodo} />

      </div>
    );
  }
}
export default App;