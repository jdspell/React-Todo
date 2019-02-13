import React from 'react';
import TodoList from 'TodoList';
import Todo from 'Todo';
import TodoForm from 'TodoForm';


const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change 
  // handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todos: todos,
    }
  }

  render() {
    return (
      <div>
        <div className="list-items">
        {/*Creates a todo for every item in the todo array.*/}
        {this.state.todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
