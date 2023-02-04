// import React from 'react'
// import Dialog from "@mui/material/Dialog";
// // import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// // import DialogContentText from "@mui/material/DialogContentText";
// // import DialogTitle from "@mui/material/DialogTitle";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import style from "./Password.module.css"
// import Buttons from '../../Atom/Button/Buttons';
// // import GoogleIcon from "@mui/icons-material/Google";
// import AppleIcon from "@mui/icons-material/Apple";
// import Input from '../../Atom/Input/Input';
// import {FcGoogle} from "react-icons/fc"
// import { Link,useNavigate } from 'react-router-dom';

// export default function Password() {
//   const [open, setOpen] = React.useState(true);
//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
// const toHome=useNavigate()
// function HandleHome(){
//   toHome('/home')
// }
//   return (
    
//       <Dialog
        
//         fullScreen={fullScreen}
//         open={open}
//         aria-labelledby="responsive-dialog-title"
//       >
//        <div className={style.maincontainer}>
//           <TwitterIcon style={{color:"#00acee"}}/>
//           <h2>Enter your Password</h2>
        
      
//         <DialogContent className={style.btnclass}>
          
//             {/* <Buttons
//               className={style.btn}
//             //   image={<img style={{width:"31px"}} src="https://res.cloudinary.com/practicaldev/image/fetch/s--ZUMyUgWZ--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/am6lv2x37bole6x4poz3.jpg"/>}
//              image={ <FcGoogle />}
//               Sign="Sign in with Google"
//             /> */}
          
//             {/* <Buttons
//               className={style.btn}
//               logo={<AppleIcon />}
//               Sign="Sign in with Apple"
//             /> */}
            
//             <Input  className={style.inputs} text="Password"/>
            
//             {/* <Buttons
//               className={style.nxtbtn}
//               Sign="Next"
//             /> */}
            
//             <Buttons
//               className={style.logbtn}
//               Sign="Log in"
//               btnNext={HandleHome}
//             />
//             <p>Don't have an account?<Link to={"/signup"}> Sign up</Link></p>
//         </DialogContent>
//         </div>
//       </Dialog>
   
//   );
// }


import React, { useState } from 'react'

import { isLoginAtom,indexAtom } from '../../Recoil/atom';
import { useRecoilState } from 'recoil';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import style from "./Password.module.css"
import Buttons from '../../Atom/Button/Buttons';
import Input from '../../Atom/Input/Input';
 
import { Link,useNavigate } from     'react-router-dom';
export default function Password() {
  let getData = JSON.parse(localStorage.getItem("UserDetail"));
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [data, setData] = useState("");
  const [login, setLogin] = useRecoilState(isLoginAtom) 
  const[index,setIndex]=useRecoilState(indexAtom)       
  const tohome=useNavigate()
  
  function handledata(inputData) {
    setData(inputData)
  }
  function Handledetail(event) {
    event.preventDefault()
    const newArr = getData.filter(
      (x) => x.password === data
    );
    if (newArr.length === 0) {
      alert("user not found");
    }
    else {
     
      setLogin(true)
      alert("Success")
      tohome("/")
    }
    const newArr1 = getData.findIndex(
      (x) => x.password === data
    );
    setIndex(newArr1)
   
  } console.log(index,'********')
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      aria-labelledby="responsive-dialog-title"
    >
      <div className={style.maincontainer}>
        <TwitterIcon style={{ color: "#00acee" }} />
        <h2>Enter your Password</h2>
        <DialogContent className={style.btnclass}>
          <Input className={style.inputs} type="password" handleOnchange={handledata} text="Password" />
         
      <Buttons
            className={style.logbtn}
            btnNext={Handledetail}
            Sign="Log in"
          />
          <p>Don't have an account?<Link to={"/signup"}> Sign up</Link></p>
        </DialogContent>
      </div>
    </Dialog>
  );
}
