import React from "react";
import { COLOR } from "../../Utils/Colors";
import { STYLES } from "../../Utils/Styles";

const UserCard = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: COLOR.white,
        boxShadow: STYLES.boxShadow,
        padding: "10px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <img src={data.img} style={{ borderRadius: STYLES.borderRadius }} />
      <p style={{ fontSize: "11px", color: COLOR.black, marginTop: "8px" }}>
        {data.name}
      </p>
    </div>
  );
};

export default UserCard;
