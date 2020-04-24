import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "auto",
        height: "500px",
        scrollbar: "none",
      }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;
