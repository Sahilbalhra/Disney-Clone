import React from "react";
import styled from "styled-components";

const LogIn = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/images/cta-logo-one.svg" />
        <SignUp>Get All There</SignUp>
        <Description>
            Get Premium Account
        </Description>
        <CTALogoTwo src="/images/images/cta-logo-two.png"/>
      </CTA>
    </Container>
  );
};

export default LogIn;
const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/images/login-background.jpg");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;
const CTALogoOne = styled.img``;
const SignUp = styled.a`
  padding: 17px 0;
  width: 100%;
  background-color: #0063e5;
  color: #f9f9f9;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top:8px;
  margin-bottom:12px;
  &:hover {
    background: #0483ee;
  }
`;
const Description=styled.p`
font-size:16px;
letter-spacing:1.5px;
text-align:center;

`;
const CTALogoTwo=styled.img`
`