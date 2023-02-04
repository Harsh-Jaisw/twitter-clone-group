import React,{useState} from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {tweetPosts} from "../../../const"
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from "@mui/icons-material/Verified";
import style2 from "./Tweetpost.module.css";
import { userTweet,forPassingId } from "../../../Recoil/atom";
// import CustomButton from "../../../Atom/Button/CustomButton";
function Tweetpost() {
  const tweetPostData = useRecoilValue(userTweet);
  const indices = useRecoilValue(forPassingId);
  // const nameArray=(tweetPostData.TweetReplies.name)
  // const handlerNameArray=(tweetPostData.TweetReplies.handlerName)
  // const tweetReplyTextArray=(tweetPostData.TweetReplies.tweetReplyText)
  //    const k=nameArray.map((a)=>a)
  //     console.log(k)
  console.log(index)
  const [post, setPost] = useState(tweetPosts);
  const list = JSON.parse(localStorage.getItem("UserDetail"))
  return (
    <>
      <div className={style2.wrapper}>
        <div className={style2.container1}>
          <div>
            <Avatar className={style2.avatar} src={tweetPostData.tweetPic} />
          </div>

          <div className={style2.innercontainer}>
            <span className={style2.text}>
              <h3>
                {tweetPostData.name}
                <VerifiedIcon style={{ color: "#00acee" }} />
              </h3>
            </span>
            <p>{tweetPostData.tweetText}</p>
          </div>
        </div>

        <div className={style2.img}>
          <img
            style={{ width: "30rem", height: "30rem", borderRadius: "15px" }}
            alt="picture"
            src={tweetPostData.tweetPic}
          />
        </div>
        <div className={style2.icons}>
          <span>
            {tweetPostData.tweetCount}
            <ChatBubbleOutlineIcon />
          </span>
          <span>
            {tweetPostData.retweetCount}
            <SyncIcon />
          </span>
          <span>
            {tweetPostData.likesCount}
            <FavoriteBorderIcon />
          </span>
          <span>
            {tweetPostData.viewsCount}
            <PollIcon />
          </span>

          <UploadIcon />
        </div>
      </div>
      <div className={style2.wrapper}>
        <div className={style2.container1}>
          <div>
            <Avatar
              className={style2.avatar}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvYUsv-26LipJb-wJ7h8QVbOM9_MfdFSMKw&usqp=CAU"
            />
          </div>

          <div className={style2.innercontainer}>
            <span className={style2.text}>
              <h3>
                Binod
                <VerifiedIcon style={{ color: "#00acee" }} />
              </h3>
            </span>
            <p>Ha bhaiya</p>
          </div>
        </div>
        <div className={style2.icons}>
          <span>
            {tweetPostData.tweetCount}
            <ChatBubbleOutlineIcon />
          </span>
          <span>
            {tweetPostData.retweetCount}
            <SyncIcon />
          </span>
          <span>
            {tweetPostData.likesCount}
            <FavoriteBorderIcon />
          </span>
          <span>
            {tweetPostData.viewsCount}
            <PollIcon />
          </span>
          <UploadIcon />
        </div>
      </div>
      <div className={style2.wrapper}>
        <div className={style2.container1}>
          <div>
            <Avatar
              className={style2.avatar}
              src=""
            />
          </div>

          <div className={style2.innercontainer}>
            <span className={style2.text}>
              <h3>
                Banrakas
                <VerifiedIcon style={{ color: "#00acee" }} />
              </h3>
            </span>
            <p>Dekh raha h binod</p>
          </div>
        </div>
        <div className={style2.icons}>
          <span>
            {tweetPostData.tweetCount}
            <ChatBubbleOutlineIcon />
          </span>
          <span>
            {tweetPostData.retweetCount}
            <SyncIcon />
          </span>
          <span>
            {tweetPostData.likesCount}
            <FavoriteBorderIcon />
          </span>
          <span>
            {tweetPostData.viewsCount}
            <PollIcon />
          </span>
          <UploadIcon />
        </div>
      </div>
      {post[index].tweetComment.length > 0 ? (
        <>
          {post[index].tweetComment.map((data) => (
            <div className={style2.wrapper}>
              <div className={style2.container1}>
                <div>
                  <Avatar
                    className={style2.avatar}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/800px-Steve_Jobs_Headshot_2010-CROP2.jpg"
                  />
                </div>

                <div className={style2.innercontainer}>
                  <>
                    <span className={style2.text}>
                      <h3>
                      list[indices].name
                        <VerifiedIcon style={{ color: "#00acee" }} />
                      </h3>
                    </span>
                    <p>{data.tweetComment}</p>
                  </>
                </div>
              </div>
              <div className={style2.icons}>
                <span>
                  {tweetPostData.tweetCount}
                  <ChatBubbleOutlineIcon />
                </span>
                <span>
                  {tweetPostData.retweetCount}
                  <SyncIcon />
                </span>
                <span>
                  {tweetPostData.likesCount}
                  <FavoriteBorderIcon />
                </span>
                <span>
                  {tweetPostData.viewsCount}
                  <PollIcon />
                </span>
                <UploadIcon />
              </div>
            </div>
          ))}
        </>
       ) : (
        <></>
      )}
    </>
  );
}

export default Tweetpost;