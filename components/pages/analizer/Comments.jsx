import React from "react";
import styled from "styled-components";

import H4Medium from "./../../typography/H4Medium";
import { User } from "./../../layout";
import GreenButtonSecondary from "./../../utility/GreenButtonSecondary";
import GreenButton from "./../../utility/GreenButton";

const Comments = () => {
  return (
    <Container>
      <Header>
        {CommentIcon} <H4Medium style={{ flex: 1 }}>Yorumlar</H4Medium>
        <CommentsCount>Toplamda 3 adet yorum bulunuyor.</CommentsCount>
      </Header>
      <CommentWrapper>
        <CommentComponent />
        <CommentComponent reply containerStyle={{ marginLeft: "5rem" }} />
        <CommentComponent reply containerStyle={{ marginLeft: "10rem" }} />
      </CommentWrapper>
      <Reply>
        <Header>
          {CommentIcon} <H4Medium style={{ flex: 1 }}>Yorum Yaz</H4Medium>
          <CommentsCount>{UserIcon}@justwatch</CommentsCount>
        </Header>
        <Comment>
          <CommentHeader>
            <NameUsernameContainer>
              <Name style={{ paddingBottom: "1.5rem" }}>Dosya Yükle</Name>
              <Username>
                İzin verilen dosya uzantıları : &nbsp;<span> Jpg , Png </span>
              </Username>
            </NameUsernameContainer>
            <ButtonsContainer>
              <Button>Beğen {DownArrow}</Button>
            </ButtonsContainer>
          </CommentHeader>
          <CommentBody>
            <Message placeholder="Mesajınızı giriniz"></Message>
            <GreenButton
              style={{ alignSelf: "flex-end", display: "inline-block" }}
              title={<>Yorum Yaz{NextArrow}</>}
            />
          </CommentBody>
        </Comment>
      </Reply>
    </Container>
  );
};

const CommentComponent = ({
  image,
  name,
  date,
  commentText,
  reply,
  containerStyle = {},
}) => {
  return (
    <Comment style={containerStyle}>
      {reply && <ReplyPointer />}
      <CommentHeader>
        <User src="https://graph.facebook.com/2437264156287210/picture/?height=200" />
        <NameUsernameContainer>
          <Name>Necati Ateş</Name>
          <Username> {TimeIcon} 26 Mart 2020</Username>
        </NameUsernameContainer>
        <ButtonsContainer>
          <Button>{LikeIcon} Beğen</Button>
          <GreenButtonSecondary title={<>{ReplyIcon}Yanıtla</>} />
        </ButtonsContainer>
      </CommentHeader>
      <CommentBody>
        <CommentText>
          Formasyon gereği yukarı kırılım daha olasıdır ancak aşağı kırılım
          gözlendiğinden dolayı aşağı yönlü hedef belirlenmiştir.
        </CommentText>
      </CommentBody>
    </Comment>
  );
};

const ReplyPointer = styled.div`
  background-color: ${({ theme }) => theme.analizerUserInfoBackgroundColor};
  width: 1rem;
  height: 1rem;
  position: absolute;
  z-index: 2;
  left: 3rem;
  top: -0.5rem;
  transform: rotate(45deg);
`;

const Container = styled.div``;

const Header = styled.div`
  border-bottom: 0.2rem solid #0bce91;
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.analizerUserInfoBackgroundColor};
  margin-bottom: 1.2rem;
`;

const CommentWrapper = styled.div``;

const Comment = styled.div`
  position: relative;
  margin-top: 1.2rem;
  background-color: ${({ theme }) => theme.analizerUserInfoBackgroundColor};
  padding: 3.2rem;
  margin-bottom: 3.5rem;
`;

const CommentsCount = styled.p`
  color: ${({ theme }) => theme.shareIconsColor};
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.6rem;
  display: flex;
  align-items: center;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3.2rem;
  margin-bottom: 3.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.pageTitleBorderColor};
`;

const NameUsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-right: auto;
`;

const Name = styled.p`
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
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-top: 0.8rem;

  span {
    color: ${({ theme }) => theme.titleColor};
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  button {
    margin-left: 1.2rem;
  }
`;

const Button = styled.button`
  text-align: center;
  padding: 1.8rem 2rem;
  font-size: 1.6rem;
  letter-spacing: -0.04em;
  border: 0.1rem solid ${({ theme }) => theme.generalBorderBackgroundColor};
  box-shadow: none;
  color: ${({ theme }) => theme.titleColor};
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const CommentText = styled.p`
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.6rem;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.titleColor};
  max-width: 67rem;
`;

const Reply = styled.div``;

const Message = styled.textarea`
  margin-bottom: 2rem;
  padding: 2.7rem;
  width: 100%;
  min-height: 25rem;
  color: ${({ theme }) => theme.titleColor};
  background-color: ${({ theme }) => theme.rootBackground};
  font-size: 1.8rem;
  line-height: 2.6rem;
  letter-spacing: 0.01em;
  font-family: inherit;
  border: none;

  &::placeholder {
    color: #686195;
    font-family: inherit;
  }
`;

const NextArrow = (
  <svg
    style={{ marginLeft: "1rem" }}
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
  >
    <path d="M0 8L15 8" stroke="#F3F3F5" strokeWidth="1.5" />
    <path d="M8 1L15 8L8 15" stroke="#F3F3F5" strokeWidth="1.5" />
  </svg>
);

const DownArrow = (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    style={{ marginLeft: "1rem" }}
  >
    <path d="M8 0.5L8 15.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15 8.5L8 15.5L1 8.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const UserIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    style={{ marginRight: "1rem" }}
  >
    <path
      d="M16.3639 3.63604C19.8787 7.15076 19.8787 12.8492 16.3639 16.3639C12.8492 19.8787 7.15074 19.8787 3.63604 16.3639C0.12132 12.8492 0.12132 7.15074 3.63604 3.63604C7.15076 0.12132 12.8492 0.12132 16.3639 3.63604"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.3074 17.257C14.9234 15.417 12.7054 14 10.0004 14C7.29536 14 5.07736 15.417 4.69336 17.257"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.1213 5.87868C13.2929 7.05025 13.2929 8.94975 12.1213 10.1213C10.9497 11.2929 9.05025 11.2929 7.87868 10.1213C6.70711 8.94975 6.70711 7.05025 7.87868 5.87868C9.05025 4.70711 10.9497 4.70711 12.1213 5.87868Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ReplyIcon = (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    style={{ marginRight: "1rem" }}
  >
    <path
      d="M9.99917 15L11.8812 15C14.6962 15 16.9992 12.75 16.9992 10C16.9992 7.25 14.6962 5 11.8812 5L0.951171 5"
      stroke="#0BCE91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.95117 9L0.951172 5L4.95117 1"
      stroke="#0BCE91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LikeIcon = (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    style={{ marginRight: "1rem" }}
  >
    <path
      d="M3.944 15H2.056C1.473 15 1 14.527 1 13.944V6.556C1 5.973 1.473 5.5 2.056 5.5H3.944C4.527 5.5 5 5.973 5 6.556V13.944C5 14.527 4.527 15 3.944 15V15Z"
      stroke="#0BCE91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 6.57206L8.649 1.82106C9.328 0.936065 10.654 0.914065 11.363 1.77506C11.628 2.09606 11.772 2.50006 11.772 2.91606V6.18706H14.868C15.469 6.18706 16.03 6.48706 16.364 6.98606L16.693 7.47706C16.988 7.91806 17.074 8.46706 16.927 8.97606L15.568 13.6981C15.346 14.4691 14.641 15.0001 13.839 15.0001H7.55C7.05 15.0001 6.572 14.7921 6.232 14.4261L5 13.1001"
      stroke="#0BCE91"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TimeIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    style={{ marginRight: "1rem" }}
  >
    <path
      d="M6.55691 1.68708C11.1479 -0.214916 16.4109 1.96608 18.3129 6.55708C20.2149 11.1481 18.0339 16.4111 13.4429 18.3131C8.85191 20.2151 3.58891 18.0341 1.68691 13.4431C-0.214091 8.85208 1.96591 3.58908 6.55691 1.68708"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.71875 5.98511V10.6361L13.3747 12.8651"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CommentIcon = (
  <svg
    style={{ marginRight: "2rem" }}
    width="38"
    height="34"
    viewBox="0 0 38 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 17H37"
      stroke="#0BCE91"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 9H37"
      stroke="#0BCE91"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 1H37"
      stroke="#0BCE91"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 25L9 25.022V33L19 25L37 25.046"
      stroke="#0BCE91"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Comments;
