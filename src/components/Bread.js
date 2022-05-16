import React from "react";

function Bread(props) {
  return (
    <div className="bread">
      {props.path.forEach((El) => {
        return <div className="bread-item">{El}</div>;
      })}
    </div>
  );
}

export default Bread;
