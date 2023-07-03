import React from "react";
import { BsCamera } from "react-icons/bs";
import { COLOR } from "../../Utils/Colors";

const ImageProfile = () => {
  return (
    <div className=" position-relative">
      <img
        style={{
          border: `5px solid ${COLOR.white}`,
          borderRadius: "100%",
          width: "100px",
        }}
        src={require("../../assets/images/14.jpeg")}
      />
      <div
        style={{
          position: "absolute",
          color: COLOR.white,
          backgroundColor: COLOR.grap,
          borderRadius: "100%",
          width: "32px",
          height: "32px",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
          right: 0,
        }}
      >
        <BsCamera size={"1.2rem"} />
      </div>
    </div>
  );
};

export default ImageProfile;
