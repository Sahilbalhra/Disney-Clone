import React from "react";
import styled from "styled-components";
import Category from "./Category";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";

const Home = () => {
  return (
    <Container>
      <ImageSlider />
      <Category />
      <Movies />
    </Container>
  );
};

export default Home;
const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
