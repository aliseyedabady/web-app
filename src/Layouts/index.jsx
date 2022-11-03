import React from "react";
import TabBar from "../Components/TabBar";
import { COLOR } from "../Utils/Colors";
const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: COLOR.backgroundColor }}>
      {children}
      <TabBar />
    </div>
  );
};

export default Layout;
