import React from "react";
import { BsCreditCard } from "react-icons/bs";
import { COLOR } from "../../Utils/Colors";

const IconBox = ({ icon, color = "", style = {} }) => {
  return (
    <div
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
        ...style,
      }}
    >
      {icon}
    </div>
  );
};

export default IconBox;
