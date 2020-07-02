import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

const TodoForm = props => {

    const [state, setState] = useState("")

    const handleState = e => setState(e.target.value);

    const handleAdd = () => {
        props.handleAdd({
            id: uuidv4(),
            title: state,
            completed: false
        })
        setState("")
    }

    return (
            <div className="row">
                <div className="col-md-12">
                    <div className="main-todo-input-wrap">
                        <div className="main-todo-input fl-wrap">
                            <div className="main-todo-input-item"> <input type="text" id="todo-list-item" onChange={handleState} value={state} />
                                <button onClick={handleAdd} className="add-items main-search-button">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TodoForm