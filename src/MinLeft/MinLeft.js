import style from "./MinLeft.module.css";
import { arrs } from "../../src/const";
import React from "react";

function MinLeft() {
  return (
    <div className={style.mainDiv}>
      {arrs?.map((arr, index) => {
        return (
          <>
            <div key={index} className={style.smallIcons}>
              {arr.icon}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default MinLeft;
