import React, { useState } from 'react'

const AddTodo = ({onAddTodo}) => {
    const [newTodo, setNewTodo] = useState('');
  return (
    <>
        <input className='w-[300px] py-2 px-2 border-2 border-black rounded-md' type="text" placeholder='Add todo here...' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button className='w-[300px] py-2 px-12 text-white bg-slate-500 hover:bg-slate-400 rounded-md' onClick={(e) => onAddTodo(newTodo)}>ADD TODO</button>
    </>
  )
}

export default AddTodo