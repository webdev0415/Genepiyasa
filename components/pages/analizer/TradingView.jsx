import React from "react";
import styled from "styled-components";
import GreenButtonSecondary from "../../utility/GreenButtonSecondary";
import H4Medium from "../../typography/H4Medium";

const TradingView = () => {
  return (
    <Container>
      <Header>
        {TradingViewIcon}{" "}
        <H4Medium style={{ margin: "0 1rem" }}>Tradingview</H4Medium>
        <GreenButtonSecondary
          style={{ padding: ".6rem 1.6rem", fontSize: "1.4rem" }}
          title="Canlı"
        />
      </Header>

      <TradingViewItems>
        <TradingViewItem>
          {Icon1} Parite : <span>Usoil</span>
        </TradingViewItem>
        <TradingViewItem>
          {Icon2} Analiz Yönü : <span>Şort</span>
        </TradingViewItem>
        <TradingViewItem>
          {Icon3} Sinyal Giriş Fiyatı : <span>22.78</span>
        </TradingViewItem>
        <TradingViewItem>
          {Icon3} Sinyal Hedef Fiyatı : <span>21.20 - 20.89</span>
        </TradingViewItem>
        <TradingViewItem>
          {Icon3} Sinyal Stop Fiyatı : <span>23.91 - 24.28</span>
        </TradingViewItem>
      </TradingViewItems>

      <TradingViewBottomItems>
        <ShareIconsContainer>
          <ShareIcon>{FacebookIcon}</ShareIcon>
          <ShareIcon>{TwitterIcon}</ShareIcon>
          <ShareIcon>{InstagramIcon}</ShareIcon>
          <ShareIcon>{LinkedInIcon}</ShareIcon>
          <ShareIcon>{WhatsAppIcon}</ShareIcon>
        </ShareIconsContainer>
        <LikeDislikeButtons>
          <ButtonWrapper>
            {LikeButton} <LikeCount>20</LikeCount>
          </ButtonWrapper>
          <ButtonWrapper>
            {DislikeButton} <LikeCount>30</LikeCount>
          </ButtonWrapper>
        </LikeDislikeButtons>
      </TradingViewBottomItems>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10rem;
`;

const Header = styled.div`
  display: flex;
`;

const TradingViewItems = styled.ul`
  list-style: none;
  margin-top: 3rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.pageTitleBorderColor};
  padding-bottom: 4rem;
`;

const TradingViewItem = styled.li`
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.shareIconsColor};
  letter-spacing: 0.01em;
  padding: 1.2rem 0;

  span {
    color: ${({ theme }) => theme.tagsTextColor};
  }
`;

const TradingViewBottomItems = styled.div`
  border-bottom: 0.1rem solid ${({ theme }) => theme.pageTitleBorderColor};
  padding: 4.8rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

const ShareIconPath = styled.path`
  stroke: ${({ theme }) => theme.shareIconsColor};
`;
const ShareIconCircle = styled.circle`
  fill: ${({ theme }) => theme.shareIconsBackground};
`;

const LikeDislikeButtons = styled.div`
  display: flex;
`;

const ButtonWrapper = styled.div`
  padding-right: 7rem;
  position: relative;
  margin-right: 2rem;
`;

const LikeCount = styled.p`
  position: absolute;
  padding: 0.8rem 1.4rem;
  background-color: ${({ theme }) => theme.tagsBackgroundColor};
  color: ${({ theme }) => theme.tagsTextColor};
  font-size: 1.2rem;
  line-height: 1.6rem;
  width: 5rem;
  text-align: center;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  &::after {
    content: "";
    position: absolute;
    right: 4.6rem;
    top: 50%;
    width: 0.8rem;
    height: 0.8rem;
    transform: translateY(-50%) rotate(45deg);
    background-color: ${({ theme }) => theme.tagsBackgroundColor};
  }
`;

const LikeButton = (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="63"
      height="63"
      rx="31.5"
      fill="#0BCE91"
      fillOpacity="0.1"
    />
    <path
      d="M26.944 39H25.056C24.473 39 24 38.527 24 37.944V30.556C24 29.973 24.473 29.5 25.056 29.5H26.944C27.527 29.5 28 29.973 28 30.556V37.944C28 38.527 27.527 39 26.944 39V39Z"
      stroke="#0BCE91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 30.5721L31.649 25.8211C32.328 24.9361 33.654 24.9141 34.363 25.7751C34.628 26.0961 34.772 26.5001 34.772 26.9161V30.1871H37.868C38.469 30.1871 39.03 30.4871 39.364 30.9861L39.693 31.4771C39.988 31.9181 40.074 32.4671 39.927 32.9761L38.568 37.6981C38.346 38.4691 37.641 39.0001 36.839 39.0001H30.55C30.05 39.0001 29.572 38.7921 29.232 38.4261L28 37.1001"
      stroke="#0BCE91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="0.5" y="0.5" width="63" height="63" rx="31.5" stroke="#0BCE91" />
  </svg>
);

const DislikeButton = (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="63"
      height="63"
      rx="31.5"
      fill="#DF585A"
      fillOpacity="0.1"
    />
    <path
      d="M26.944 25H25.056C24.473 25 24 25.473 24 26.056V33.444C24 34.027 24.473 34.5 25.056 34.5H26.944C27.527 34.5 28 34.027 28 33.444V26.056C28 25.473 27.527 25 26.944 25V25Z"
      stroke="#DF585A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 33.4279L31.649 38.1789C32.328 39.0639 33.654 39.0859 34.363 38.2249C34.628 37.9039 34.772 37.4999 34.772 37.0839V33.8129H37.868C38.469 33.8129 39.03 33.5129 39.364 33.0139L39.693 32.5229C39.988 32.0819 40.074 31.5329 39.927 31.0239L38.568 26.3019C38.346 25.5309 37.641 24.9999 36.839 24.9999H30.55C30.05 24.9999 29.572 25.2079 29.232 25.5739L28 26.8999"
      stroke="#DF585A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="0.5" y="0.5" width="63" height="63" rx="31.5" stroke="#DF585A" />
  </svg>
);

