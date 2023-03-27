import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import style from './DraweProfile.module.css'
import { useNavigate } from 'react-router-dom';
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from 'react-router-dom';
import { indexAtom } from '../../Recoil/atom';
import { useRecoilState } from 'recoil';
import TagSharpIcon from "@mui/icons-material/TagSharp";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";


export default function DrawerProfile() {
    const[index,setIndex]=useRecoilState(indexAtom) 
  const [state, setState] = React.useState({
    left: false
  });
  const arrs = [
    {
      icon: <PersonOutlineOutlinedIcon style={{ fontSize: "28px" }} />,
        text: <Link to="/profile"><span style={{ color: '#0F1419' }}>Profile</span></Link>,
    },
   
    { icon: <TagSharpIcon style={{ fontSize: "28px" }} />, text: "Explore" },
    {
      icon: <NotificationsNoneOutlinedIcon style={{ fontSize: "28px" }} />,
      text: "Notification",
    },
    { icon: <EmailOutlinedIcon style={{ fontSize: "28px" }} />, text: "Message" },
    {
      icon: <BookmarkBorderOutlinedIcon style={{ fontSize: "28px" }} />,
      text: "Bookmark",
    },
    {
      icon: <FeaturedPlayListOutlinedIcon style={{ fontSize: "28px" }} />,
      text: "Lists",
    },
    
  
  ];
  const toProfile=useNavigate()

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const x = JSON.parse(localStorage.getItem("UserDetail"));
  const list = (anchor) => (
    <Box
   style={{width:'20rem'}}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        <p className={style.info}>Account info</p>
        <span onClick={()=>toProfile("/profile")}><img style={{height:'3rem',borderRadius:'100%',marginLeft:'1rem'}}src='https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg' />
     </span>
   {/* <img style={{height:'3rem',borderRadius:'100%',marginLeft:'1rem'}}src='https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg' /> */}
     <div className={style.details}><span className={style.name}>{x[index].name}</span>
              <span style={{fontSize:"19px",fontWeight:'400'}}>{x[index].email}</span></div> 
        <div className={style.follow}>500Followers  12Following</div>
         {arrs.map((s)=>
       <div className={style.main}><span className={style.pro}>{s.icon}</span><span className={style.pro} >{s.text}</span></div>
       )}
     
       
      </List>
      

    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><img src='https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg' style={{height:'2rem',borderRadius:'100%'}}/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}