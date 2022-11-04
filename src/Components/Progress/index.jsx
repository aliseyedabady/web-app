import React from "react";
import { ProgressBar } from "react-bootstrap";
import { COLOR } from "../../Utils/Colors";
import { STYLES } from "../../Utils/Styles";

const ProgressCard = ({ data: { title, amount, subtitlte, percent } }) => {
  return (
    <div
      style={{
        padding: STYLES.padding,
        background: COLOR.white,
        boxShadow: STYLES.boxShadow,
        borderRadius: STYLES.borderRadius,
        marginBottom: "10px",
      }}
    >
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ marginBottom: "6px" }}
      >
        <div>
          <h4
            style={{
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            {title}
          </h4>
          <p
            style={{
              fontSize: "11px",
              color: COLOR.gray,
              paddingTop: "4px",
            }}
          >
            {subtitlte}
          </p>
        </div>

        <div>
          <div
            style={{
              fontSize: "15px",
              color: COLOR.black,
              fontWeight: "700",
              letterSpacing: "0.004em",
            }}
          >
            {amount}
          </div>
        </div>
      </div>
      <Progress value={percent} />
    </div>
  );
};
const Progress = ({ value = 50 }) => {
  return (
    <ProgressBar
      now={value}
      style={{ marginTop: "10px" }}
      label={`${value}%`}
    />
  );
};
export default ProgressCard;
ProgressCard.defaultProps = {
  data: {
    title: "Gaming Console",
    amount: "$ 499",
    subtitlte: "Gaming",
    percent: "85",
  },
};
