import React from "react";
import styled from "styled-components";

import {
  Section,
  TopContentLeftContainer,
  TopContentRightContainer,
  SecondaryTitle,
  Paragraph,
  User,
  Username,
} from "../../layout";

import SquareOfDots from "../../../svgs/SquareOfDots";
import Waves from "./../../../rawSvg/wavesInComment.svg";
import Position from "../../utility/Position";
import ArrowButton from "../../../svgs/ArrowButton";

const League = () => {
  return (
    <Section>
      <TopContentLeftContainer
        style={{ justifyContent: "center", marginRight: "1rem" }}
      >
        <SubTitle>Snapex Ligi</SubTitle>
        <SecondaryTitle>Bu Ayın Şampiyonları</SecondaryTitle>
        <Paragraph style={{ marginTop: "2.4rem", marginBottom: "3.2rem" }}>
          Analist liglerine siz de katılın ve sponsor ödüllerini kazanma fırsatı
          yakalayın! Analiz yaparken para kazanın.
        </Paragraph>
        <ArrowContainer>
          <Arrow>
            <ArrowButton stroke="white" leftArrow={true} />
          </Arrow>
          <Arrow active>
            <ArrowButton stroke="white" rightArrow={true} />
          </Arrow>
        </ArrowContainer>
      </TopContentLeftContainer>
      <TopContentRightContainer style={{ maxWidth: "71rem" }}>
        <TopContentRightContent src={Waves} alt=" " />
        <SquareOfDots />
        <PeoplesContainer>
          <People style={{ width: "46.3rem" }}>
            <User src="https://graph.facebook.com/2437264156287210/picture/?height=200" />
            <NameDateContainer>
              <Username>Abdullah</Username>
              <CommentDate>@username</CommentDate>
            </NameDateContainer>
            <div style={{ flex: 1 }} />
            <Position number={1} color="#0BCE91" />
          </People>
          <People style={{ width: "39.5rem" }}>
            <User src="https://graph.facebook.com/2437264156287210/picture/?height=200" />
            <NameDateContainer>
              <Username>Abdullah</Username>
              <CommentDate>@username</CommentDate>
            </NameDateContainer>
            <div style={{ flex: 1 }} />
            <Position number={2} color="#9835FF" />
          </People>
          <People style={{ width: "32.7rem" }}>
            <User src="https://graph.facebook.com/2437264156287210/picture/?height=200" />
            <NameDateContainer>
              <Username>Abdullah</Username>
              <CommentDate>@username</CommentDate>
            </NameDateContainer>
            <div style={{ flex: 1 }} />
            <Position number={3} color="#3870FF" />
          </People>
        </PeoplesContainer>
        <VerticalText>
          Sponsor <br />
          Ödüller Kazanma Fırsatı!
        </VerticalText>
      </TopContentRightContainer>
    </Section>
  );
};

const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 3.2rem;
  letter-spacing: -0.05em;
  font-weight: 500;
  color: ${({ theme }) => theme.stillNotRegisteredSubTitle};
`;

const ArrowContainer = styled.div`
  display: flex;
`;

const Arrow = styled.div`
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) =>
    active ? "#0BCE91" : "rgba(11, 206, 145, 0.1)"};
  margin-right: 1rem;
`;

export const TopContentRightContent = styled.img`
  height: 47.7rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  transform: rotateX(180deg) rotateY(180deg);
`;

const PeoplesContainer = styled.div`
  margin-top: 9rem;
  margin-left: 6rem;
  position: relative;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const People = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.snapexLeaguePeopleBackgroundColor};
  border: 1px solid ${({ theme }) => theme.snapexLeaguePeopleBorderColor};
  box-shadow: -3.2rem 3.2rem 9.6rem
    ${({ theme }) => theme.snapexLeaguePeopleBoxShadowColor};

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
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
  margin-top: 0.7rem;
`;

const VerticalText = styled.h3`
  color: ${({ theme }) => theme.snapexLeagueVerticalText};
  transform-origin: bottom;
  position: absolute;
  top: 50%;
  right: -2rem;
  z-index: 10;
  transform: rotate(90deg) translateX(-25%);
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 3.2rem;
  text-align: center;
  letter-spacing: -0.05em;
`;

export default League;
