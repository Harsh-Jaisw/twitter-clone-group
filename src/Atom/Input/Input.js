import React from 'react'
import { useState } from 'react'
function Input({text,className,handleOnchange,type}) {
  
  return (
    <div>
      <input className={className} placeholder={text} type={type} onChange={(e)=>handleOnchange(e.target.value)}/>
    </div>
  )
}

export default Input
