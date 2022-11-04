import React from "react";
import { COLOR } from "../../../Utils/Colors";
import { STYLES } from "../../../Utils/Styles";
import IconBox from "../../IconBox";

const Product = ({
  data: { amount = "", desc = "", btn = {}, icon = "", color = COLOR.grap },
}) => {
  return (
    <div
      style={{
        backgroundColor: COLOR.white,
        boxShadow: STYLES.boxShadow,
        borderRadius: STYLES.borderRadius,
        padding: STYLES.padding,
        width: "100%",
      }}
    >
      <div className="d-flex justify-content-center">
        <IconBox color={color} icon={icon} />
      </div>
      <div>
        <h5
          style={{
            color: COLOR.black,
            fontWeight: "700",
            fontSize: "20px",
            letterSpacing: "0.004em",
            marginTop: "12px",
          }}
        >
          {amount}
        </h5>
        <p
          style={{
            fontSize: "11px",
            marginTop: "10px",
            color: COLOR.gray,
          }}
        >
          {desc}
        </p>
      </div>
      <div>
        <button
          style={{
            backgroundColor: COLOR.grap,
            color: COLOR.white,
            width: "100%",
            borderRadius: "10px",
            fontWeight: "500",
            fontSize: "12px",
            padding: "4px 6px",
            marginTop: "20px",
          }}
        >
          PAY NOW
        </button>
      </div>
    </div>
  );
};

export default Product;
Product.defaultProps = {
  data: {
    amount: "",
    desc: "",
    btn: { text: "", to: "" },
    img: "",
  },
};
