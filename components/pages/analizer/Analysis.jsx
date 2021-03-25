import React from "react";
import styled from "styled-components";
import H3Medium from "./../../typography/H3Medium";
import GreenButtonSecondary from "../../utility/GreenButtonSecondary";

import BlogItem from '../../utility/BlogItem';

const Analysis = ({data, username, addTradeScore}) => {

  return (
    <Container>
      <H3Medium>Buraya bir başlık gelmesi gerekiyor.</H3Medium>
      <NestedBulletContainer>
      <>
        {
          data && data.map((item, index) => (
            <>
            <BlogItem key={index} item={item} username={username} addTradeScore={addTradeScore} />
            
            </>
            ))
        }
        </>
        <AddContainer>
          <GreenButtonSecondary title="Analizi Güncelle" />
        </AddContainer>
      </NestedBulletContainer>
    </Container>
  );
};
const AuthorTitle = styled.span`
  padding-left: 2rem;
  color: ${({ theme }) => theme.nestedBulletTitleColor};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  letter-spacing: -0.02em;
  margin-right: 1rem;
`
const Container = styled.div`
  margin-top: 6.5rem;
`;

const NestedBulletContainer = styled.ul`
  list-style: none;
  margin-top: 3rem;
`;

const BulletHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1.6rem 0;
  position: relative;

  &::before {
    content: "";
    height: 1.6rem;
    width: 1.6rem;
    position: absolute;
    background-color: ${({ theme }) => theme.nestedBulletTitleColor};
    left: 0;
    border-radius: 0.8rem;
    transform: translateX(-50%);
    z-index: 2;
  }

  &::after {
    content: "";
    height: 100%;
    width: 0.2rem;

    position: absolute;
    left: -0.1rem;
    top: 50%;
    z-index: 1;

    background-color: ${({ theme }) => theme.nestedBulletTitleColor};
  }
`;

const BulletTitle = styled.li`
  padding-left: 2rem;
  color: ${({ theme }) => theme.nestedBulletTitleColor};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  letter-spacing: -0.02em;
  margin-right: 1rem;
`;

const Description = styled.p`
  max-width: 79rem;
  font-weight: 500;
  padding-left: 2rem;
  font-size: 2.2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.titleColor};
  position: relative;
  padding-bottom: 2rem;

  &::after {
    content: "";
    height: calc(100% - 0.2rem);
    width: 0.2rem;

    position: absolute;
    left: -0.1rem;
    top: 30%;
    z-index: 1;

    background-color: ${({ theme }) => theme.nestedBulletTitleColor};
  }

  &:last-child::after {
    /* height: calc(100% - 0.2rem); */
  }
`;

const AddContainer = styled.li`
  padding-left: 2rem;
  position: relative;

  &::after {
    content: "";
    height: 1.4rem;
    width: 1.4rem;
    position: absolute;
    border: 0.2rem solid ${({ theme }) => theme.nestedBulletTitleColor};
    top: 50%;
    left: 0;
    border-radius: 0.8rem;
    transform: translateX(-50%) translateY(-50%);
    z-index: 2;
  }
`;

export default Analysis;
