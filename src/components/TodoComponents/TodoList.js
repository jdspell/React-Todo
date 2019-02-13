import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div className="list-items">
            {/*Creates a todo for every item in the todo array.*/}
            {props.todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
            ))}
        </div>
    );
}

export default TodoList;