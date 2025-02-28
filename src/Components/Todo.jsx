import React, { useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'
const Todo = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md min-h-[550px] rounded-xl p-7 flex flex-col'>
        {/* head */}
        <div className='flex items-center gap-2 mt-7'>
            <img className='w-8' src={todo_icon} alt="todo_icon" />
            <h1 className='text-3xl font-semibold'>Todo-List</h1>
        </div>
        {/* input */}

        <div className='flex items-center my-7 bg-gray-200 rounded-full'>

            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your Task' />

            <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add +</button>

        </div>

        {/* todolist */}
        <div>
          <Todoitems text="items" />
        </div>
    </div>
  )
}

export default Todo