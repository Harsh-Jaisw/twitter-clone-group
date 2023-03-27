import React from 'react'
import style from './MidNav.module.css'
import Buttons from "../../Atom/Button/Buttons"
import DrawerProfile from '../../Section/DrawerProfile/DrawerProfile'
function MidNav() {
  return (
    <div className={style.NavDiv}>
      <nav>
       <h2 className={style.home}>Home</h2>
   <span className={style.drawer}>  <DrawerProfile /></span> 
        <Buttons className={style.Btns} Sign="For You"/>
        <Buttons className={style.Btns} Sign="Following"/>
    
      </nav>
    </div>
  )
}

export default MidNav
