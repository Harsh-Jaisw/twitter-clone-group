import React from "react";
import style from "./LeftSection.module.css";
import Buttons from "../../Atom/Button/Buttons";
import TwitterIcon from "@mui/icons-material/Twitter";
import { arrs } from "../../const";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { useState, useRef } from "react";
import PopOver from "../../Atom/PopOver/PopOver";
import { Link } from "react-router-dom";
import { tweetPosts } from "../../const";
import { isTweetPost, newtweet } from "../../Recoil/atom";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import { useRecoilState } from "recoil";
function LeftSection() {
  const [open, setOpen] = useState(false);
  const [tweet, setTweet] = useState("");
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [tweetStatus, setTweetStatus] = useRecoilState(isTweetPost);
  const [tweets, setTweets] = useRecoilState(newtweet);
  const list = JSON.parse(localStorage.getItem("UserDetail"));
  function handleChange(e) {
    setTweet(e.target.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
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

  const handleClose = () => {
    const obj = {
      id: Math.random(),
      profile:
        "https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg",
      name: list[0].name,
      handlerName: "@" + list[0].email,
      organization: "",
      tweetText: tweet,

      tweetPic: image,

      tweetCount: 100,

      retweetCount: 100,
      likesCount: 100,
      viewsCount: "102k",
      followers: 200,
      followings: 400,
      joinedDate: "22 dec 2022",
    };
    setOpen(false);
    if (obj.tweetText !== "") {
      tweetPosts.unshift(obj);
    }

    setTweets(tweets.unshift(obj));
    setTweetStatus(tweetStatus + 1);
    setTweet("");
    setImage("");
    inputRef.current.value = "";
  };
  // console.log(storeTweet)

  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.btnDiv}>
          <Link to="/">
            <TwitterIcon
              style={{
                color: "#00acee",
                fontSize: "xx-large",
                marginLeft: ".3rem",
              }}
            />
          </Link>
          {arrs.map((arr, index) => {
            return (
              <>
                <div key={index}>
                  <Buttons
                    className={style.icons}
                    image={arr.icon}
                    Sign={arr.text}
                  />
                </div>
              </>
            );
          })}
          <div>
            <Buttons
              className={style.btnT}
              Sign="Tweet"
              btnNext={handleClickOpen}
            />
            <Dialog
              PaperProps={{
                style: {
                  bottom:"8rem",
                  right:"2rem",
                  maxWidth:"50rem",
                  borderRadius:"20px"
                },
              }}
              open={open}
              onClose={handleClose}
            >
              <img
                src="https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg"
                alt=""
                className={style.BigPhoto}
              />
              <textarea
                className={style.ForTweet}
                placeholder="What's happening?"
                value={tweet}
                onChange={handleChange}
              />
              {image && (
                <div className={style.imageWrapper}>
                  <img src={image} height="50%" width="50%" alt="foo" />
                </div>
              )}

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
              <DialogActions>
                <Buttons
                  btnNext={handleClose}
                  Sign="Tweet"
                  className={style.btnTweet}
                />
              </DialogActions>
            </Dialog>
          </div>
        </div>
        <div className={style.popdiv}>
          <PopOver />
        </div>
      </div>
    </>
  );
}
export default LeftSection;
