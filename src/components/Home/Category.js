import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/images/viewers-disney.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/images/viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/images/viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/images/viewers-starwars.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/images/viewers-national.png" alt="" />
      </Wrap>
    </Container>
  );
};

export default Category;
const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;
const Wrap = styled.div`
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  //   box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
`;
