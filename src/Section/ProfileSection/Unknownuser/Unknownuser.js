// import React, { useState, useEffect } from "react";
// import style from "../ProfileSection.module.css";
// // import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import WestIcon from "@mui/icons-material/West";
// import Buttons from "../../../Atom/Button/Buttons";
// import { useNavigate } from "react-router-dom";
// import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
// import { FiShare } from "react-icons/fi";
// import { MdOutlinePoll } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { FaRegComment } from "react-icons/fa";
// import { AiOutlineRetweet } from "react-icons/ai";
// import { useRecoilValue, useSetRecoilState } from "recoil";
// import { Avatar } from "@mui/material";
// import { GoVerified } from "react-icons/go";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions"
// // import { useRecoilState, useRecoilValue } from "recoil";
// // import { newtweet,indexAtom } from "../../
// import VerifiedIcon from "@mui/icons-material/Verified";
// import style2 from "./Unknownuser.module.css";
// import { newtweet, userProfile,userTweet,userTweetProfile } from "../../../Recoil/atom";

//   function Unknownuser() {

//   const nevigate = useNavigate();
//   const unknownProfileData = useRecoilValue(userProfile);
//   const replyTweetPost = useSetRecoilState(userTweet);
//    const tweets = unknownProfileData.tweets;
//    //console.log(tweets,'//////////////////')
//   const [open, setOpen] = useState(false);
//   const [count, setCount] = useState(100);
// //let tweets=useRecoilValue(newtweet)

