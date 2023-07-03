import React from "react";
import { IoHome, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineFileText } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { COLOR } from "../../Utils/Colors";
const TabBar = () => {
  const { pathname } = useLocation();
  console.log("pa", pathname);
  let props = {
    size: "1.3rem",
    color: COLOR.black,
  };
  let elements = [
    {
      icon: (
        <IoHome {...props} color={pathname == "/" ? COLOR.grap : COLOR.black} />
      ),
      text: "Home",
      route: "/",
    },
    {
      icon: (
        <AiOutlineFileText
          {...props}
          color={pathname == "/Pages" ? COLOR.grap : COLOR.black}
        />
      ),
      text: "Pages",
      route: "/Pages",
    },
    {
      icon: (
        <MdFavoriteBorder
          {...props}
          color={pathname == "/" ? COLOR.grap : COLOR.black}
        />
      ),
      text: "Favorites",
      route: "",
    },
    {
      icon: (
        <BsCreditCard
          {...props}
          color={pathname == "/Cards" ? COLOR.grap : COLOR.black}
        />
      ),
      text: "My Cards",
      route: "/Cards",
    },
    {
      icon: (
        <IoSettingsOutline
          {...props}
          color={pathname == "/Settings" ? COLOR.grap : COLOR.black}
        />
      ),
      text: "Settings",
      route: "/Settings",
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
        padding: "0 20px",
        borderTop: `1px solid ${COLOR.border}`,
        backgroundColor: COLOR.white,
        zIndex: 1,
        minHeight: "56px",
      }}
    >
      {elements.map(tab => {
        let isIn = pathname === tab.route;
        return (
          <Link
            to={tab.route}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1,
              borderTop: isIn ? `2px solid ${COLOR.grap}` : "2px solid #fff",
              padding: "5px 10px",
            }}
          >
            <span style={{}}> {tab.icon}</span>
            <span
              style={{
                fontSize: "9px",
                color: isIn ? COLOR.grap : COLOR.black,
                marginTop: "2px",
              }}
            >
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
