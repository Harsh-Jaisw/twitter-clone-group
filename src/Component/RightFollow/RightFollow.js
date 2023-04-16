// import { Avatar } from '@mui/material';
// import React, { useState } from 'react'
// import Buttons from '../../Atom/Button/Buttons';
// import style from './RightFollow.module.css'
// // import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// function RightFollow() {
//     const handleClick = (id) => {
//         const updatedFollowContainer = followContainer.map((item) => {
//           if (item.id === id) {
//             item.followed = !item.followed;
//           }
//           return item;
//         });
//         setFollowContainer(updatedFollowContainer);
//       };
//       const [followContainer, setFollowContainer] = useState([
//         {
//           id: 1,

//           src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
//           text: "virat",
//           text2: "virat@gmail.com",
//         },
//         {
//           id: 2,

//           src: "https://www.cricketsoccer.com/wp-content/uploads/2020/09/i.jpg",
//           text: "Rohit",
//           text2: "rohits@gmail.com",
//         },
//         {
//           id: 3,

//           src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
//           text: "Mahi",
//           text2: "virat@gmail.com",
//         },
//         {
//           id: 4,

//           src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
//           text: "virat",
//           text2: "virat@gmail.com",
//         },
//       ]);
//   return (
//     <div className={style.mainParent}>
//     <h2>  Who to follow</h2>
//      {followContainer.map((data)=>
//      <div className={style.wrapper}>

//                     <div className={style.img}>
//                     <Avatar alt="Remy Sharp" src={data.src} />
//                       <h3 >
//                         {data.text}

//                       </h3>
//                       <h6>{data.text2}</h6>
//                     </div>
//                     <div className={style.btntxt}>
//       <Buttons Sign={data.followed ? "Following" : "Follow"}
//                   btnNext={() => handleClick(data.id)}
//                   key={data.id}
//                   className={style.followButton}
//                   disabled={data.followed}/>
//        </div>
//        </div>
//      )}
//       <div style={{marginLeft:"1.3rem",color:"#1D9BF0"}}>Show more</div>
//     </div>
//   )
// }

//  export default RightFollow


import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import Buttons from '../../Atom/Button/Buttons';
import style from './RightFollow.module.css'
import { Follow } from '../../const';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function RightFollow() {
  const [trending, setTrendings] = useState(Follow.slice(0, 2));
  const [isShowingAllTrendings, setIsShowingAllTrendings] = useState(false);
    const handleClick = (id) => {
        const updatedFollowContainer = Follow.map((item) => {
          if (item.id === id) {
            item.followed = !item.followed;
          }
          return item;
        });
        // setFollowContainer(updatedFollowContainer);
        setTrendings(updatedFollowContainer)
      };
      
      function handleRequestSeeAll() {
        setIsShowingAllTrendings(!isShowingAllTrendings);
       
        if (isShowingAllTrendings) {
          return setTrendings(Follow.slice(0, 2));
        }
        setTrendings(Follow);
      }
  return (
    <div className={style.mainParent}>
    <h2>Who to follow</h2>
     {trending?.map((data)=>
     <div className={style.wrapper}>
                  
                    <div className={style.img}>
                    <Avatar alt="Remy Sharp" src={data.src}  />
                      <h3 >
                        {data.text}
                        
                      </h3>
                      <h6>{data.text2}</h6>
                    </div>
                    <div className={style.btntxt}>
      <Buttons Sign={data.followed ? "Following" : "Follow"}
                  btnNext={() => handleClick(data.id)}
                  key={data.id}
                  className={style.followButton}
                  />
                  {/* //disabled={data.followed} */}
       </div> 
       </div>
     )}
      {/* <div style={{marginLeft:"1.3rem",color:"#1D9BF0"}}>Show more</div> */}
      { (
        <div style={{padding:" 0 1rem 1rem 1.5rem",color:"#1D9BF0"}} onClick={handleRequestSeeAll}>
          {isShowingAllTrendings ? "Show Less" : "Show More"}
        </div>
      )}
    </div>
 
  )
}

export default RightFollow;
