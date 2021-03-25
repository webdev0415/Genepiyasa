import React from "react";
import styled from "styled-components";
import ForexUkulu2 from "./../../../rawSvg/forexUkulu2.svg";
import Locked from "./../../../rawSvg/locked.svg";
import H3Medium from "../../typography/H3Medium";
import { Paragraph } from "../../layout";
import NestedBullets from "../../utility/NestedBullets";

const Section2 = () => {
  return (
    <Container>
      <LeftSection>
        <img src={ForexUkulu2} alt=" " />
        <img src={Locked} alt="" style={{ marginTop: "2rem" }} />
      </LeftSection>
      <RightSection>
        <H3Medium>2. Sınıf</H3Medium>
        <Paragraph style={{ margin: "1.6rem 0 5rem 0" }}>
          Paritesinde 1h’lık zaman diliminde yükselen üçgen formasyonu
          gözlenmiştir.
        </Paragraph>
        <NestedBullets />
      </RightSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding-bottom: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.progressBarBorderColor};
`;

const LeftSection = styled.div`
  max-width: 36rem;
  margin-right: 9.7rem;
`;

const RightSection = styled.div`
  flex: 1;
  margin-top: 6.4rem;
`;

export default Section2;
