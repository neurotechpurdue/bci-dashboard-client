import React from "react";

const Dropdown = (props) => {
  console.log(props.visible);
  return (
    props.visible && (
      <div style={{ backgroundColor: "blue" }}>{props.content}</div>
    )
  );
};
export default Dropdown;
