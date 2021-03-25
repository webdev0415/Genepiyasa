import React from "react";
import Breadcrum from "../../../components/utility/Breadcrum";
import { ContentContainer } from "../../../components/layout";

import H2Medium from "./../../../components/typography/H2Medium";

import styled from "styled-components";

import GreenResultSVG from "./../../../rawSvg/GreenResult.svg";
import GrayButton from "../../../components/utility/GrayButton";
import GreenButton from "../../../components/utility/GreenButton";
import Router, {useRouter} from 'next/router'

const Result = () => {
  const router = useRouter();
  const {answers} = router.query
  let total_length, true_length, false_length, true_percent, false_percent
  if (answers) {
    total_length = answers.split(",").length
    true_length = answers.split(",").filter(item=>item==="true").length
    false_length = answers.split(",").filter(item=>item==="false").length
    true_percent = true_length/total_length
    false_percent = false_length/total_length
  }
  return (
    <React.Fragment>
      <Breadcrum
        items={[
          { url: "/akademi", text: "Akademi" },
          { url: "/akademi/sinavlar", text: "Sınavlar" },
          {
            url: "/akademi/sinavlar/destec",
            text: "Destek ve Direnç Seviyeleri",
          },
        ]}
      />
      <ContentContainer>
        <Wrapper>
          <H2Medium>Sonuçlarınız</H2Medium>
          <Image src={GreenResultSVG} alt="" />
          <ScoresContainer>
            <Score>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 19C5.029 19 1 14.971 1 10C1 5.029 5.029 1 10 1C14.971 1 19 5.029 19 10C19 14.971 14.971 19 10 19Z"
                  stroke="#0BCE91"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 8L9 13L6 10"
                  stroke="#0BCE91"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span style={{ color: "#0BCE91" }}>{true_length}</span>
            </Score>
            <Score>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12.8299 7.16998L7.16992 12.83"
                  stroke="#DF585A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.8299 12.83L7.16992 7.16998"
                  stroke="#DF585A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 19C5.029 19 1 14.971 1 10C1 5.029 5.029 1 10 1C14.971 1 19 5.029 19 10C19 14.971 14.971 19 10 19Z"
                  stroke="#DF585A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span style={{ color: "#DF585A" }}>{false_length}</span>
            </Score>
          </ScoresContainer>
          <ResultInfo>
            Toplam {total_length} sorudan sadece {true_length} tanesine doğru cevap verebildin.{" "}
          </ResultInfo>
          <TimeTaken>
            {TimeIcon} Kalan Süre : <span>00:00:45</span>
          </TimeTaken>
          <Stats>
            <Stat>
              <StatTitle>Ortalama Puan</StatTitle>
              <StatProgress color="#0BCE91" progress={true_percent} />
              <StatInfo>{true_percent*100} %</StatInfo>
            </Stat>
            <Stat>
              <StatTitle>Sizin Puanınız</StatTitle>
              <StatProgress color="#F7A05B" progress={false_percent} />
              <StatInfo>{false_percent*100} %</StatInfo>
            </Stat>
          </Stats>
          <ShareContainer>
            <ShareTitle>Sonuçlarını paylaş!</ShareTitle>
            <ShareIconsContainer>
              <ShareIcon>{FacebookIcon}</ShareIcon>
              <ShareIcon>{TwitterIcon}</ShareIcon>
              <ShareIcon>{InstagramIcon}</ShareIcon>
              <ShareIcon>{LinkedInIcon}</ShareIcon>
              <ShareIcon>{WhatsAppIcon}</ShareIcon>
            </ShareIconsContainer>
          </ShareContainer>
          <ButtonsContainer>
            <GrayButton title={<>{LeftArrowIcon}Anasayfa’ya Dön</>} />
            <GreenButton title={<>Diğer Sınavları Gör{RightArrowIcon}</>} />
          </ButtonsContainer>
        </Wrapper>
      </ContentContainer>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 111.6rem;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  margin-top: 4rem;
  margin-bottom: 6rem;
`;

const ScoresContainer = styled.div`
  display: flex;
`;

const Score = styled.span`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  display: flex;
  align-items: center;
  margin: 0 1rem;

  span {
    margin-left: 1rem;
  }
`;

const ResultInfo = styled.p`
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.4rem;
  text-align: center;
  letter-spacing: -0.05em;
  margin-top: 1rem;
  color: ${({ theme }) => theme.resultInfoColor};
`;

const TimeTaken = styled.p`
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.generalBackgroundColor};
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.examAlertTextColor};
  font-weight: 500;
  font-size: 1.4rem;
  width: auto;
  line-height: 1.6rem;
  margin: 4.8rem 0 5.8rem 0;

  span {
    color: ${({ theme }) => theme.titleColor};
  }
