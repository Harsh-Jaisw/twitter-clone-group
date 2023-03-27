import React from 'react'
import MinLeft from '../../MinLeft/MinLeft'
import LeftSection from '../../Section/LeftSection/LeftSection'
import Unknownuser from '../../Section/ProfileSection/Unknownuser/Unknownuser'
import RightSection from '../../Section/RightSection/RightSection'
import Style from "./Profile2.module.css"
function Profile2() {
  return (
    <div className={Style.Main}>
       <div className={Style.minLeft}><MinLeft /></div>
    <div className={Style.container}><LeftSection/></div>
    <div className={Style.middleContainer}><Unknownuser/></div>
    <div className={Style.rightContainer}><RightSection/></div>
    
  </div>
  )
}

export default Profile2
