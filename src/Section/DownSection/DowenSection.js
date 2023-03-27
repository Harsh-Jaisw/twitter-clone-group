
import Buttons from '../../Atom/Button/Buttons'
import style from './DownSection.module.css'
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from '@mui/icons-material/Search';

import React from 'react'

function DowenSection() {
  return (
    <div className={style.mainDiv}>
         <HomeIcon style={{  fontSize:'35px'}}/>
     <NotificationsNoneOutlinedIcon style={{  fontSize:'35px'}}/>
     <SearchIcon style={{  fontSize:'35px'}}/>
     <EmailOutlinedIcon style={{  fontSize:'35px'}}/>
      
    </div>
  )
}

export default DowenSection