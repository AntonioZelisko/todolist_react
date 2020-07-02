import React from 'react';
//import Todo from '../Components/Todo'

const TodoList = props => {

    const handleEnd = e => {
        props.handleEnd(e)
    }

    const handleDelete = (e, id) => {
        e.stopPropagation();
        props.handleDelete(id)
    }

    return (
        <ul className="list-group">
            {
                props.state.map(todo => {
                    return (
                        <li key={todo.id}
                            className={todo.completed ? "Barred" : ""}
                            onClick={() => handleEnd(todo.id)}
                        >
                            {todo.title}
                            <button onClick={e => handleDelete(e, todo.id)} className="btn btn-light">x</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList