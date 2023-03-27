import React, { useState, useRef, useEffect } from "react";
import style from "./Card.module.css";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import Buttons from "../../Atom/Button/Buttons";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { tweetPosts } from "../../const";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import { GoVerified } from "react-icons/go";
// import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import { FiShare } from "react-icons/fi";
import { MdOutlinePoll } from "react-icons/md";
import { isTweetPost, newtweet, userProfile,indexAtom, forPassingId} from "../../Recoil/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate} from "react-router-dom";
import { Avatar } from "@mui/material";

export default function Card() {

  const [countForRender,setCountForRender]=useState(0);
  const [open, setOpen] = useState(false);
  const [tweetText, setTweetText] = useState("");
  const [post, setPost] = useState(tweetPosts);
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const nevigate = useNavigate();
  const [newPost, setNewPost] = useRecoilState(isTweetPost);
  const [newProfile, setNewProfile] = useRecoilState(userProfile);
   const [tweets,setTweets]=useRecoilState(newtweet)
  const indices= useRecoilValue(indexAtom)
  const [index, setIndex] = useRecoilState(forPassingId)
  const[storeArray,setStoreArray]=useState("")
  
  // useEffect(()=>{
  //   if(  localStorage.setItem('key',JSON.stringify(tweets))){
  //     const getTweet=JSON.parse(localStorage.getItem('key'))
    
  //   }
  // },[])
 
  useEffect(() => {
    fetchData();
  },[]);

  function fetchData() {
    setPost(tweetPosts);
  }

  function xyz(dataName) {
   setNewProfile(dataName)
    nevigate("/publicpage")
  }
  //console.log(post.map((x)=>x.id))
      


  const handleClickOpen = (i) => {
    setOpen(true);
    setIndex(i)
    console.log(i)
 }

  const handleClose = () => {
    setOpen(false)
    let newObj1 = {
      tweetComment: storeArray,
    }
    post[index].tweetComment = [...post[index].tweetComment, newObj1];
    console.log(storeArray)
  }
 

  function GetTweet(e) {
    setTweetText(e.target.value);
  }
  const list = JSON.parse(localStorage.getItem("UserDetail"));
  function HandleImageClick() {
    inputRef.current.click();
  }
  function handleOnSelectImage(e) {
    let reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
      // inputRef.current = null;
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  function SubmitTweet() {
    
    const obj = {
      id: Math.random(),
      profile:"https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg" ,
      name: list[indices].name,
      handlerName: list[indices].email,
      organization: "",
      tweetText: tweetText,
      inrDcr:false,
      tweetPic: image,
      tweetCount: 0,
      retweetCount: 0,
      likesCount: 0,
      viewsCount: "0",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
    };

    if (obj.tweetText !== "") {
      setPost([obj,...tweetPosts]);
      tweetPosts.unshift(obj);
      localStorage.setItem('key',JSON.stringify(post))
    }
   
   
    setTweetText("");
    setTweets([obj,...tweets])
    
   
    setPost([...tweets,...post])
  
    setImage("");
    inputRef.current.value = ""
    
  }
  let getTweet=[]
  getTweet=JSON.parse(localStorage.getItem('key'))
  console.log(tweets)
  function HandleInput(e) {
    setStoreArray(e.target.value)
  }
  function handleLike(takeLikes) {
    console.log(takeLikes)
    console.log(takeLikes.Index)
    console.log(takeLikes.Data)
    console.log(getTweet)
    console.log(getTweet[takeLikes.Index].inrDcr)
    if (getTweet[takeLikes.Index].inrDcr === false) {
   
      getTweet[takeLikes.Index].likesCount = takeLikes.Data + 1;
console.log(getTweet[takeLikes.Index].likesCount )
      setCountForRender(countForRender + 1);
      getTweet[takeLikes.Index].inrDcr = true;
console.log(getTweet[takeLikes.Index].inrDcr )
    }

    
    else {
      getTweet[takeLikes.Index].likesCount = takeLikes.Data - 1;

      setCountForRender(countForRender + 1);
      getTweet[takeLikes.Index].inrDcr = false;
    }
  }
  console.log(getTweet) 
  return (
    <>
      <div className={style.mainDiv}>
        <img
          src="https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg"
          className={style.Photo1}
        />
        <textarea
          value={tweetText}
          className={style.inputs}
          onChange={GetTweet}
          placeholder="What's happening"
        />
         {image && (
          <div className={style.imageWrapper}>
            <img src={image} height="50%" width="50%" alt="foo" />
          </div>
        )}
        {/* <p style={{ color: "#00acee", fontWeight: "600" }}>
                <PublicOutlinedIcon />
                Everyone can reply
              </p> */}
        <div className={style.Icons}>
          {" "}
          <BrokenImageOutlinedIcon onClick={HandleImageClick} />
          <input
            type="file"
            hidden
            ref={inputRef}
            onChange={handleOnSelectImage}
            name="tweetPic"
          />
          <GifBoxOutlinedIcon />
          <BallotOutlinedIcon />
          <SentimentSatisfiedAltOutlinedIcon />
          <EventRepeatOutlinedIcon />
        </div>
        <div className={style.BTN}>
          <button className={style.btn} onClick={SubmitTweet}>
            Tweet
          </button>
        </div>{" "}
      </div>
      {/* {getTweet.length ? (
      <> */}
      {getTweet.map((tweetPost,i) => {
        return (
          <>
            <div key={tweetPost.id}  className={style.maindiv}>
              <div className={style.container}>
                <div className={style.Top} onClick={ ()=>xyz(({
                name  : tweetPost.name,
                handlerName : tweetPost.handlerName  ,
                organization : tweetPost.organization,
                tweetText : tweetPost.tweetText,
                tweetPic : tweetPost.tweetPic,
               profile:tweetPost.profile,
                tweetCount : tweetPost.tweetCount,
                retweetCount : tweetPost.retweetCount,
                likesCount : tweetPost.likesCount,
                viewsCount : tweetPost.viewsCount,
                followers : tweetPost.followers,
                followings : tweetPost.followings,
                tweets : tweetPost.tweets
                
                
              } )) } > <Avatar   className={style.profile} src={tweetPost.profile} /></div>
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
              {/* <p className={style.paraorg}>{tweetPost.organization}</p> */}
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
                    onChange={HandleInput}
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
                  <div><Buttons
                    className={style.btns}
                    btnNext={()=>handleClickOpen(i)}
                    image={<FaRegComment style={{ fontSize: "15px" }} />}
                  />{tweetPost.tweetCount}
                  </div>
                  <div><Buttons
                    className={style.btns}
                    image={<AiOutlineRetweet style={{ fontSize: "15px" }} />}
                  /> {tweetPost.retweetCount}
                  </div>
                  
                  <div>
                    <Buttons
                      btnNext={() =>
                    handleLike({ Data: tweetPost.likesCount, Index: i })
                   }
                      className={style.btns}
                      image={
                        <CiHeart
                          style={{ fontSize: "15px" }}
                          
                        />
                      } 
                    />
                { console.log(tweetPost.likesCount) }  {tweetPost.likesCount}
                  </div>
                  <div>
                  <Buttons
                    className={style.btns}
                    image={<MdOutlinePoll style={{ fontSize: "15px" }} />}
                  />{tweetPost.viewsCount}</div>

                  <Buttons
                    className={style.btns}
                    image={<FiShare style={{ fontSize: "15px" }} />}
                  />
                </div>
              </span>
            </div>
          </>
        );
      })}
      {/* </>):
      <></>} */}
    </>
  );
}
