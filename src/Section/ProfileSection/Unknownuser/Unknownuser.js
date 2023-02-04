import React, { useState, useEffect } from "react";
import style from "../ProfileSection.module.css";
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import WestIcon from "@mui/icons-material/West";
import Buttons from "../../../Atom/Button/Buttons";
import { useNavigate } from "react-router-dom";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from "@mui/icons-material/Verified";
import style2 from "./Unknownuser.module.css";
import { userProfile,
    userTweet,userTweetProfile } from "../../../Recoil/atom";

// import {tweetPosts} from "../../../ConstData/ConstData"
function Unknownuser() {
  const nevigate = useNavigate();
  const unknownProfileData = useRecoilValue(userProfile);
  const replyTweetPost = useSetRecoilState(userTweet);
  const replyProfileDetails = useSetRecoilState(userTweetProfile);
  const tweets = unknownProfileData.tweets;
  console.log(tweets)
  // const tweetsReply = unknownProfileData.tweets.TweetReplies;
  
  //    const[newPost,setNewPost] = useRecoilState(isTweet);
  //   const[newProfile,setNewProfile] = useRecoilState(userTweet);
  //   const[post,setPost]=useState(tweetPosts)
  //   console.log(...post)
  //  useEffect(() => {
  //   fetchData()

  //   },[newPost]);

  // function  fetchData()
  //   {
  //     setPost(tweetPosts)
  //   }

  //  function xyz (dataName)  {
  //     setNewProfile(dataName)
  //     nevigate("/Profile2")

  //   };

  function forReply(takeData) {
    replyTweetPost(takeData);
    nevigate("/Tweetpage");
  }
  return (
    <>
      <div
        className={style.wrapper}

        // onClick={ ()=>xyz(({

        // } )) }
      >
        <div className={style.feed__header}>
          <p onClick={() => nevigate("/")}>
            <WestIcon />
          </p>
          <h2>{unknownProfileData.name}</h2>
        </div>
        <img className={style.container} src={unknownProfileData.tweetPic} />
        <div>
          <span className={style.Avatarsection}>
            <img className={style.img} src={unknownProfileData.tweetPic} />

            <Buttons className={style.btn} Sign={"Edit profile"} />
          </span>
        </div>
        <div className={style.textcontaint}>
          <h4>{`${"Name:-"}${unknownProfileData.name}`}</h4>
          <h5>{`${"@"}${unknownProfileData.handlerName}`}</h5>
          <h5>{`${"tweetCount:-"}${unknownProfileData.tweetCount}`}</h5>
          <h5>{`${"likescount:-"}${unknownProfileData.likesCount}`}</h5>
          <h5>{`${"followers:-"}${unknownProfileData.followers}`}</h5>
          <h5>{`${"followings:-"}${unknownProfileData.followings}`}</h5>
        </div>
      </div>
      <div>
        {tweets && tweets.length > 0 ? (
          tweets.map((x) => {
            return (
              <>
                <div key={x.id}>
                  <div
                    className={style2.wrapper}
                    onClick={() =>
                      forReply({
                        name: unknownProfileData.name,
                        id: x.id,
                        tweetText: x.tweetText,
                        tweetPic: x.tweetPic,
                        tweetCount: x.tweetCount,
                        retweetCount: x.retweetCount,
                        likesCount: x.likesCount,
                        viewsCount: x.viewsCount,
                        TweetReplies: {
                          name: x.TweetReplies.map((y) => y.name),
                          handlerName: x.TweetReplies.map((y) => y.handlerName),
                          tweetReplyText: x.TweetReplies.map(
                            (y) => y.tweetReplyText
                          ),
                        },
                      })
                    }
                  >
                    <div className={style2.container1}>
                      <div>
                        <Avatar className={style2.avatar} src={x.tweetPic} />
                      </div>

                      <div className={style2.innercontainer}>
                        <span className={style2.text}>
                          <h3>
                            {unknownProfileData.name}
                            <VerifiedIcon style={{ color: "#00acee" }} />
                          </h3>
                        </span>
                        <p>{x.tweetText}</p>
                      </div>
                    </div>

                    <div className={style2.img}>
                      <img
                        style={{
                          width: "30rem",
                          height: "30rem",
                          borderRadius: "15px",
                        }}
                        alt="picture"
                        src={x.tweetPic}
                      />
                    </div>
                    <div className={style2.icons}>
                      <span>
                        {x.tweetCount}
                        <ChatBubbleOutlineIcon />
                      </span>
                      <span>
                        {x.retweetCount}
                        <SyncIcon />
                      </span>
                      <span>
                        {x.likesCount}
                        <FavoriteBorderIcon />
                      </span>
                      <span>
                        {x.viewsCount}
                        <PollIcon />
                      </span>

                      <UploadIcon />
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <>""</>
        )}
      </div>
    </>
  );
}
export default Unknownuser;
