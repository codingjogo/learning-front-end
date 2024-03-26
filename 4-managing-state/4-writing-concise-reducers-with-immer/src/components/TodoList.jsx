import React, { useState } from 'react'
import Input from './Input'
import { BeakerIcon, CheckCircleIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

// TODO
// - setup the styles for UI/UX

const TodoList = ({todos, onChangeTodo, onDeleteTask}) => {
  return (
    <ul className='w-[300px] flex flex-col gap-2 mt-6'>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} onChange={onChangeTodo} onDelete={onDeleteTask}/>
        </li>
      ))}
    </ul>
  )
}

const Todo = ({ todo, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <label>
      <input 
        type="checkbox"
        checked={todo.done}
        onChange={(e) => onChange({ ...todo, done: e.target.checked })}
      />
      {isEditing ? (
        <>
          <Input
            type="text"
            value={todo.text}
            onChange={(e) => onChange({ ...todo, text: e.target.value })}
          />
          <button onClick={() => setIsEditing(false)}><CheckCircleIcon className="h-6 w-6 text-blue-500" /></button>
        </>
      ) : (
        <>
          <Input
            type="text"
            value={todo.text}
            disabled
            onChange={(e) => onChange({ ...todo, text: e.target.value })}
          />
          <button onClick={() => setIsEditing(true)}><PencilSquareIcon className="h-6 w-6 text-blue-500" /></button>
        </>
      )}
      <button onClick={() => onDelete(todo.id)}>DELETE</button>
    </label>
  );
};



export default TodoList