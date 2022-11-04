import React from "react";
import { COLOR } from "../../../Utils/Colors";
import { STYLES } from "../../../Utils/Styles";

const StateBox = ({ title, amount, color }) => {
  return (
    <div className="col-6 mb-2">
      <div
        style={{
          backgroundColor: COLOR.white,
          boxShadow: STYLES.boxShadow,
          borderRadius: STYLES.borderRadius,
          padding: STYLES.padding,
        }}
      >
        <div
          style={{
            fontSize: "13px",
            color: COLOR.gray,
            fontWeight: 500,
            marginBottom: "8px",
            lineHeight: "1.4em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "700",
            letterSpacing: "-0.02em",
            lineHeight: " 1em",
            color,
          }}
        >
          {amount}
        </div>
      </div>
    </div>
  );
};

export default StateBox;
