import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import style from "./Registration.module.css";
import Buttons from "../../Atom/Button/Buttons";
import Input from "../../Atom/Input/Input";
import {
  isValidEmail,
  isValidMobile,
  isValidString,
  isValidPasswpord,
} from "../../Helper/Helper";
import { useState } from "react";
import { isLoginAtom } from "../../Recoil/atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
export default function Registration() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("demo");
  const [email, setEmail] = useState("demo");
  const [message, setMessage] = useState("");
  const [emmessage, setemMessage] = useState("");
  const [phmessage, setphMessage] = useState("");
  const [pwmessage, setpwMessage] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const [info, setInfo] = useState([]);

  const [login, setLogin] = useRecoilState(isLoginAtom);
  //  const setLogin=useRecoilState(isLoginAtom)
  useEffect(()=>{
            if(localStorage.getItem('UserDetail')){
              let allUserDetail=JSON.parse(localStorage.getItem('UserDetail'))
              
              setInfo(allUserDetail)
            } 
  },[])
  const tohome = useNavigate();
  function ToggleEU() {
    setToggle(!toggle);
  }
  function handleName(inputName) {
    setName(inputName);
  }
  function handleMobile(inputMobile) {
    setPhone(inputMobile);
  }
  function handleEmail(inputEmail) {
    setEmail(inputEmail);
  }
  function handlePassword(inputPassword) {
    setPassword(inputPassword);
  } 
  function submitFunction() {
    const data = {
      name,
      email,
      phone,
      password,
    };
    if (!isValidString(name)) {
      setMessage("Name is Invalid ");
      return;
    }
    if (toggle === true) {
      if (!isValidMobile(phone)) {
        setphMessage("phone is Invalid ");
        return;
      }
    } else {
      if (!isValidEmail(email)) {
        setemMessage("email is Invalid ");
        return;
      }
    }
    if (!isValidPasswpord(password)) {
      setpwMessage("password is Invalid ");
      return;
    }

    info.push(data);
    setInfo([...info]);
    localStorage.setItem("UserDetail", JSON.stringify(info));
    alert("succesfully registered!");
    setLogin(true);
    tohome("/");
    setName("");
    setEmail("");
    setPhone ("");
    setPassword("");                         
    
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      aria-labelledby="responsive-dialog-title"
    >
      <div className={style.maincontainer}>
        <h2>Create your account</h2>

        <DialogContent className={style.btnclass}>
          <Input
            style={{ borderColor: "red" }}
            value={name}
            className={style.inputs}
            type="text"
            text="Name"
            required
            handleOnchange={handleName}
          />
          {!isValidString(name) ? (
            <p style={{ color: "red", height: ".6rem" }}>{message}</p>
          ) : (
            <span></span>
          )}
          {toggle ? (
            <>
              <Input
                className={style.inputs}
                value={phone}
                type="text"
                text="Phone"
                handleOnchange={handleMobile}
              />
              {!isValidMobile(phone) ? (
                <span style={{ color: "red", height: ".3rem" }}>
                  {phmessage}
                </span>
              ) : (
                <span></span>
              )}
            </>
          ) : (
            <>
              <Input
                className={style.inputs}
                value={email}
                type="email"
                text="email"
                handleOnchange={handleEmail}
              />
              {!isValidEmail(email) ? (
                <span style={{ color: "red", height: ".3rem" }}>
                  {emmessage}
                </span>
              ) : (
                <span></span>
              )}
            </>
          )}
          <span className={style.toggle} onClick={ToggleEU}>
            {toggle ? (
              <h6 style={{ display: "flex", justifyContent: "end" }}>
                {" "}
                UseEmail insted{" "}
              </h6>
            ) : (
              <h6 style={{ display: "flex", justifyContent: "end" }}>
                UsePhone insted
              </h6>
            )}
          </span>
          <Input
            className={style.input1}
            value={password}
            type="password"
            text="Password"
            handleOnchange={handlePassword}
          />
          {!isValidPasswpord(password) ? (
            <span style={{ color: "red", height: ".3rem" }}>{pwmessage}</span>
          ) : (
            <span></span>
          )}
          <h4 style={{ marginTop: "1rem" }}>Date of birth</h4>

          <span className={style.date}>
            <select
              id="gMonth2"
              style={{ width: "10rem", height: "3.5rem" }}
              onchange="show_month()"
            >
              <option selected value="">
                Month
              </option>
              <option value="1">Janaury</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>

            <select
              id="gMonth2"
              style={{ width: "5rem", height: "3.5rem" }}
              onchange="show_month()"
            >
              <option value="">Day</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="1">13</option>
              <option value="2">14</option>
              <option value="3">15</option>
              <option value="4">16</option>
              <option value="5">17</option>
              <option value="6">18</option>
              <option value="7">19</option>
              <option value="8">20</option>
              <option value="9">21</option>
              <option value="10">22</option>
              <option value="11">23</option>
              <option value="12">24</option>
              <option value="1">25</option>
              <option value="2">26</option>
              <option value="3">27</option>
              <option value="4">28</option>
              <option value="5">29</option>
              <option value="6">30</option>
              <option value="7">31</option>
            </select>

            <select
              id="gMonth2"
              style={{ width: "5rem", height: "3.5rem" }}
              onchange="show_month()"
            >
              <option value="">Year</option>
              <option value="1">2023</option>
              <option value="2">2022</option>
              <option value="3">2021</option>
              <option value="4">2020</option>
              <option value="5">2019</option>
              <option value="6">2018</option>
              <option value="7">2016</option>
              <option value="8">2015</option>
              <option value="9">2014</option>
              <option value="10">2013</option>
              <option value="11">2012</option>
              <option value="12">2011</option>
              <option value="1">2010</option>
              <option value="2">2009</option>
              <option value="3">2008</option>
              <option value="4">2007</option>
              <option value="5">2006</option>
              <option value="6">2005</option>
              <option value="7">2004</option>
              <option value="8">2003</option>
              <option value="9">2002</option>
              <option value="10">2001</option>

              <option value="11">2000</option>
              <option value="12">1999</option>
              <option value="1">1998</option>
              <option value="2">1997</option>
              <option value="3">1996</option>
              <option value="4">1995</option>
              <option value="5">1994</option>
              <option value="6">1993</option>
              <option value="7">1992</option>
              <option value="12">1991</option>
              <option value="1">1990</option>
              <option value="2">1989</option>
              <option value="3">1987</option>
              <option value="4">1986</option>
              <option value="5">1985</option>
              <option value="6">1984</option>
              <option value="7">1983</option>
              <option value="2">1982</option>
              <option value="3">1981</option>
              <option value="4">1980</option>
              <option value="5">1979</option>
              <option value="6">1978</option>
              <option value="7">1977</option>
            </select>
          </span>
          <Buttons
            className={style.nxtbtn}
            Sign="Sign Up"
            btnNext={submitFunction}
          />
        </DialogContent>
      </div>
    </Dialog>
  );
}
