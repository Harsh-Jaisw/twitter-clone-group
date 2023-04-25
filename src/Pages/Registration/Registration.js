import React from "react";
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
import { yearArray, monthArray, dateArray } from "../../const";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
export default function Registration() {
  const [open] = React.useState(true);
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
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [login, setLogin] = useRecoilState(isLoginAtom);
  
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
  function handleDate(e) {
    setDate(e.target.value);
  }
  function handleMonth(e) {
    setMonth(e.target.value);
  }
  function handleYear(v) {
    setYear(v.target.value);
  }
  function submitFunction() {
    const data = {
      name,
      email,
      phone,
      password,
      dateOfBirth: `${month + "/" + date + "/" + year}`,
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

    if (!isValidString(date) || !isValidString(month) || !isValidString(year)) {
      alert("Invalid Date !!");
      return;
    }

    info.push(data);
    setInfo(info);
    localStorage.setItem("UserDetail", JSON.stringify(info));
    alert("succesfully registered!");
    setLogin(true);
    tohome("/home");
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    // console.log(login);
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        style: {
          height:"40rem",
          borderRadius:"8px"
        },
      }}
    >
      <div className={style.maincontainer}>
        <h2 className={style.create}>Create your account</h2>

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
            <span style={{ color: "red", height: ".6rem" }}>{message}</span>
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
              <h6
                style={{
                  color: "#00acee",
                  marginTop: "1rem",
                  marginLeft: "14rem",
                }}
              >
                {" "}
                UseEmail insted{" "}
              </h6>
            ) : (
              <h6
                style={{
                  color: "#00acee",
                  marginTop: "1rem",
                  marginLeft: "14rem",
                }}
              >
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
          <div
            style={{ marginTop: "0.5rem", fontSize: "15px", fontWeight: "700" }}
          >
            Date of birth
          </div>
          {/* <span st>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span> */}
          <span className={style.date}>
            {/* <Customselect onChange={handleMonth} selectItem={"Month"} /> */}
            <select
              id="gMonth2"
              style={{ width: "10rem", height: "3.5rem" }}
              onChange={handleMonth}

            >
              <option selected value="">
                Month
              </option>
              {monthArray.map((ele) => (
               <option value={ele}>{ele}</option>
              ))}
            </select>

            <select
              id="gMonth2"
              style={{ width: "5rem", height: "3.5rem" }}
              onChange={handleDate}
            >
              <option value="">Day</option>
              {dateArray.map((ele) => (
                <option>{ele}</option>
              ))}
            </select>

            <select
              id="gMonth2"
              style={{ width: "5rem", height: "3.5rem" }}
              value={year}
              onChange={handleYear}
            >
              <option value="">Year</option>
              {yearArray.map((ele) => (
                <option>{ele}</option>
              ))}
            </select>
          </span>
          <Buttons
            className={style.nxtbtn}
            Sign="Sign Up"
            btnNext={submitFunction}
            disabled={password.length < 1}
          />
        </DialogContent>
      </div>
    </Dialog>
  );
}
