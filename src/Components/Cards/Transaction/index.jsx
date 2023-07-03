import React from "react";
import { COLOR } from "../../../Utils/Colors";
import { STYLES } from "../../../Utils/Styles";

const TransactionCard = ({ data }) => {
  return (
    <div
      className="d-flex "
      style={{
        backgroundColor: COLOR.white,
        boxShadow: STYLES.boxShadow,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px",
        marginBottom: "10px",
        padding: STYLES.padding,
      }}
    >
      <div className="d-flex " style={{ alignItems: "center" }}>
        <div>
          <img src={data.img} style={{ width: "48px", borderRadius: "10px" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: "15px",
          }}
        >
          <h4 style={{ fontSize: "15px", fontWeight: "500" }}>{data.title}</h4>
          <p style={{ fontSize: "11px" }}>{data.subtitle}</p>
        </div>
      </div>
      <div>
        <p
          style={{
            fontWeight: "700",
            fontSize: "15px",
            color: data.type == "income" ? COLOR.black : COLOR.red,
          }}
        >
          {data.amount}
        </p>
      </div>
    </div>
  );
};

export default TransactionCard;
