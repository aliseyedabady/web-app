import React from "react";
import Menu from "../../Components/Cards/Menu";
import Layout from "../../Layouts";
import { BiCube } from "react-icons/bi";
import { COLOR } from "../../Utils/Colors";
import { useNavigate } from "react-router-dom";
const Screens = () => {
  const prop = {
    icon: <BiCube size="1.4rem" color={COLOR.white} />,
    color: COLOR.grap,
  };
  const navigate = useNavigate();
  return (
    <Layout>
      <Menu
        title={"App Pages"}
        tools={[
          {
            label: "Transactions",
            action: {
              method: () => {
                navigate("/Transactions");
              },
            },
          },
          {
            label: "Transaction Detail",
            action: {},
          },
          {
            label: "Transaction Verification",
            action: {},
          },
          {
            label: "Cards",
            action: {},
          },
          {
            label: "Savings",
            action: {},
          },
          {
            label: "Bills",
            action: {},
          },
          {
            label: "Notifications",
            action: {},
          },
          {
            label: "Notification Detail",
            action: {},
          },
          {
            label: "Settings",
            action: {},
          },
        ].map(item => {
          return {
            ...item,
            ...prop,
          };
        })}
      />
      <Menu
        title={"Cryptocurrency"}
        tools={[
          {
            label: "Transactions",
            action: {},
          },
          {
            label: "Transaction Detail",
            action: {},
          },
          {
            label: "Transaction Verification",
            action: {},
          },
          {
            label: "Cards",
            action: {},
          },
          {
            label: "Savings",
            action: {},
          },
          {
            label: "Bills",
            action: {},
          },
          {
            label: "Notifications",
            action: {},
          },
          {
            label: "Notification Detail",
            action: {},
          },
          {
            label: "Settings",
            action: {},
          },
        ].map(item => {
          return {
            ...item,
            ...prop,
            color: COLOR.green,
          };
        })}
      />
      <Menu
        title={"Authentication"}
        tools={[
          {
            label: "Transactions",
            action: {},
          },
          {
            label: "Transaction Detail",
            action: {},
          },
          {
            label: "Transaction Verification",
            action: {},
          },
          {
            label: "Cards",
            action: {},
          },
          {
            label: "Savings",
            action: {},
          },
          {
            label: "Bills",
            action: {},
          },
          {
            label: "Notifications",
            action: {},
          },
          {
            label: "Notification Detail",
            action: {},
          },
          {
            label: "Settings",
            action: {},
          },
        ].map(item => {
          return {
            ...item,
            ...prop,
            color: COLOR.red,
          };
        })}
      />
      <Menu
        title={"Blog"}
        tools={[
          {
            label: "Transactions",
            action: {},
          },
          {
            label: "Transaction Detail",
            action: {},
          },
          {
            label: "Transaction Verification",
            action: {},
          },
          {
            label: "Cards",
            action: {},
          },
          {
            label: "Savings",
            action: {},
          },
          {
            label: "Bills",
            action: {},
          },
          {
            label: "Notifications",
            action: {},
          },
          {
            label: "Notification Detail",
            action: {},
          },
          {
            label: "Settings",
            action: {},
          },
        ].map(item => {
          return {
            ...item,
            ...prop,
            color: COLOR.gray,
          };
        })}
      />
      <Menu
        title={"Others"}
        tools={[
          {
            label: "Transactions",
            action: {},
          },
          {
            label: "Transaction Detail",
            action: {},
          },
          {
            label: "Transaction Verification",
            action: {},
          },
          {
            label: "Cards",
            action: {},
          },
          {
            label: "Savings",
            action: {},
          },
          {
            label: "Bills",
            action: {},
          },
          {
            label: "Notifications",
            action: {},
          },
          {
            label: "Notification Detail",
            action: {},
          },
          {
            label: "Settings",
            action: {},
          },
        ].map(item => {
          return {
            ...item,
            ...prop,
            color: COLOR.green,
          };
        })}
      />
    </Layout>
  );
};

export default Screens;
