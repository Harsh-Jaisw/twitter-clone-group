import React, { useState ,useRef} from 'react'
import style from "./userTweet.module.css"
import { nanoid } from 'nanoid';
import { indexAtom, newtweet } from '../../Recoil/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tweetPosts } from "../../const";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import WestIcon from "@mui/icons-material/West"
import { useNavigate } from 'react-router-dom';
function UserTweet() {
    const [image, setImage] = useState("");
    const [post, setPost] = useState(tweetPosts);
    const [tweetText, setTweetText] = useState("");
    const list = JSON.parse(localStorage.getItem("UserDetail"));
    const indices = useRecoilValue(indexAtom)
    const [tweets, setTweets] = useRecoilState(newtweet);
    const inputRef = useRef(null)
    const nevigate=useNavigate()
    function handleOnSelectImage(e) {
        let reader = new FileReader();
        reader.onload = (e) => {
          setImage(e.target.result);
          // inputRef.current = null;
        };
        reader.readAsDataURL(e.target.files[0]);
      }
      function GetTweet(e) {
        setTweetText(e.target.value);
      }
      function HandleImageClick() {
        inputRef.current.click();
      }
      function SubmitTweet() {
        const obj = {
          id:nanoid(3),
          profile:
            "https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg",
          name: list[indices].name,
          handlerName: list[indices].email,
          organization: "",
          tweetText: tweetText,
          tweetPic: image,
          tweetCount: 0,
          inrDcr:false,
          retweetCount: 0,
          likesCount: 0,
          viewsCount: 0,
          followers: 200,
          followings: 400,
          joinedDate: "22 dec 2022",
        };
    
        if (obj.tweetText !== "") {
          setPost([obj,...post]);
           tweetPosts.unshift(obj)
          setTweets([obj,...tweets])
        } 
        // post.unshift(tweets)
        localStorage.setItem("key", JSON.stringify(post));
      
        setTweetText("");
        setImage("");
        inputRef.current.value = "";
        // setCountForRender(countForRender+1)
        // setPost([...tweets, ...post]);
       
      }
  return (
    <div className={style.mainDiv}>
        <span className={style.arrow}onClick={() => nevigate("/home")}>
            <WestIcon />
          </span>
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
        <img src={image}  alt="foo" />
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
  )
}

export default UserTweet