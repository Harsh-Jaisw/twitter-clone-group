// import React from 'react'
// import Dialog from "@mui/material/Dialog";
// // import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// // import DialogContentText from "@mui/material/DialogContentText";
// // import DialogTitle from "@mui/material/DialogTitle";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import style from "./SignUp.module.css"
// import Buttons from '../../Atom/Button/Buttons';
// import GoogleIcon from "@mui/icons-material/Google";
// import AppleIcon from "@mui/icons-material/Apple";
// import Input from '../../Atom/Input/Input';
// import { FcGoogle } from "react-icons/fc"
// import { BsApple } from "react-icons/bs"
// import { Link } from "react-router-dom"
// import Helper from '../../Helper/Helper';

// export default function SignUp() {
//   const [open, setOpen] = React.useState(true);
//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

//   return (

//     <Dialog

//       fullScreen={fullScreen}
//       open={open}
//       aria-labelledby="responsive-dialog-title"
//     >
//       <div className={style.maincontainer}>
//         <TwitterIcon style={{ color: "#00acee" }} />
//         <h2>Join Twitter today </h2>


//         <DialogContent className={style.btnclass}>

//           <Buttons
//             className={style.btn}
//             //   image={<img style={{width:"31px"}} src="https://res.cloudinary.com/practicaldev/image/fetch/s--ZUMyUgWZ--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/am6lv2x37bole6x4poz3.jpg"/>}
//             image={<FcGoogle />}
//             Sign="Sign in with Google"
//           />

//           <Buttons
//             className={style.applebtn}
//             image={<BsApple />}
//             Sign="Sign in with Apple"
//           />

//           {/* <Input  className={style.inputs} text="Phone,name or Email"/>
//             <Input  className={style.inputs} text="Passsword"/> */}
//           {/* <Link to={"/password"}> <Buttons
//               className={style.nxtbtn}
//               Sign="Next"
//             /></Link> */}

//           <Link to="/register"><Buttons
//             style={{textDecoration:"none"}}
//             className={style.btn}
//             Sign="Sign up with phone or email"
//           /></Link>
//           <p>By signing up, you agree to the Terms of Service <br/>and Privacy Policy, including Cookie Use.</p>
//           <p>Have an account already? <Link to={"/"}> Log in</Link></p>
//         </DialogContent>
//       </div>
//     </Dialog>

//   );
// }



import React from 'react'
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, createStyles } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import style from "./SignUp.module.css"
import Buttons from '../../Atom/Button/Buttons';
import { BsApple } from "react-icons/bs"
import { Link } from "react-router-dom"
import {FcGoogle} from "react-icons/fc"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
export default function SignUp() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  
  
  return (
      <Dialog
      fullScreen={fullScreen}
      open={open}
      aria-labelledby="responsive-dialog-title"
      // PaperProps={{
      //   style: {
      //     borderRadius: "20px",
       
      //   },
      // }}
    >
       {/* <TwitterIcon style={{ color: "#00acee",fontSize:'xx-large'}} /> */}
       <TwitterIcon className={style.chidiya} style={{ fontSize:'30px'}} />
      <div className={style.maincontainer}>
       

        <h2 className={style.join}>Join Twitter today </h2>
        <DialogContent className={style.btnclass}>
        <Buttons
              className={style.btn}
             image={ <FcGoogle />}
              Sign="Sign up with Google"
            />
          <Buttons
            className={style.applebtn}
            image={<BsApple />}
            Sign="Sign up with Apple"
          />
        
          <div className={style.or}><hr style={{width:'45%',textAlign:'left',marginLeft:'0',height:'0rem'}}></hr>
            <span style={{marginLeft:'0.5rem',marginTop:'-1'}}>or</span><hr style={{width:'45%',textAlign:'left',marginLeft:'0.5rem',height:'0rem'}}></hr></div>
          <Link to="/register"><Buttons
            className={style.btn}
            Sign="Sign up with phone or email"
          /></Link>
          <p className={style.P}>By signing up, you agree to the Terms of Service <br/>and Privacy Policy, including Cookie Use.</p>
          <p className={style.P1}>Have an account already? <Link to={"/login"}> Log in</Link></p>
        </DialogContent>
      </div>
    </Dialog>

  );
}