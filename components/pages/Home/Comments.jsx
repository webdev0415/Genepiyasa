import React from "react";
import {
  Section,
  TopContentLeftContainer,
  TopContentRightContainer,
  SecondaryTitle,
  Paragraph,
  User,
  Username,
} from "../../layout";
import GreenButton from "../../utility/GreenButton";

import Waves from "./../../../rawSvg/wavesInComment.svg";
import CommentIcon from "./../../../rawSvg/commentIcon.svg";
import styled from "styled-components";
import ArrowButton from "../../../svgs/ArrowButton";
import TypoBtn from "../../utility/TypoBtn";

const Comments = () => {
  return (
    <Section style={{ minHeight: "47.7rem" }}>
      <TopContentRightContainer
        style={{
          maxWidth: "45rem",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <TopContentRightContent src={Waves} alt=" " />
        <TitleAndButtonsWrapper>
          <Title>Yorumlar</Title>
          <ArrowButtons>
            <ArrowButton leftArrow />
            <ArrowButton style={{ marginLeft: "2.5rem" }} rightArrow />
          </ArrowButtons>
        </TitleAndButtonsWrapper>
        <CommentContainer>
          <CommentIconJSX src={CommentIcon} />
          <Header>
            <User src="https://graph.facebook.com/2437264156287210/picture/?height=200" />
            <NameDateContainer>
              <Username>User</Username>
              <CommentDate>18 Şubat 2020 / 09:40</CommentDate>
            </NameDateContainer>
          </Header>
          <Body>
            Harika bir süreçti. Sıkılmadan eğlenceli bir anlatımla bir çok şey
            öğrendim. Hatta aslında doğru bildiğim bazı şeylerin yanlış olduğunu
            ve nasıl olması gerektiğini bu süreçte öğrenme şansım oldu. Emeği
            geçen herkese sonsuz teşekkür ediyorum böyle bir hizmetin emeği
            ödenmez, Allah razı olsun.
          </Body>
        </CommentContainer>
      </TopContentRightContainer>
      <TopContentLeftContainer style={{ justifyContent: "center" }}>
        <SecondaryTitle>Genel Piyasa’dan Mezun Olanlar</SecondaryTitle>
        <Paragraph style={{ marginTop: "2.4rem", marginBottom: "3.2rem" }}>
          Finans piyasalarında bilinçli yatırımcı olmak için ücretsiz akademiye
          başlayın, başarı sertifikanızı alın.
        </Paragraph>
        <TypoBtn title="Tümü" />
      </TopContentLeftContainer>
    </Section>
  );
};

const TitleAndButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 6;
  padding-top: 4rem;
  padding-left: 7.5rem;
  padding-right: 5.4rem;
  width: 45.6rem;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 3.2rem;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.titleColor};
`;

const ArrowButtons = styled.div`
  display: flex;
`;

export const TopContentRightContent = styled.img`
  height: 47.7rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
  position: relative;
  z-index: 6;
  background-color: ${({ theme }) => theme.commentBackground};
  padding: 3.2rem;
  margin-top: 4rem;
  margin-left: 7.1rem;
  width: calc(55.6rem + 7.1rem);

  min-height: 27rem;
`;

const CommentIconJSX = styled.img`
  position: absolute;
  top: 1.7rem;
  right: 3.7rem;
`;

const Header = styled.div`
  display: flex;
`;

const NameDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const CommentDate = styled.time`
  color: ${({ theme }) => theme.commentDateColor};
  font-size: 1.4rem;
  line-height: 1.6rem;
`;

const Body = styled.p`
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2.4rem;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.commentText};
  margin-top: 3rem;
`;

export default Comments;
