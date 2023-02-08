import React from 'react'
import Style from './Home.module.css'
import { useNavigate } from 'react-router-dom'
import {isLoginAtom } from '../../Recoil/atom'
import {useRecoilValue} from "recoil"
import LeftSection from '../../Section/LeftSection/LeftSection'
import MidSection from '../../Section/MidSection/MidSection'
import RightSection from '../../Section/RightSection/RightSection'
import { useEffect } from 'react'
function Home() {
  const isLoggedIn=useRecoilValue(isLoginAtom)
  // console.log(isLoggedIn)
  const navigate=useNavigate()
  useEffect(()=>{
   if(!isLoggedIn){
    navigate("/login")
   }
  },[])
  return (
    <div className={Style.homeDiv}>
      <div className={Style.leftDiv}><LeftSection/></div>
      <div className={Style.midDiv}><MidSection /></div>
      <div className={Style.rightDiv}><RightSection /></div>
    </div>
  )
}

export default Home