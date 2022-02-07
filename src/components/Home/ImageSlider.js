import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const ImageSlider = () => {
  let settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/images/slider-badag.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
};

export default ImageSlider;
const Carousel = styled(Slider)`
  margin: 30px;
`;
const Wrap = styled.div`
  img {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
  }
`;
