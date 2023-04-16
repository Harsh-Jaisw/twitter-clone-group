// import React from 'react'
// import Dialog from "@mui/material/Dialog";

// import DialogContent from "@mui/material/DialogContent";

// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import style from "./Login.module.css"
// import Buttons from '../../Atom/Button/Buttons';

// import Input from '../../Atom/Input/Input';
// import {FcGoogle} from "react-icons/fc"
// import {Link} from "react-router-dom" 
// import Helper from '../../Helper/Helper';
// import {BsApple} from "react-icons/bs"
// export default function Login() {
//   const [open, setOpen] = React.useState(true);
//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

//   return (
    
//       <Dialog
        
//         fullScreen={fullScreen}
//         open={open}
//         aria-labelledby="responsive-dialog-title"
//       >
//        <div className={style.maincontainer}>
//           <TwitterIcon style={{color:"#00acee",marginTop:"1rem",fontSize:"xx-large"}}/>
//           <h2>Sign in to twitter</h2>
        

//         <DialogContent className={style.btnclass}>
          
//             <Buttons
//               className={style.btn}
//             //   image={<img style={{width:"31px"}} src="https://res.cloudinary.com/practicaldev/image/fetch/s--ZUMyUgWZ--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/am6lv2x37bole6x4poz3.jpg"/>}
//              image={ <FcGoogle />}
//               Sign="Sign in with Google"
//             />
          
//             <Buttons

//               className={style.applebtn}
//               logo={<BsApple/>}
//               Sign="Sign in with Apple"
//             />
            
//             <Input  className={style.inputs} text="Phone,name or Email"/>
           
//             <Link to={"/password"}> <Buttons
//               className={style.nxtbtn}
//               Sign="Next"
//             /></Link>
            
//             <Buttons
//               className={style.btn}
//               Sign="Forgot password?"
//             />
//            <p> Don't have an account?<Link to={"/signup"}> Sign up</Link></p>
//         </DialogContent>
//         </div>
//       </Dialog>
   
//   );
// }


import React, { useState } from 'react'
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import style from "./Login.module.css"
import Buttons from '../../Atom/Button/Buttons';
import Input from '../../Atom/Input/Input';
import {FcGoogle} from "react-icons/fc"
import {Link,useNavigate} from "react-router-dom" 
import {BsApple} from "react-icons/bs"
export default function Login() {
  const topassword=useNavigate()
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  
  let getData = JSON.parse(localStorage.getItem("UserDetail")); 
  const [data, setData] = useState("");
  function handledata(inputData)
  {
    
    setData(inputData)
  }
  function Handledetail(event){
     event.preventDefault()
    const newArr= getData.filter(
      (x) => x.name===data || x.phone===data || x.email===data
    );

    if (newArr.length === 0 ) {
      alert("user not found");
    }
    else{
      topassword("/password")
    }
  }
  return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        aria-labelledby="responsive-dialog-title"
        
      >

       <div className={style.maincontainer}>
          {/* <TwitterIcon style={{color:"#00acee",marginTop:"1rem",fontSize:"xx-large"}}/> */}
          <TwitterIcon className={style.chidiya} style={{fontSize:"xx-large",color:"#00acee"}}/>
          <h2 className={style.H2}>Sign in to twitter</h2>
        

        <DialogContent className={style.btnclass}>
          
            <Buttons
              className={style.btn}
             image={ <FcGoogle />}
              Sign="Sign in with Google"
            />
          
            <Buttons
              className={style.applebtn}
              image={<BsApple/>}
              Sign="Sign in with Apple"
            />
             <div className={style.or}><hr style={{width:'45%',textAlign:'left',marginLeft:'0',height:'0rem'}}></hr>
            <span style={{marginLeft:'0.5rem',marginTop:'-1'}}>or</span><hr style={{width:'45%',textAlign:'left',marginLeft:'0.5rem',height:'0rem'}}></hr></div>
            <Input  className={style.inputs} handleOnchange={handledata} text="Phone,name or Email"/>
             
             <Buttons
              className={style.nxtbtn}
              Sign="Next"
              btnNext={Handledetail}
            />
             
            <Buttons
              className={style.btn}
              Sign="Forgot password?"
            />
           <p className={style.paragraph}> Don't have an account?<Link to={"/signup"}> Sign up</Link></p>
        </DialogContent>
        </div>
      </Dialog>
   
  );
} 