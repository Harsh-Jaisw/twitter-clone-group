import React,{useEffect} from 'react'
// import MenuItems from "../../Components/Sections/Left/MenuItems"
// import Unknownuser from '../../Components/Sections/ProfileSection/Unknownuser'
// import RightSide from '../../Components/Sections/Right/RightSide'
import LeftSection from '../../Section/LeftSection/LeftSection'
import Tweetpost from '../../Section/ProfileSection/Tweetpost/Tweetpost'
import RightSection from '../../Section/RightSection/RightSection'
// import Tweetpost from '../../Components/Sections/ProfileSection/Tweetpost'
import style from "./Tweetreply.module.css"
function Tweetpage() {


  return (
    <div>
          <div className={style.Main}>

        <LeftSection />
      <div className={style.middleContainer}>
     <Tweetpost/> 
      </div>
      <div className={style.rightContainer}>
        <RightSection />
      </div>
    </div>
    </div>
  )
}

export default Tweetpage