import React, { useState } from 'react';
import { useImmerReducer } from "use-immer";
import { todosReducer } from './reducers/todosReducer';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

function App() {
  const [todos, dispatch] = useImmerReducer(todosReducer, initialTasks)
  const handleAddTodo = (text) => {
    dispatch({
      type: 'ADD_TODO',
      id: nextId++,
      text: text,
    })
  }

  const handleChangeTodo = (todo) => {
    dispatch({
      type: 'CHANGED_TODO',
      todo: todo,
    })
  }

  const handleDeleteTodo = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      id: id
    })
  }

  return (
    <>
      <main className='h-screen flex flex-col items-center justify-center gap-2'>

        <h1 className='text-4xl'>YOUR TODO:</h1>

        <AddTodo 
        onAddTodo={handleAddTodo}
        />

        <TodoList todos={todos} onChangeTodo={handleChangeTodo} onDeleteTask={handleDeleteTodo}/>
      </main>
    </>
  );
}

export default App;
