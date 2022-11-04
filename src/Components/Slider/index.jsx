import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";
import { COLOR } from "../../Utils/Colors";
import Title from "../Title";
const Slider = ({
  data = [],
  renderItem = () => {},
  space = 30,
  header = {},
  slidesPerView = 4,
  centeredSlides = true,
}) => {
  return (
    <>
      {header && <Title title={header.title} link={header.link} />}
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={space}
        centeredSlides={centeredSlides}
        pagination={{
          clickable: true,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
        modules={[Pagination]}
        initialSlide={4}
        loop={true}
      >
        {data.map((item, count) => {
          return (
            <SwiperSlide style={{ backgroundColor: "transparent" }} key={count}>
              {renderItem(item, count)}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
