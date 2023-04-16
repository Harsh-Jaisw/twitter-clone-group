import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function Input({ text, className, handleOnchange, type }) {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>
      <TextField className={className} onChange={(e) => handleOnchange(e.target.value)} type={type} id="outlined-basic" label={text} variant="outlined" />
      {/* <input
        className={className}
        placeholder={text}
        type={type}
        onChange={(e) => handleOnchange(e.target.value)}
      /> */}
    </div>
  );
}

export default Input;
