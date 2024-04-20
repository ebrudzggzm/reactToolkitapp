import React from 'react'

const Button = ({onClick,btnText}) => {
  return (
    <div className='flex justify-center items-center py-3 '>
      <button className='bg-indigo-800 p-2 w-full text-slate-50 rounded-md hover:bg-red-200  hover:text-slate-900'  onClick={onClick}>{btnText}</button>
    </div>
  )
}

export default Button