const Icon1 = (
  <svg
    style={{ marginRight: "1rem" }}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ShareIconPath
      d="M16.3639 3.63604C19.8787 7.15076 19.8787 12.8492 16.3639 16.3639C12.8492 19.8787 7.15074 19.8787 3.63604 16.3639C0.12132 12.8492 0.12132 7.15074 3.63604 3.63604C7.15076 0.12132 12.8492 0.12132 16.3639 3.63604"
      stroke="#686195"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M14.5 7.75L10.562 11.688L8.312 9.438L5.5 12.25"
      stroke="#686195"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M11.6875 7.75H14.4995V10.562"
      stroke="#686195"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Icon2 = (
  <svg
    style={{ marginRight: "1rem" }}
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ShareIconPath
      d="M13 1L16 4L13 7"
      stroke="#686195"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M16 4H7C3.686 4 1 6.462 1 9.5C1 12.538 3.686 15 7 15H15"
      stroke="#686195"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Icon3 = (
  <svg
    style={{ marginRight: "1rem" }}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ShareIconPath
      d="M19 10H15.419C14.635 10 14 10.635 14 11.419V12.581C14 13.365 14.635 14 15.419 14H19"
      stroke="#686195"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M17 19H3C1.895 19 1 18.105 1 17V7C1 5.895 1.895 5 3 5H17C18.105 5 19 5.895 19 7V17C19 18.105 18.105 19 17 19Z"
      stroke="#686195"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M12 5.00007L8.707 1.70707C8.316 1.31607 7.683 1.31607 7.293 1.70707L4 5.00007"
      stroke="#686195"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M10 3.00007L11.293 1.70707C11.684 1.31607 12.317 1.31607 12.707 1.70707L16 5.00007"
      stroke="#686195"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M18.0877 8.93994H17.0077C15.3317 8.93994 13.9717 10.2999 13.9717 11.9759V13.0559V21.0599"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M24.4284 5.57187C29.6354 10.7789 29.6354 19.2211 24.4284 24.428C19.2214 29.635 10.7792 29.635 5.57223 24.428C0.365245 19.221 0.365245 10.7788 5.57223 5.57187C10.7792 0.364879 19.2214 0.364879 24.4284 5.57187"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.71777 5.98499V10.636L13.3738 12.865"
      stroke="#4E4879"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 17.0667C1.03867 17.06 4.6 15.8667 4.6 15.8667C0.592 11.8147 0.288 5.81334 3.4 1.46667C4.876 4.21201 7.632 6.74534 10.6 7.46668C10.7147 4.00001 13.0653 1.46667 16.6 1.46667C19.0067 1.46667 20.4227 2.38401 21.4 3.86667H25L22.6 7.46668"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M16.8051 7.56928C16.8051 7.56928 13.3531 10.6839 11.5824 12.2826C11.0531 12.7599 11.0971 13.5999 11.6704 14.0226L18.8411 19.3199C19.5464 19.8413 20.5544 19.4586 20.7371 18.5999L24.2584 2.00394C24.4291 1.20128 23.6411 0.530611 22.8758 0.825278L2.18911 8.80394C1.57977 9.03861 1.60911 9.90928 2.23177 10.1039L7.66777 11.7999"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M14.8936 19.644V15.8253C14.8936 14.3186 16.1136 13.0986 17.6202 13.0986C19.1269 13.0986 20.3469 14.3186 20.3469 15.8253V19.644"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M10.5298 9.14404C10.3792 9.14404 10.2565 9.26671 10.2578 9.41738C10.2578 9.56804 10.3805 9.69071 10.5312 9.69071C10.6818 9.69071 10.8045 9.56804 10.8045 9.41738C10.8032 9.26538 10.6805 9.14404 10.5298 9.14404"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M24.428 5.57199C29.6347 10.7787 29.6347 19.2213 24.428 24.428C19.2213 29.6347 10.7787 29.6347 5.57199 24.428C0.365326 19.2213 0.365326 10.7787 5.57199 5.57199C10.7787 0.365326 19.2213 0.365326 24.428 5.57199Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M33.46 34.0801L34.0013 33.5428C34.4986 33.0495 35.2853 32.9868 35.8586 33.3895C36.4133 33.7788 36.9146 34.1281 37.3813 34.4535C38.1226 34.9681 38.212 36.0241 37.5733 36.6615L37.0946 37.1401"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M26.8604 26.9054L27.339 26.4267C27.9764 25.7894 29.0324 25.8787 29.547 26.6187C29.871 27.0854 30.2204 27.5867 30.611 28.1414C31.0137 28.7147 30.9524 29.5014 30.4577 29.9987L29.9204 30.5401"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M37.095 37.14C35.1203 39.1054 31.8016 37.436 29.1816 34.8147"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M29.1841 34.8187C26.5641 32.1974 24.8948 28.8801 26.8601 26.9054"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ShareIconPath
      d="M29.9199 30.54C30.3453 31.2107 30.8906 31.8747 31.5066 32.4907L31.5093 32.4934C32.1253 33.1094 32.7893 33.6547 33.4599 34.08"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TradingViewIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g style={{ mixBlendMode: "luminosity" }}>
      <rect width="32" height="32" fill="url(#pattern0)" />
    </g>
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0" transform="scale(0.00662252)" />
      </pattern>
      <image
        id="image0"
        width="151"
        height="151"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default TradingView;
