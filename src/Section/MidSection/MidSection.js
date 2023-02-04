import React from 'react'
import MidNav from '../../Component/MidNav/MidNav'
import HomeScrol from '../HomeScrol/HomeScrol'
import style from './MidSection.module.css'
function MidSection() {
  return (
    <div className={style.bigDiv}>
      {/* MID */}
      <MidNav/>
      <HomeScrol/>
    </div>
  )
}

export default MidSection
