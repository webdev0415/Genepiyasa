import React from "react";
import { Section } from "../../layout";
import styled from "styled-components";

const Sponsors = () => {
  return (
    <Section column>
      <Title>Sponsorlar</Title>
      <SponsorsContainer>
        <Sponsor>364x100</Sponsor>
        <Sponsor>364x100</Sponsor>
        <Sponsor>364x100</Sponsor>
      </SponsorsContainer>
    </Section>
  );
};

export const Title = styled.h1`
  font-weight: 500;
  font-size: 3.4rem;
  line-height: 3.8rem;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.titleColor};
  text-align: center;
`;

const SponsorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.2rem;
  height: 10rem;
  margin-top: 6rem;
`;

const Sponsor = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background-color: #1c1544;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.titleColor};
`;

export default Sponsors;
