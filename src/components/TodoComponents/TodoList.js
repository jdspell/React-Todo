import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    console.log("TodoList:", props.todos);
    return (
        <div className="list-items">
            {/*Creates a todo for every item in the todo array.*/}
            {props.todos.map((todo, index) => (
            <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

export default TodoList;