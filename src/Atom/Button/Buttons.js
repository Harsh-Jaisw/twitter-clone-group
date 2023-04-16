import React from "react";
function Buttons({ Sign, logo, className, image, btnNext, disabled }) {
  return (
    <>
      <button
        style={{ cursor: "pointer" }}
        className={className}
        onClick={btnNext}
        disabled={disabled}
      >
        {image}&nbsp;&nbsp;&nbsp;{Sign}&nbsp;&nbsp;&nbsp;{logo}
      </button>
    </>
  );
}
export default Buttons;
