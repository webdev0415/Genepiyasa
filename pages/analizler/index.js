import React from "react";
import Breadcrum from "../../components/utility/Breadcrum";
import { ContentContainer, Wrapper, User } from "../../components/layout";
import PageTitle from "./../../components/typography/PageTitle";
import styled from "styled-components";
import H2Medium from "../../components/typography/H2Medium";
import Tags from "../../components/utility/Tags";
import Analysis from "../../components/pages/analizer/Analysis";
import TradingView from "../../components/pages/analizer/TradingView";
import Comments from "../../components/pages/analizer/Comments";
import {getInitCategory, getInitTradeIdea, addTradeScore} from "../../store/action/actions"
import {connect} from 'react-redux'
import Link from "next/link"

const Analizer = ({getInitCategory, getInitTradeIdea, addTradeScore, tradeideas, user}) => {
  const [visibleTradeEditor, setVisibleTradeEditor] = React.useState(false)
  const handleTradeIdeaClick = () => {
  	setVisibleTradeEditor(!visibleTradeEditor)
  }
  React.useEffect(()=>{
    getInitTradeIdea()
    getInitCategory()
  },[])
  return (
    <React.Fragment>
      <Breadcrum
        items={[
          { url: "/analizler", text: "Analizler" },
          
        ]}
      />
      <ContentContainer>
        <Wrapper style={{ flexDirection: "column", alignItems: "stretch" }}>
          <PageTitle>Analizler</PageTitle>
          <Content>
            <Header>
              <H2Medium>26 Mart 2020 Usoil Analizi</H2Medium>
              <SubHeaders>
                <SubHeader>{TimeIcon}26 Mart 2020</SubHeader>
                <SubHeader>{FlagIcon}Kategori : Emtia</SubHeader>
              </SubHeaders>
            </Header>
            <People>
              <User src="https://graph.facebook.com/2437264156287210/picture/?height=200" />
              <NameUsernameContainer>
                <Name>Necati Ateş</Name>
                <Username>@username</Username>
              </NameUsernameContainer>
              <OtherInfo>
                <UserInfo>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt Dolor sit amet, consectetur
                  adipiscing elit, sed
                </UserInfo>
                <ShareIconsContainer>
                  <ShareIcon>{FacebookIcon}</ShareIcon>
                  <ShareIcon>{TwitterIcon}</ShareIcon>
                  <ShareIcon>{InstagramIcon}</ShareIcon>
                  <ShareIcon>{LinkedInIcon}</ShareIcon>
                  <ShareIcon>{WhatsAppIcon}</ShareIcon>
                </ShareIconsContainer>
              </OtherInfo>
            </People>
            <AnalysisStatusButton>
              Analiz Durumu : <PurpleText>Aktif</PurpleText>
            </AnalysisStatusButton>
            <Tags />
            {
              user.username && (
                <Link href="/analizler/new_tradeidea">
                  <AnalysisStatusButton>
                    Yeni yaz
                  </AnalysisStatusButton>
                </Link>
                )
            }
            
            <Analysis data={tradeideas} username={user.username} addTradeScore={addTradeScore} />
            <TradingView />
            <Tags />
            <Comments />
          </Content>
        </Wrapper>
      </ContentContainer>
    </React.Fragment>
  );
};

const Content = styled.div`
  width: 100%;
  align-self: stretch;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-top: 4.8rem;
`;

const SubHeaders = styled.div`
  display: flex;
`;

const SubHeader = styled.p`
  color: ${({ theme }) => theme.examSubHeader};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.6rem;
  display: flex;
  align-items: center;
  margin-right: 2rem;
  margin-top: 1.3rem;
  margin-bottom: 3.5rem;
`;

const People = styled.div`
  align-self: flex-start;
  padding: 3rem;
  background: ${({ theme }) => theme.analizerUserInfoBackgroundColor};
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

const NameUsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const Name = styled.time`
  color: ${({ theme }) => theme.titleColor};
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.4rem;
`;

const Username = styled.time`
  color: ${({ theme }) => theme.usernameColor};
  font-size: 1.4rem;
  line-height: 1.6rem;
  margin-top: 0.5rem;
`;

const OtherInfo = styled.div`
  margin-left: 3rem;
`;

const UserInfo = styled.p`
  color: ${({ theme }) => theme.analizerUserInfoColor};
  max-width: 55rem;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.6rem;
`;

const ShareIconsContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const ShareIcon = styled.div`
  background-color: ${({ theme }) => theme.shareIconsBackground};
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
`;

const AnalysisStatusButton = styled.button`
  padding: 1.5rem;
  border: 0.1rem solid rgb(152, 53, 255);
  background-color: rgba(152, 53, 255, 0.1);
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.purpleButtonSecondaryText};
  
`;

const PurpleText = styled.span`
  color: ${({ theme }) => theme.purpleButtonSeconaryBorder};
  color: rgb(152, 53, 255);
