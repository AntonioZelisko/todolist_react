import React, { useState } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodosList from './Components/TodosList'

const App = () => {

  const [state, setState] = useState([])

  const handleAdd = i => setState([i, ...state]);

  const handleEnd = id => {
    const newState = [...state];
    const states = newState.find(i => id === i.id);
    states.completed = !states.comleted;
    setState(newState)
  }

  const handleDelete = id => {
    const newState = [...state];
    const index = newState.findIndex(i => id === i.id);
    newState.splice(index, 1);
    setState(newState)
  }

  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoForm handleAdd={handleAdd}></TodoForm>
      <TodosList state={state} handleEnd={handleEnd} handleDelete={handleDelete}></TodosList>
    </div>
  );
}

export default App