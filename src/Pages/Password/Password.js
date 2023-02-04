

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
