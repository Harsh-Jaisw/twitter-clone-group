import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import Buttons from '../Atom/Button/Buttons'
import style from './MinLeft.module.css'
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import {arrs} from '../../src/const'
import React from 'react'

function MinLeft() {
  return (
    <div className={style.mainDiv}>
         
      {arrs.map((arr, index) => {
            return (
              <>
                <div key={index} className={style.smallIcons}>
                  
             
                    {arr.icon}
               
                  
              
                </div>
              </> 
             );
           })} 
      
    </div>
  )
}

export default MinLeft
