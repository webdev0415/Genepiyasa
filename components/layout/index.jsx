import styled from "styled-components";

export const ContentContainer = styled.div`
  margin-top: 4rem;
`;

export const TopContent = styled.div`
  max-width: 111.7rem;
  margin: 0 auto;

  min-height: calc(100vh - 15rem);
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding-bottom: 5rem;
`;

export const TopContentLeftContainer = styled.div`
  width: 34.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TopContentRightContainer = styled.div`
  position: relative;
  width: 100%;
  z-index: 4;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;

export const TopContentRightContent = styled.img`
  width: 70rem;
`;

export const TopTitle = styled.h1`
  font-weight: 500;
  font-size: 6.4rem;
  line-height: 8rem;
  color: ${({ theme }) => theme.titleColor};
`;

export const SecondaryTitle = styled.h1`
  font-weight: 500;
  font-size: 4.8rem;
  line-height: 6rem;
  color: ${({ theme }) => theme.titleColor};
`;

export const Paragraph = styled.p`
  font-size: 1.8rem;
  line-height: 2.7rem;
  color: ${({ theme }) => theme.paragraphText};
`;

export const Section = styled.section`
  max-width: 111.7rem;
  margin: 0 auto;
  margin-top: 13.8rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  position: relative;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  z-index: 10;
`;

export const SectionFull = styled.section`
  margin-top: 13.8rem;
  position: relative;
  background-color: ${({ theme }) => theme.homeLighterColor};
  padding: 13rem 0;
  z-index: 1;
`;

export const User = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  overflow: hidden;
  border-radius: 3rem;
`;

export const Username = styled.p`
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.titleColor};
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 111.6rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;
