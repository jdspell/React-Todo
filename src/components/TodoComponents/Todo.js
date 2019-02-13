import React from 'react';

function Todo(props) {
    return (
        <div className="todo-item">
            <p><strong>task:</strong> {props.todo.task}</p>
            <p><strong>id:</strong> {props.todo.id}</p>
            <p><strong>completed:</strong> {props.todo.completed}</p>
        </div>
        
    );
}

export default Todo;