import React from "react";

import PurpleButton from "./../../utility/PurpleButton";
import DownArrow from "./../../../svgs/DownArrow";
import FlexContainer from "./../../utility/FlexContainer";
import TypoBtn from "../../utility/TypoBtn";

import HomeChartRaw from "./../../../rawSvg/homecharts.svg";

import {
  TopContent,
  TopContentLeftContainer,
  TopTitle,
  Paragraph,
  TopContentRightContainer,
  TopContentRightContent,
} from "./../../layout";

const FirstSection = ({ handleNext }) => {
  return (
    <TopContent>
      <TopContentLeftContainer>
        <TopTitle>Borsada Kazanmayı Öğrenin!</TopTitle>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Paragraph>

        <TypoBtn title="Hemen Başla!" />
        <FlexContainer onClick={handleNext} style={{ flexDirection: "column" }}>
          <DownArrow />
          <Paragraph style={{ marginTop: ".8rem" }}>AŞAĞI</Paragraph>
        </FlexContainer>
      </TopContentLeftContainer>
      {/*<TopContentRightContainer>*/}
      {/*  <TopContentRightContent src={HomeChartRaw} alt=" " />*/}
      {/*</TopContentRightContainer>*/}
    </TopContent>
  );
};

export default FirstSection;
