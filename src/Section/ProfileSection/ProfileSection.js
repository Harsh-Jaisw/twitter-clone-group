import React,{useState} from "react";
import style from "./ProfileSection.module.css";
import { useNavigate } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import { newtweet,indexAtom } from "../../Recoil/atom";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import Buttons from "../../Atom/Button/Buttons";
import { Avatar } from "@mui/material";
import { FiShare } from "react-icons/fi";
import { MdOutlinePoll } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useRecoilState, useRecoilValue } from "recoil";

function ProfileSection() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(100);
  const nevigate = useNavigate();
  const Data=JSON.parse(localStorage.getItem("UserDetail"))
  let tweets=useRecoilValue(newtweet)
  let index=useRecoilValue(indexAtom)
 
  function addCount(i) {
  
   
    if (count === 100) {
      setCount(101);
    } else if (count == 101) setCount(100);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.feed__header}>
          <span onClick={() => nevigate("/home")}>
            <WestIcon />
          </span>
          <div className={style.dta}>
          <span>{Data[index].name}</span>
          <span style={{fontWeight:"100",fontSize:"15px"}}>{tweets.length} Tweet</span></div>
        </div>
        <img
          className={style.container}
          src="https://timelinecovers.pro/facebook-cover/download/joker-movie-facebook-cover.jpg"
        />
        <div>
          <span className={style.Avatarsection}>
            <img
              className={style.img}
              src="https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg"
            />
            <Buttons className={style.btn} Sign={"Edit profile"} />
          </span>
        </div>

        <div className={style.textcontaint}>
          <span className={style.name}>{`${Data[index].name}`}</span>
          <span>{`${Data[index].email}`}</span>
          <span className={style.join}><CalendarMonthOutlinedIcon/> Joined January 2022</span>
          <div className={style.follow}>
          <span>2000following</span>
          <span>200000followers</span></div>
        </div>
        <div className={style.heading}>
        <span>Tweets</span>
        <span>Tweets&replies</span>
        <span>Media</span>
        <span>Likes</span> </div>
        {tweets.map((tweetPost)=>{
        return<>
        <div key={tweetPost.id} className={style.maindiv}>
          <div className={style.container}>
            <div 
            
         > <Avatar   className={style.profile} src={tweetPost.profile} /></div>
            <div className={style.namecss}>
              <div>
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "15px",
                    paddingRight: ".3rem",
                  }}
                >
                  {tweetPost.name}
                  <GoVerified
                    style={{ color: "#00acee", fontSize: "14px" }}
                  />
                </span>{" "}
                {tweetPost.handlerName}
              </div>
            </div>
          </div>
          <p className={style.paraorg}>{tweetPost.organization}</p>
          <p className={style.para}>{tweetPost.tweetText}</p>
          <div>
            {<img src={tweetPost.tweetPic} className={style.picdiv} />}
          </div>

          <span>
            <Dialog open={open} onClose={handleClose}>
              <img
                src="https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg"
                alt=""
                className={style.Photo1}
              />

              <textarea
                className={style.ForTweet}
                placeholder="What is happening ?"
              />
              <DialogActions>
                <Buttons
                  className={style.btnTweet}
                  btnNext={handleClose}
                  Sign={"Reply"}
                />
              </DialogActions>
            </Dialog>
            <div className={style.socialbtn}>
              <Buttons
                className={style.btns}
                btnNext={handleClickOpen}
                image={<FaRegComment style={{ fontSize: "15px" }} />}
              />
              <Buttons
                className={style.btns}
                image={<AiOutlineRetweet style={{ fontSize: "15px" }} />}
              />
              <div>
                <Buttons
                 
                  className={style.btns}
                  image={
                    <CiHeart
                      style={{ fontSize: "15px" }}
                      onClick={()=>addCount(tweetPost)}
                    />
                  }
                />
                {count}
              </div>
              <Buttons
                className={style.btns}
                image={<MdOutlinePoll style={{ fontSize: "15px" }} />}
              />

              <Buttons
                className={style.btns}
                image={<FiShare style={{ fontSize: "15px" }} />}
              />
            </div>
          </span>
        </div>
      </>
    ;

      })}
       
      </div>
      
      {/* <h1>hii how are you</h1> */}
    </>
  );
}

export default ProfileSection;