//   //console.log(tweets,'++++++++++++')
 
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   function addCount() {
//     if (count === 100) {
//       setCount(101);
//     } else if (count == 101) setCount(100);
//   }
//   function forReply(takeData) {
//     replyTweetPost(takeData);
//     nevigate("/Tweetpage");
//   }
//   return (
//     <>
//      <div
//         className={style.wrapper
//         }
//       >
//         <div className={style.feed__header}>
//           <p onClick={() => nevigate("/")}>
//             <WestIcon />
//           </p>
//           <h2>{unknownProfileData.name}</h2>
//         </div>
//         <img className={style.container} src={unknownProfileData.profile} />
//         <div>
//           <span className={style.Avatarsection}>
//             <img className={style.img} src={unknownProfileData.profile} />

//             <Buttons className={style.btn} Sign={"Edit profile"} />
//           </span>
//         </div>
//         <div >
//         <div className={style.textcontaint}>
//         <h4>{unknownProfileData.name}</h4>
//           <h6 style={{marginLeft:'0rem'}}>{unknownProfileData.handlerName}</h6>
         
          
//         </div>
         
         
//            <span className={style.join}
//            style={{marginTop:'-1rem',marginLeft:'1rem'}}
//            ><CalendarMonthOutlinedIcon/> Joined January 2022</span>
//          <div style={{display:'flex',gap:'1rem',marginLeft:'1rem',marginTop:'1rem'}}> <div>{unknownProfileData.followers} {"Followers"}</div>
//           <div>{unknownProfileData.followings} {"Followings"}</div></div>
//           <div className={style.heading} style={{marginTop:'4rem'}}>
//         <span>Tweets</span>
//         <span>Tweets&replies</span>
//         <span>Media</span>
//         <span>Likes</span> </div>
//         </div>
//       </div>
//       <div>
//         {
//         tweets && tweets.length > 0 ? (
//           tweets?.map((x) => {
//             return (
//               <>
//                 <div key={x.id}>
//                   <div
//                     className={style2.wrapper}
//                     onClick={() =>
//                       forReply({
//                         name: unknownProfileData.name,
//                         id: x.id,
//                         tweetText: x.tweetText,
//                         tweetPic: x.tweetPic,
//                         tweetCount: x.tweetCount,
//                         retweetCount: x.retweetCount,
//                         likesCount: x.likesCount,
//                         viewsCount: x.viewsCount,
//                         TweetReplies: {
//                           name: x.TweetReplies.map((y) => y.name),
//                           handlerName: x.TweetReplies.map((y) => y.handlerName),
//                           tweetReplyText: x.TweetReplies.map(
//                             (y) => y.tweetReplyText
//                           ),
//                         },
//                       })
//                     }
//                   >
//                     <div className={style2.container1}>
//                       <div>
//                         <Avatar className={style2.avatar} src={x.profile} />
//                       </div>

//                       <div className={style2.innercontainer}>
//                         <span className={style2.text}>
//                           <h3>
//                             {unknownProfileData.name}
//                             <VerifiedIcon style={{ color: "#00acee" }} />
//                           </h3>
//                         </span>
//                         <p>{x.tweetText}</p>
//                       </div>
//                     </div>

//                     <div className={style2.img}>
//                       <img
//                         style={{
//                           width: "30rem",
//                           height: "30rem",
//                           borderRadius: "15px",
//                         }}
//                         alt="picture"
//                         src={x.tweetPic}
//                       />
//                     </div>
//                     <div className={style2.icons}>
//                     <div><Buttons
//                     className={style.btns}
                    
//                     image={<FaRegComment style={{ fontSize: "15px" }} />}
//                   />{x.tweetCount}
//                   </div>
//                   <div><Buttons
//                     className={style.btns}
//                     image={<AiOutlineRetweet style={{ fontSize: "15px" }} />}
//                   /> {x.retweetCount}
//                   </div>
                  
//                   <div>
//                     <Buttons
                    
//                       className={style.btns}
//                       image={
//                         <CiHeart
//                           style={{ fontSize: "15px" }}
                          
//                         />
//                       } 
//                     />
//                     {x.likesCount}
//                   </div>
//                   <div>
//                   <Buttons
//                     className={style.btns}
//                     image={<MdOutlinePoll style={{ fontSize: "15px" }} />}
//                   />{x.viewsCount}</div>

//                   <Buttons
//                     className={style.btns}
//                     image={<FiShare style={{ fontSize: "15px" }} />}
//                   />
//                     </div>
//                   </div>
//                 </div>
//               </>
//             );
//           })
//         ) : (
//           <>  {tweets.map((tweetPost)=>{
//             return<>
//             <div key={tweetPost.id} className={style.maindiv}>
//               <div className={style.container}>
//                 <div 
                
//              > <Avatar   className={style.profile} src={tweetPost.profile} /></div>
//                 <div className={style.namecss}>
//                   <div>
//                     <span
//                       style={{
//                         fontWeight: "700",
//                         fontSize: "15px",
//                         paddingRight: ".3rem",
//                       }}
//                     >
//                       {tweetPost.name}
//                       <GoVerified
//                         style={{ color: "#00acee", fontSize: "14px" }}
//                       />
//                     </span>{" "}
//                     {tweetPost.handlerName}
//                   </div>
//                 </div>
//               </div>
//               <p className={style.paraorg}>{tweetPost.organization}</p>
//               <p className={style.para}>{tweetPost.tweetText}</p>
//               <div>
//                 {<img src={tweetPost.tweetPic} className={style.picdiv} />}
//               </div>
    
//               <span>
//                 <Dialog open={open} onClose={handleClose}>
//                   <img
//                     src="https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg"
//                     alt=""
//                     className={style.Photo1}
//                   />
    
//                   <textarea
//                     className={style.ForTweet}
//                     placeholder="What is happening ?"
//                   />
//                   <DialogActions>
//                     <Buttons
//                       className={style.btnTweet}
//                       btnNext={handleClose}
//                       Sign={"Reply"}
//                     />
//                   </DialogActions>
//                 </Dialog>
//                 <div className={style.socialbtn}>
//                   <Buttons
//                     className={style.btns}
//                     btnNext={handleClickOpen}
//                     image={<FaRegComment style={{ fontSize: "15px" }} />}
//                   />
//                   <Buttons
//                     className={style.btns}
//                     image={<AiOutlineRetweet style={{ fontSize: "15px" }} />}
//                   />
//                   <div>
//                     <Buttons
                     
//                       className={style.btns}
//                       image={
//                         <CiHeart
//                           style={{ fontSize: "15px" }}
//                           onClick={addCount}
//                         />
//                       }
//                     />
//                     {count}
//                   </div>
//                   <Buttons
//                     className={style.btns}
//                     image={<MdOutlinePoll style={{ fontSize: "15px" }} />}
//                   />
    
//                   <Buttons
//                     className={style.btns}
//                     image={<FiShare style={{ fontSize: "15px" }} />}
//                   />
//                 </div>
//               </span>
//             </div>
//           </>
//         ;
    
//           })}</>
//         )}
//       </div>
//     </>
//   );
// }
// export default Unknownuser;





import React, { useState, useEffect } from "react";
import style from "../ProfileSection.module.css";
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import WestIcon from "@mui/icons-material/West";
import Buttons from "../../../Atom/Button/Buttons";
import { useNavigate } from "react-router-dom";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { FiShare } from "react-icons/fi";
import { MdOutlinePoll } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Avatar } from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";
import style2 from "./Unknownuser.module.css";
import { userProfile, userTweet, userTweetProfile } from "../../../Recoil/atom";
function Unknownuser() {
  const nevigate = useNavigate();
  const unknownProfileData = useRecoilValue(userProfile);
  // console.log(unknownProfileData)
  const replyTweetPost = useSetRecoilState(userTweet);
  const tweets = unknownProfileData.tweets;
  // console.log(tweets)
  function forReply(takeData) {
    replyTweetPost(takeData);
    nevigate("/Tweetpage");
  }
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.feed__header}>
          <p onClick={() => nevigate("/home")}>
            <WestIcon />
          </p>
          <h2>{unknownProfileData.name}</h2>
        </div>
        <img className={style.container} src={unknownProfileData.tweetPic} />
        <div>
          <span className={style.Avatarsection}>
            <img className={style.img} src={unknownProfileData.tweetPic} />

            <Buttons className={style.btn} Sign={"Follow"} />
          </span>
        </div>
        <div>
          <div className={style.textcontaint}>
            <h4>{unknownProfileData.name}</h4>
            <h6 style={{ marginLeft: "0rem" }}>
              {unknownProfileData.handlerName}
            </h6>
          </div>

          <span
            className={style.join}
            style={{ marginTop: "-1rem", marginLeft: "1rem" }}
          >
            <CalendarMonthOutlinedIcon /> Joined January 2022
          </span>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginLeft: "1rem",
              marginTop: "1rem",
            }}
          >
            {" "}
            <div>
              {unknownProfileData.followers} {"Followers"}
            </div>
            <div>
              {unknownProfileData.followings} {"Followings"}
            </div>
          </div>
          <div className={style.heading} style={{ marginTop: "4rem" }}>
            <span>Tweets</span>
            <span>Tweets&replies</span>
            <span>Media</span>
            <span>Likes</span>{" "}
          </div>
        </div>
      </div>
      <div>
        {/* {tweets && tweets.length > 0 ? ( */}
        {tweets?.map((x) => {
          return (
            <>
              <div key={x.id}>
                <div
                  className={style2.wrapper1}
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
                      <p className={style.text}>{x.tweetText}</p>
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
                    <div>
                      <Buttons
                        className={style.btns}
                        image={<FaRegComment style={{ fontSize: "15px" }} />}
                      />
                      {x.tweetCount}
                    </div>
                    <div>
                      <Buttons
                        className={style.btns}
                        image={
                          <AiOutlineRetweet style={{ fontSize: "15px" }} />
                        }
                      />{" "}
                      {x.retweetCount}
                    </div>

                    <div>
                      <Buttons
                        className={style.btns}
                        image={<CiHeart style={{ fontSize: "15px" }} />}
                      />
                      {x.likesCount}
                    </div>
                    <div>
                      <Buttons
                        className={style.btns}
                        image={<MdOutlinePoll style={{ fontSize: "15px" }} />}
                      />
                      {x.viewsCount}
                    </div>

                    <Buttons
                      className={style.btns}
                      image={<FiShare style={{ fontSize: "15px" }} />}
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
        {/* ) : (
          <>""</> */}
        {/* ) */}
      </div>
    </>
  );
}
export default Unknownuser;
