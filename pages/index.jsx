import React, { useRef } from "react";
import styled from "styled-components";
import HomeChart2Raw from "./../rawSvg/secondChart.svg";
import HomeChart3Raw from "./../rawSvg/thirdChart.svg";
import Completion from "./../rawSvg/completion.svg";
import Waves from "./../rawSvg/waves.svg";
import GreenButton from "../components/utility/GreenButton";
import TypoBtn from "../components/utility/TypoBtn"

import {
  Section,
  SectionFull,
  TopContentLeftContainer,
  Paragraph,
  TopContentRightContainer,
  SecondaryTitle,
  TopContentRightContent,
  ContentContainer,
} from "../components/layout";

import SonAnalyzer from "../components/pages/Home/SonAnalyser";
import FirstSection from "../components/pages/Home/FirstSection";
import Comments from "../components/pages/Home/Comments";
import StillNotRegistered from "../components/pages/Home/StillNotRegistered";
import League from "../components/pages/Home/League";
import Sponsors from "../components/pages/Home/Sponsors";

const Home = () => {
  const downContentRef = useRef();

  const handleNext = () => {
    const { x, y } = downContentRef.current.getBoundingClientRect();
    window.scrollTo({ top: y, left: x, behavior: "smooth" });
  };

  return (
    <ContentContainer>
      <FirstSection handleNext={handleNext} />
      <div ref={downContentRef}>
        <Section>
          <TopContentRightContainer>
            <TopContentRightContent alt=" " src={HomeChart2Raw} />
          </TopContentRightContainer>
          <TopContentLeftContainer style={{ justifyContent: "flex-start" }}>
            <SecondaryTitle>En Geniş Türkçe Kaynak</SecondaryTitle>
            <Paragraph style={{ marginTop: "2.4rem", marginBottom: "3.2rem" }}>
              Finans piyasalarında bilinçli yatırımcı olmak için ücretsiz
              akademiye başlayın, başarı sertifikanızı alın.
            </Paragraph>
            <TypoBtn title="Ücretsiz Katıl!" />
          </TopContentLeftContainer>
        </Section>
        <Section>
          <TopContentLeftContainer
            style={{ justifyContent: "center", width: "100%" }}
          >
            <SecondaryTitle>Önce Kendine Yatırım Yap</SecondaryTitle>
            <Paragraph style={{ marginTop: "2.4rem", marginBottom: "3.2rem" }}>
              Akademi yazarlarından yüzyüze/uzaktan eğitim alın, zamanınızdan
              tasarruf ederek hızlıca piyasalarda kazanmaya başlayın.
            </Paragraph>

            <TypoBtn title="Kazanmaya Başla!" />
          </TopContentLeftContainer>
          <TopContentRightContainer>
            <TopContentRightContent alt=" " src={HomeChart3Raw} />
          </TopContentRightContainer>
        </Section>
        <SectionFull>
          <WavesBackground src={Waves} alt=" " />
          <WavesBackgroundSecondary src={Waves} alt=" " />
          <Section style={{ marginTop: 0 }}>
            <TopContentRightContainer>
              <TopContentRightContent
                style={{ maxWidth: "54.6rem" }}
                alt=" "
                src={Completion}
              />
            </TopContentRightContainer>
            <TopContentLeftContainer style={{ justifyContent: "center" }}>
              <SecondaryTitle>Topluluk Ödül Programı</SecondaryTitle>
              <Paragraph
                style={{ marginTop: "2.4rem", marginBottom: "3.2rem" }}
              >
                Analiz yayınlayarak site gelirlerine ortak olun ve
                pozisyonlarınızı hedefleyin.
              </Paragraph>
              <TypoBtn title="Hemen Başla" />
            </TopContentLeftContainer>
          </Section>
        </SectionFull>
        <SonAnalyzer />
        <Comments />
        <StillNotRegistered />
        <League />
        <Sponsors />
      </div>
    </ContentContainer>
  );
};

export const WavesBackground = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
`;
export const WavesBackgroundSecondary = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  transform: rotateX(180deg) rotateY(180deg);
`;

export default Home;
