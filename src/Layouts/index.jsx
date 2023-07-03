import React from "react";
import TabBar from "../Components/TabBar";
import { COLOR } from "../Utils/Colors";
const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: COLOR.backgroundColor }}>
      <div style={{ padding: "0 15px" }}>{children}</div>
      <TabBar />
    </div>
  );
};

export default Layout;