`;

const TimeIcon = (
  <svg
    style={{ marginRight: "1rem" }}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.55691 1.68702C11.1479 -0.214978 16.4109 1.96602 18.3129 6.55702C20.2149 11.148 18.0339 16.411 13.4429 18.313C8.85191 20.215 3.58891 18.034 1.68691 13.443C-0.214091 8.85202 1.96591 3.58902 6.55691 1.68702"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.71875 5.98505V10.636L13.3747 12.865"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FlagIcon = (
  <svg
    style={{ marginRight: "1rem" }}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.63606 3.65002C0.12134 7.16474 0.12134 12.8632 3.63606 16.3779C7.15078 19.8926 12.8493 19.8926 16.364 16.3779C19.8787 12.8632 19.8787 7.16472 16.364 3.65002C12.8492 0.135297 7.15076 0.135297 3.63606 3.65002"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 15.514L6 6.51398H14L12.38 9.01398L14 11.514H8.239"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShareIconPath = styled.path`
  stroke: ${({ theme }) => theme.shareIconsColor};
`;
const ShareIconCircle = styled.circle`
  fill: ${({ theme }) => theme.shareIconsBackground};
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

const TwitterIcon = (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
   width="30px" height="30px" viewBox="0 0 1200 1200" enableBackground="new 0 0 1200 1200">
<path fill="#686195" d="M418.233,1012.18c5.525,0,8.961-0.104,9.898-0.135c140.913-5.376,304.387-34.741,448.422-211.805
  c144.297-177.318,135.702-366.376,133.105-397.943c23.405-17.76,93.279-79.366,98.856-108.282l2.927-15.156l-13.842,6.83
  c-20.487,10.093-52.856,18.823-77.003,24.498c24.986-21.922,59.218-58.612,62.677-97.382l1.372-15.394l-13.089,8.222
  c-47.516,29.874-107.452,43.456-123.459,46.705c-17.904-18.852-111.039-106.021-246.009-40.461
  c-104.155,50.6-116.444,143.377-114.066,196.03c-0.103,5.546,3.107,11.97,6.368,14.411c2.07,1.55,6.946,2.156,9.762-2.69
  c-4.511-44.844-0.827-142.718,104.637-193.945c138.826-67.492,226.96,35.491,230.645,39.892l2.837,3.415l4.367-0.764
  c2.783-0.48,63.433-11.229,117.882-40.746c-15.978,47.32-78.111,90.268-78.807,90.747L955.778,338.7l35.655-6.603
  c2.582-0.466,54.434-10.17,93.24-24.38c-19.864,27.554-67.318,70.561-87.468,84.697l-3.788,2.651l0.584,4.597
  c0.255,2.006,23.825,202.684-129.339,390.906c-140.18,172.315-299.633,200.902-437.101,206.142
  c-1.814,0.135-170.445,5.091-288.7-76.566c25.86,1.109,67.91,0.943,112.797-7.368c71.286-13.194,160.725-75.1,164.707-78.962
  l3.536-3.579l-1.836-4.656c-1.878-4.792-6.161-4.958-9.944-5.108c-45.785-1.797-127.406-20.516-172.353-123.259
  c37.632,4.672,75.954-6.29,77.765-6.828l33.176-9.719l-34.172-5.211c-1.467-0.225-142.935-23.676-154.726-182.665
  c35.122,16.113,80.459,20.89,82.592,21.1l32.826,3.34l-27.996-17.477c-5.758-3.594-137.131-88.022-62.176-250.499
  c51.244,65.743,185.919,169.577,344.278,196.765c12.205,2.144,13.854-11.797,4.424-14.919
  c-163.164-27.185-300.699-138.147-343.723-200.954l-7.299-10.662L174.882,231c-69.799,137.006-0.682,226.51,38.839,263.066
  c-18.607-3.804-42.703-10.349-60.319-20.847l-11.975-7.127l0.382,13.927c3.671,132.707,89.223,183.472,136.947,201.517
  c-15.889,1.917-35.686,2.591-53.543-1.826l-14.241-3.535l5.233,13.717c42.229,110.5,124.711,137.979,172.606,144.299
  c-28.69,18.599-88.313,53.954-139.939,63.524c-69.432,12.818-133.793,5.332-134.422,5.286l-25.892-3.101l20.088,16.622
  C216.924,1006.071,376.721,1012.18,418.233,1012.18z" strokeWidth="1.5"/>
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
    width="32"
    height="32"
    viewBox="16 16 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
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
const mapStateToProps = state => ({
  tradeideas: state.blogs.tradeideas,
  user: state.auth.user
})
const mapDispatchToProps = dispatch => ({
  getInitCategory: () => dispatch(getInitCategory()),
  getInitTradeIdea: () => dispatch(getInitTradeIdea()),
  addTradeScore: (a,b) => dispatch(addTradeScore(a,b))
})
export default connect(mapStateToProps, mapDispatchToProps)(Analizer)
// export default Analizer;
