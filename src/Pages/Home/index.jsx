import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layouts";
import FlatList from "../../Components/FlatList";
import TransactionCard from "../../Components/Cards/Transaction";
import Slider from "../../Components/Slider";
import UserCard from "../../Components/Cards/User";
import Title from "../../Components/Title";
import Product from "../../Components/Cards/Product";
import { BsBagPlus } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import { COLOR } from "../../Utils/Colors";
import Progress from "../../Components/Progress";
import NewsCard from "../../Components/Cards/News";
import StateBox from "../../Components/Cards/State";
const Home = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <FlatList
            data={[
              {
                title: "Income",
                amount: "$ 552.95",
                color: COLOR.green,
              },
              {
                title: "Expenses",
                amount: "$ 86.45",
                color: COLOR.red,
              },
              {
                title: "Total Bills",
                amount: "$ 53.25",
                color: COLOR.black,
              },
              {
                title: "Savings",
                amount: "$ 120.99",
                color: COLOR.black,
              },
            ]}
            renderItem={item => {
              return <StateBox {...item} />;
            }}
          />
        </div>
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
          centeredSlides={false}
          slidesPerView={2}
          space={10}
          data={[
            {
              name: "Jurrien",
              amount: "$ 299",
              desc: "Monthly Health Insurance",
              icon: <BsBagPlus color={COLOR.white} size="1.4rem" />,
              color: COLOR.grap,
            },
            {
              name: "Elwin",
              amount: "$ 962",
              desc: "Credit Card Statement",
              color: COLOR.grap,
              icon: <BsCreditCard color={COLOR.white} size="1.4rem" />,
              color: COLOR.red,
            },
          ]}
          renderItem={item => {
            return <Product data={item} />;
          }}
        />
        <Title title="Saving Goals" link={{ to: "/", title: "View All" }} />
        <div className="row">
          <FlatList
            data={[
              {
                title: "Gaming Console",
                amount: "$ 499",
                subtitlte: "Gaming",
                percent: "85",
              },
              {
                title: "New House",
                amount: "$ 100,000",
                subtitlte: "Living",
                percent: "55",
              },
              {
                title: "Sport Car",
                amount: "$ 42,500",
                subtitlte: "lifestyle",
                percent: "15",
              },
            ]}
            renderItem={item => {
              return <Progress data={item} />;
            }}
          />
        </div>
        <div className="row">
          <Slider
            centeredSlides={false}
            slidesPerView={2}
            header={{
              title: "Lastest News",
              link: {
                title: "Veiw All",
                to: "/",
              },
            }}
            space={15}
            data={[
              {
                name: "What will be the value of bitcoin in the next...",
                img: require("../../assets/images/10.jpeg"),
              },
              {
                name: "Rules you need to know in business",
                img: require("../../assets/images/11.jpeg"),
              },
              {
                name: "10 easy ways to save your money",
                img: require("../../assets/images/12.jpeg"),
              },
              {
                name: "Follow the financial agenda with...",
                img: require("../../assets/images/13.jpeg"),
              },
              {
                name: "What will be the value of bitcoin in the next...",
                img: require("../../assets/images/10.jpeg"),
              },
            ]}
            renderItem={item => {
              return <NewsCard text={item.name} img={item.img} />;
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
