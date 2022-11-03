import React from "react";
import { IoHome, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineFileText } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { Link } from "react-router-dom";
import { COLOR } from "../../Utils/Colors";
const TabBar = () => {
  let props = {
    size: "1.3rem",
    color: COLOR.black,
  };
  let elements = [
    {
      icon: <IoHome {...props} />,
      text: "Home",
      route: "/",
    },
    {
      icon: <AiOutlineFileText {...props} />,
      text: "Pages",
      route: "",
    },
    {
      icon: <MdFavoriteBorder {...props} />,
      text: "Favorites",
      route: "",
    },
    {
      icon: <BsCreditCard {...props} />,
      text: "My Cards",
      route: "",
    },
    {
      icon: <IoSettingsOutline {...props} />,
      text: "Settings",
      route: "",
    },
  ];
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 20px",
        borderTop: `1px solid ${COLOR.border}`,
        backgroundColor: COLOR.white,
        zIndex: 1,
      }}
    >
      {elements.map(tab => {
        return (
          <Link
            to={tab.route}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span> {tab.icon}</span>
            <span style={{ fontSize: "12px", color: COLOR.black }}>
              {" "}
              {tab.text}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default TabBar;
