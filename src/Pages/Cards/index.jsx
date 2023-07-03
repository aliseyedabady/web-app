import React from "react";
import MyCard from "../../Components/Cards/MyCard";
import FlatList from "../../Components/FlatList";
import Layout from "../../Layouts";
import { COLOR } from "../../Utils/Colors";

const Cards = () => {
  return (
    <Layout>
      <FlatList
        data={[
          {
            balance: "$ 1,256,90",
            cardNumber: "•••• 9905",
            EXPIRY: "12 / 25",
            ccv: "553",
            color: COLOR.grap,
          },
          {
            balance: "$ 521,44",
            cardNumber: "•••• 9905",
            EXPIRY: "12 / 25",
            ccv: "553",
            color: COLOR.gray,
          },
          {
            balance: "$ 1,256,90",
            cardNumber: "•••• 9905",
            EXPIRY: "12 / 25",
            ccv: "553",
            color: COLOR.green,
          },
          {
            balance: "$ 1,256,90",
            cardNumber: "•••• 9905",
            EXPIRY: "12 / 25",
            ccv: "553",
            color: COLOR.red,
          },
          {
            balance: "$ 1,256,90",
            cardNumber: "•••• 9905",
            EXPIRY: "12 / 25",
            ccv: "553",
            color: COLOR.yellow,
          },
          {
            balance: "$ 1,256,90",
            cardNumber: "•••• 9905",
            EXPIRY: "12 / 25",
            ccv: "553",
            color: COLOR.lightGreen,
          },
          {
            balance: "$ 1,256,90",
            cardNumber: "•••• 9905",
            EXPIRY: "12 / 25",
            ccv: "553",
            color: COLOR.dark,
          },
        ]}
        renderItem={item => {
          return <MyCard data={item} />;
        }}
      />
    </Layout>
  );
};

export default Cards;
