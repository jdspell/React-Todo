import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTask}>
            <input
                type="text"
                value={props.task}
                onChange={props.changeInTaskList}
                name="task"
                placeholder="New Task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TodoForm;