import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


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
      task: '',
      id: Date.now(),
      completed: false
    };
  }
  
  addTask = e => {
    e.preventDefault();
    console.log(e);
    const newTask = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    }
    
    this.setState({
      todos: [...this.state.todos, newTask],
      task: "",
      id: Date.now(),
      completed: false
    });
    this.forceUpdate();
  };

  changeInTaskList = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}/>
        <TodoForm 
        addTask={this.addTask}
        changeInTaskList={this.changeInTaskList}
        task={this.state.task}
        id={this.state.id}
        completed={this.state.completed}
        />
      </div>
    );
  }
}

export default App;
