import React from "react";
import { COLOR } from "../../../Utils/Colors";
import { STYLES } from "../../../Utils/Styles";

const News = ({ img, text }) => {
  return (
    <div
      style={{
        backgroundColor: COLOR.white,
        boxShadow: STYLES.boxShadow,
        borderRadius: STYLES.borderRadius,
      }}
    >
      <img
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "10px 10px 0 0",
        }}
        src={img}
      />
      <div style={{ padding: "12px 16px" }}>
        <h4
          style={{
            fontSize: "14px",
            fontWeight: "500",
            textAlign: "left",
            height: "67px",
            lineHeight: "1.4rem",
          }}
        >
          {text}
        </h4>
      </div>
    </div>
  );
};

export default News;
