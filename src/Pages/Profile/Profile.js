import React from 'react'
import Style from './Profile.module.css' 
import LeftSection from '../../Section/LeftSection/LeftSection'
import MidSection from '../../Section/MidSection/MidSection'
import RightSection from '../../Section/RightSection/RightSection'
import ProfileSection from '../../Section/ProfileSection/ProfileSection'
 function Profile() {
 
  return (
    <div className={Style.homeDiv}>
      <div className={Style.leftDiv}><LeftSection/></div>
      <div className={Style.midDiv}><ProfileSection /></div>
      <div className={Style.rightDiv}><RightSection /></div>
    </div>
  )
 }

 export default Profile