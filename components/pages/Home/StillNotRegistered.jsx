import React from "react";
import GreenButton from "../../utility/GreenButton";
import styled from "styled-components";
import { Section } from "../../layout";
import TypoBtn from "../../utility/TypoBtn";

const StillNotRegistered = () => {
  return (
    <Section>
      <Container>
        <Left>
          <SubTitle>Hala siteye kayıt olmadın mı?</SubTitle>
          <Title>Hemen aramıza katıl!</Title>
        </Left>
        <TypoBtn title="Aramıza Katıl!" />
      </Container>
    </Section>
  );
};

const Container = styled.div`
  padding: 4rem;
  border-width: 0.1rem;
  border-style: solid;
  border-color: ${({ theme }) => theme.stillNotRegisteredBorderColor};
  background-color: ${({ theme }) => theme.stillNotRegisteredBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.4rem;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.stillNotRegisteredSubTitle};
`;

const Title = styled.h1`
  font-size: 3.4rem;
  line-height: 3.8rem;
  letter-spacing: -0.05em;
  padding-top: 0.6rem;
  color: ${({ theme }) => theme.titleColor};
`;

export default StillNotRegistered;
