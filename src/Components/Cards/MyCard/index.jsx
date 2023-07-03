import React from "react";
import { COLOR } from "../../../Utils/Colors";
import { STYLES } from "../../../Utils/Styles";

const MyCard = ({ data, style = {} }) => {
  return (
    <div
      style={{
        borderRadius: STYLES.borderRadius,
        boxShadow: STYLES.boxShadow,
        marginBottom: "16px",
        padding: STYLES.padding,
        backgroundColor: data.color,
        ...style,
        backgroundImage:
          "linear-gradient(-180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.23) 100%)",
      }}
    >
      <div>
        <h5
          style={{
            fontSize: "11px",
            opacity: 0.5,
            fontWeight: "500",
            color: COLOR.white,
            textAlign: "left",
          }}
        >
          BALANCE
        </h5>
        <p
          style={{
            fontWeight: "700",
            fontSize: "24px",
            textAlign: "left",
            color: COLOR.white,
          }}
        >
          {data.balance}
        </p>
      </div>
      <div style={{ margin: "20px 0" }}>
        <h5
          style={{
            fontSize: "11px",
            opacity: 0.5,
            textAlign: "left",
            fontWeight: "500",
            color: COLOR.white,
          }}
        >
          CARD NUMBER
        </h5>
        <p
          style={{
            color: COLOR.white,
            fontSize: "17px",
            textAlign: "left",
          }}
        >
          {data.cardNumber}
        </p>
      </div>
      <div className="d-flex">
        <div style={{ marginRight: "20px" }}>
          <h5
            style={{
              fontSize: "11px",
              opacity: 0.5,
              fontWeight: "500",

              color: COLOR.white,
            }}
          >
            EXPIRY
          </h5>
          <p style={{ color: COLOR.white, fontSize: "14px" }}>{data.EXPIRY}</p>
        </div>
        <div>
          <h5
            style={{
              fontSize: "11px",
              opacity: 0.5,
              fontWeight: "500",
              color: COLOR.white,
            }}
          >
            ccv
          </h5>
          <p style={{ color: COLOR.white, fontSize: "14px" }}>{data.ccv}</p>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
