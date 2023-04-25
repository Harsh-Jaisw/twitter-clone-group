import React ,{useEffect} from "react";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import style from "./pupup.module.css";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { isLoginAtom,indexAtom} from "../../Recoil/atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
const PopOver = () => {
   const[index,setIndex]=useRecoilState(indexAtom)  
  const tologin = useNavigate();
  const [loginStatus, setLoginStatus] = useRecoilState(isLoginAtom);
  function Loggedout() {
    setLoginStatus(false);
    tologin("/login");
  }
  
  // useEffect(()=>{
  //  if(!loginStatus){
  //   tologin("/login")
  //  }
  // },[])
  const x = JSON.parse(localStorage.getItem("UserDetail"));
  console.log(x);
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <button className={style.btn} {...bindTrigger(popupState)}>
            <img
              src="https://www.imgstatus.com/wp-content/uploads/2019/11/Whastapp-Dp-Joker.jpg"
              alt=""
              className={style.photo}
            />{" "}
            <div style={{ display: "flex" ,flexDirection:"column"}}>
              <span style={{ fontWeight: "600" }}>{x[index]?.name}</span>
              <span style={{fontSize:"12px"}}>{x[index]?.email}</span>
            </div>{" "}
            <MoreHorizOutlinedIcon />
          </button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Typography sx={{ p: 2 }}>Add an existing account</Typography>
            <Typography sx={{ p: 2 }} onClick={Loggedout}>
              Log out{" "}
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default PopOver;
