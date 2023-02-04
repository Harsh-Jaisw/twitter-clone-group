import React from 'react'
import style from './MidNav.module.css'
import Buttons from "../../Atom/Button/Buttons"
function MidNav() {
  return (
    <div className={style.NavDiv}>
      <nav>
       <h2>Home</h2>
        <Buttons className={style.Btns} Sign="For You"/>
        <Buttons className={style.Btns} Sign="Following"/>
    
      </nav>
    </div>
  )
}

export default MidNav
