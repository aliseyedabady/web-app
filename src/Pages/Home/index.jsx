import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layouts";
import FlatList from "../../Components/FlatList";
import TransactionCard from "../../Components/TransactionCard";
import Slider from "../../Components/Slider";
import UserCard from "../../Components/UserCard";
import Title from "../../Components/Title";
const Home = () => {
  return (
    <Layout>
      <div className="container">
        <Title title="Transactions" link={{ to: "/", title: "View All" }} />

        <div className="row">
          <FlatList
            renderItem={(item, key) => {
              return <TransactionCard data={item} key={key} />;
            }}
            data={[
              {
                img: require("../../assets/images/1.jpeg"),
                title: "Amazon",
                subtitle: "Shopping",
                amount: "- $150",
                type: "expense",
              },
              {
                img: require("../../assets/images/2.jpeg"),
                title: "Apple",
                subtitle: "Appstore Purchase",
                amount: "- $29",
                type: "expense",
              },
              {
                img: require("../../assets/images/3.jpeg"),
                title: "Alex Ljung",
                subtitle: "Transfer",
                amount: "+ $1,000",
                type: "income",
              },
              {
                img: require("../../assets/images/4.jpeg"),
                title: "Beatriz Brito",
                subtitle: "Transfer",
                type: "expense",
                amount: "- $186",
              },
            ]}
          />
        </div>

        <Slider
          header={{
            title: "Send Money",
            link: {
              title: "Add New",
              to: "/",
            },
          }}
          space={10}
          data={[
            {
              name: "Jurrien",
              img: require("../../assets/images/3.jpeg"),
            },
            {
              name: "Elwin",
              img: require("../../assets/images/4.jpeg"),
            },
            {
              name: "Alma",
              img: require("../../assets/images/5.jpeg"),
            },
            {
              name: "Justine",
              img: require("../../assets/images/6.jpeg"),
            },
            {
              name: "Maria",
              img: require("../../assets/images/7.jpeg"),
            },
            {
              name: "Pamela",
              img: require("../../assets/images/8.jpeg"),
            },
          ]}
          renderItem={item => {
            return <UserCard data={item} />;
          }}
        />
        <Slider
          header={{
            title: "Monthly Bills",
            link: {
              title: "View All",
              to: "/",
            },
          }}
          space={10}
          data={[
            {
              name: "Jurrien",
              img: require("../../assets/images/2.jpeg"),
            },
            {
              name: "Elwin",
              img: require("../../assets/images/4.jpeg"),
            },
            {
              name: "Alma",
              img: require("../../assets/images/5.jpeg"),
            },
            {
              name: "Justine",
              img: require("../../assets/images/6.jpeg"),
            },
            {
              name: "Maria",
              img: require("../../assets/images/7.jpeg"),
            },
            {
              name: "Pamela",
              img: require("../../assets/images/8.jpeg"),
            },
          ]}
          renderItem={item => {
            return <UserCard data={item} />;
          }}
        />
      </div>
    </Layout>
  );
};

export default Home;