`;

const Stats = styled.div`
  margin-bottom: 9rem;
`;

const Stat = styled.div`
  padding: 3.2rem 5.3rem;
  background-color: ${({ theme }) => theme.resultStatsBackgroundColor};
  border: 0.1rem solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  margin: 1.2rem 0;
`;

const StatTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 3.2rem;
  text-align: center;
  letter-spacing: -0.05em;
  width: 18rem;
  color: ${({ theme }) => theme.titleColor};
  margin-right: 6.3rem;
`;

const StatProgress = styled.div`
  width: calc(${({ progress }) => progress} * 65rem);
  height: 1.2rem;
  background-color: ${({ color }) => color};
`;

const StatInfo = styled.p`
  color: ${({ theme }) => theme.statInfoColor};
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.4rem;
  letter-spacing: -0.05em;
  margin-left: 2.4rem;
`;

const ShareContainer = styled.div``;

const ShareTitle = styled.p`
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.4rem;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.titleColor};
  text-align: center;
`;

const ShareIconsContainer = styled.div`
  display: flex;
`;

const ShareIcon = styled.div`
  background-color: ${({ theme }) => theme.shareIconsBackground};
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1.6rem;
  margin-top: 3rem;
`;

const ShareIconPath = styled.path`
  stroke: ${({ theme }) => theme.shareIconsColor};
`;
const ShareIconCircle = styled.circle`
  fill: ${({ theme }) => theme.shareIconsBackground};
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 9rem;

  button {
    margin: 0 1rem;
  }
`;

const FacebookIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ShareIconPath
      d="M11.9121 14.0853H18.0868"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ShareIconPath
      d="M18.0877 8.93994H17.0077C15.3317 8.93994 13.9717 10.2999 13.9717 11.9759V13.0559V21.0599"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ShareIconPath
      d="M24.4284 5.57187C29.6354 10.7789 29.6354 19.2211 24.4284 24.428C19.2214 29.635 10.7792 29.635 5.57223 24.428C0.365245 19.221 0.365245 10.7788 5.57223 5.57187C10.7792 0.364879 19.2214 0.364879 24.4284 5.57187"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const TimeIcon = (
  <svg
    style={{ marginRight: "1rem" }}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M6.55691 1.68696C11.1479 -0.215038 16.4109 1.96596 18.3129 6.55696C20.2149 11.148 18.0339 16.411 13.4429 18.313C8.85191 20.215 3.58891 18.034 1.68691 13.443C-0.214091 8.85196 1.96591 3.58896 6.55691 1.68696"
      stroke="#4E4879"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.71777 5.98499V10.636L13.3738 12.865"
      stroke="#4E4879"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const TwitterIcon = (
  <svg
    width="26"
    height="23"
    viewBox="0 0 26 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ShareIconPath
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 17.0667C1.03867 17.06 4.6 15.8667 4.6 15.8667C0.592 11.8147 0.288 5.81334 3.4 1.46667C4.876 4.21201 7.632 6.74534 10.6 7.46668C10.7147 4.00001 13.0653 1.46667 16.6 1.46667C19.0067 1.46667 20.4227 2.38401 21.4 3.86667H25L22.6 7.46668"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const InstagramIcon = (
  <svg
    width="26"
    height="21"
    viewBox="0 0 26 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ShareIconPath
      d="M13.7263 15.5413L10.9729 18.2199C10.4956 18.6839 9.69695 18.4786 9.50361 17.8413L7.66895 11.8013"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ShareIconPath
      d="M16.8051 7.56928C16.8051 7.56928 13.3531 10.6839 11.5824 12.2826C11.0531 12.7599 11.0971 13.5999 11.6704 14.0226L18.8411 19.3199C19.5464 19.8413 20.5544 19.4586 20.7371 18.5999L24.2584 2.00394C24.4291 1.20128 23.6411 0.530611 22.8758 0.825278L2.18911 8.80394C1.57977 9.03861 1.60911 9.90928 2.23177 10.1039L7.66777 11.7999"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const LinkedInIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ShareIconPath
      d="M10.5322 13.0986V19.644"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ShareIconPath
      d="M14.8936 19.644V15.8253C14.8936 14.3186 16.1136 13.0986 17.6202 13.0986C19.1269 13.0986 20.3469 14.3186 20.3469 15.8253V19.644"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ShareIconPath
      d="M10.5298 9.14404C10.3792 9.14404 10.2565 9.26671 10.2578 9.41738C10.2578 9.56804 10.3805 9.69071 10.5312 9.69071C10.6818 9.69071 10.8045 9.56804 10.8045 9.41738C10.8032 9.26538 10.6805 9.14404 10.5298 9.14404"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ShareIconPath
      d="M24.428 5.57199C29.6347 10.7787 29.6347 19.2213 24.428 24.428C19.2213 29.6347 10.7787 29.6347 5.57199 24.428C0.365326 19.2213 0.365326 10.7787 5.57199 5.57199C10.7787 0.365326 19.2213 0.365326 24.428 5.57199Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const WhatsAppIcon = (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ShareIconCircle cx="32" cy="32" r="32" />
    <ShareIconPath
      d="M40.2719 23.6827C38.0772 21.4867 35.1585 20.276 32.0492 20.2747C25.6399 20.2747 20.4252 25.4867 20.4239 31.8933C20.4212 33.932 20.9559 35.936 21.9745 37.7027L20.3252 43.724L26.4879 42.108C28.1932 43.036 30.1025 43.5227 32.0439 43.5227H32.0492C38.4559 43.5227 43.6705 38.3093 43.6732 31.9027C43.6745 28.7987 42.4665 25.88 40.2719 23.6827Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ShareIconPath
      d="M33.46 34.0801L34.0013 33.5428C34.4986 33.0495 35.2853 32.9868 35.8586 33.3895C36.4133 33.7788 36.9146 34.1281 37.3813 34.4535C38.1226 34.9681 38.212 36.0241 37.5733 36.6615L37.0946 37.1401"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ShareIconPath
      d="M26.8604 26.9054L27.339 26.4267C27.9764 25.7894 29.0324 25.8787 29.547 26.6187C29.871 27.0854 30.2204 27.5867 30.611 28.1414C31.0137 28.7147 30.9524 29.5014 30.4577 29.9987L29.9204 30.5401"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ShareIconPath
      d="M37.095 37.14C35.1203 39.1054 31.8016 37.436 29.1816 34.8147"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ShareIconPath
      d="M29.1841 34.8187C26.5641 32.1974 24.8948 28.8801 26.8601 26.9054"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ShareIconPath
      d="M29.9199 30.54C30.3453 31.2107 30.8906 31.8747 31.5066 32.4907L31.5093 32.4934C32.1253 33.1094 32.7893 33.6547 33.4599 34.08"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const LeftArrowIcon = (
  <svg
    style={{ marginRight: "1rem" }}
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 8L2 8" stroke="currentColor" stroke-width="1.5" />
    <path d="M9 1L2 8L9 15" stroke="currentColor" stroke-width="1.5" />
  </svg>
);

const RightArrowIcon = (
  <svg
    style={{ marginLeft: "1rem" }}
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 8L15 8" stroke="#F3F3F5" stroke-width="1.5" />
    <path d="M8 1L15 8L8 15" stroke="#F3F3F5" stroke-width="1.5" />
  </svg>
);

export default Result;
