import React, {useState} from "react";
import AuthSVG from "./../../../rawSvg/auth.svg";
import styled from "styled-components";

const SignUpImage = ({ step, setStep }) => {
  const [activeStep, setActiveStep] = useState(step)
  const handleClick = e => {
    setStep(Number(e.target.id))
  }
  return (
    <Container>
      <StepCounter>
        <Step completed={step >= 1} id={1} onClick={e=>handleClick(e)} >Adım 1</Step>
        <Step completed={step >= 2} id={2} onClick={e=>handleClick(e)} >Adım 2</Step>
        <Step completed={step >= 3} id={3} onClick={e=>handleClick(e)} >Adım 3</Step>
      </StepCounter>
      <Title>Borsada kazanmak hiç bu kadar kolay olmamıştı.</Title>
      <Auth src={AuthSVG} />
    </Container>
  );
};
const Container = styled.div`
  max-width: 58rem;
  display: flex;
  min-height: 82.8rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4.5rem;
  background-color: ${({ theme }) => theme.imageBackground};
  border: 1px solid ${({ theme }) => theme.imagesBorder};
`;

const StepCounter = styled.div`
  display: flex;
`;

const Step = styled.p`
  color: ${({ theme }) => theme.titleColor};
  position: relative;
  margin: 1.2rem;
  padding: 1.2rem;
  border: 1px solid ${({ theme }) => theme.signUpCompleted};
  background-color: ${({ theme, completed }) =>
    completed ? theme.signUpCompleted : theme.signUpNotCompleted};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    height: 1px;
    width: 2.5rem;
    background-color: ${({ theme, completed }) =>
      completed ? theme.signUpCompleted : theme.signUpNotCompleted};
  }

  &:last-child::after {
    height: 0;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 4rem;
  line-height: 4.8rem;
  text-align: center;
  width: 30rem;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.titleColor};
`;

const Auth = styled.img`
  width: 66.7rem;
`;

export default SignUpImage;
