import React from "react";
import { Section } from "../../layout";
import SonAnalyzer from "../../../svgs/SonAnalyzer";
import styled from "styled-components";
import GreenButton from "../../utility/GreenButton";
import GreenButtonSecondary from "../../utility/GreenButtonSecondary";
import TypoBtn from "../../utility/TypoBtn";

const SonAnalyser = () => {
  return (
    <Section style={{ flexDirection: "column", alignItems: "center" }}>
      <SonAnalyzer style={{ margin: "0 auto" }} />
      <NavItemsContainer>
        <NavItem active>Tümü</NavItem>
        <NavItem>Piyasa</NavItem>
        <NavItem>Kripto Paralar</NavItem>
        <NavItem>Forex</NavItem>
        <NavItem>Emtia</NavItem>
        <NavItem>Hisse senetleri</NavItem>
        <NavItem>Viop</NavItem>
        <NavItem>Varant</NavItem>
        <NavItem>Tahvil/Bono</NavItem>
      </NavItemsContainer>
      <AnalysisContainer>
        <Analysis />
        <Analysis />
        <Analysis />
      </AnalysisContainer>
        <TypoBtn title="Tümünü Göster" />
      <Paragraph2>
        Bu analizler, Akademi’de belirli bir seviyeye erişmiş onaylı
        kullanıcılarımız tarafından eğitim amaçlı gönderilmektedir.
      </Paragraph2>
    </Section>
  );
};

const Analysis = () => {
  return (
    <EachAnalysisContainer>
      <Figure></Figure>
      <Date>21 Mart 2020</Date>
      <Title>Neousdt Long Analizi</Title>
      <Paragraph>
        Xauusd paritesinde 1560 seviyesinin geçilmekte zorlanılması ve aynı
        zamanda dxy’de bir yükseliş trendi başlaması...
      </Paragraph>
      <GreenButtonSecondary title="Devamı" />
    </EachAnalysisContainer>
  );
};

const NavItemsContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
`;

const NavItem = styled.li`
  text-decoration: none;
  font-size: 1.8rem;
  color: ${({ theme, active }) =>
    active ? theme.navigationBorderColor : theme.navItemText};
  font-weight: normal;
  padding: 1rem 2rem;
  border: 0.1rem solid
    ${({ active, theme }) =>
      active ? theme.navigationBorderColor : "transparent"};
  cursor: pointer;
  background-color: ${({ active, theme }) =>
    active ? theme.navigationBackgroundColor : "transparent"};

  transition: all 0.2s;
  outline: none;

  &:hover {
    border: 0.1rem solid ${({ theme }) => theme.navigationBorderColor};
    background-color: ${({ theme }) => theme.navigationBackgroundColor};
    color: ${({ theme }) => theme.navigationBorderColor};
  }
`;

const AnalysisContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.4rem;
  margin-bottom: 6rem;
`;

const EachAnalysisContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.sonAnalyzerBackground};
  padding: 2.8rem;
`;

const Figure = styled.figure`
  width: 100%;
  height: 22rem;
  background-color: white;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 3.2rem;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.sonAnalyzerTitle};
  margin: 1rem 0 2.4rem 0;
`;

const Date = styled.time`
  font-weight: 500;
  font-size: 2.2rem;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.sonAnalyzerDate};
`;

const Paragraph = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.sonAnalyzerParagraph};
  letter-spacing: -0.02em;
  margin-bottom: 2.4rem;
`;

const Paragraph2 = styled.p`
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.sonAnalyzerParagraph};
  letter-spacing: -0.02em;
  margin-bottom: 2.4rem;
  margin-top: 6rem;
  max-width: 53rem;
  text-align: center;
`;

export default SonAnalyser;
