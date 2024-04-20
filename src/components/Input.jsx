import React from 'react'

const Input = ({type,id,name,onChange,placeholder,defaultValue}) => {
  return (
    <input className ="h-10 w-full border rounded-md outline-none mt-3 p-2" 
    type={type} id={id} name={name} onChange={onChange} placeholder={placeholder} defaultValue={defaultValue}/>
  )
}

export default Input
