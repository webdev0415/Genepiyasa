import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link"
import {useRouter} from "next/router"


const NestedBullets = ({data, lesson}) => {
  
  return (
    <Container>
      {
       data && Object.keys(data).map((item, index)=><NestedBullet lesson={lesson} title={item} data={data[item]} />)
      }
      
    </Container>
  );
};

const NestedBullet = ({lesson, title, data, last }) => {
  const router = useRouter();
  const path = router.asPath;
  const [showDropDowns, setShowDropDowns] = useState(true);
  return (
    <NestedBulletContainer>
    <Link href={`${path}/${lesson}/${title}`}>
      <BulletHeader last={last}>
        <BulletTitle>{title}</BulletTitle>

        {showDropDowns ? (
          <IconWrapper onClick={() => setShowDropDowns(false)}>
            {UpArrow}
          </IconWrapper>
        ) : (
          <IconWrapper onClick={() => setShowDropDowns(true)}>
            {DownArrow}
          </IconWrapper>
        )}
      </BulletHeader>
    </Link>
      {showDropDowns && (
        <SubBulletsContainer last={last}>
          {
            data && Object.keys(data.subtopics).map((item, index)=><SubBullet key={index}>{item}</SubBullet>)
          }
        </SubBulletsContainer>
      )}
    </NestedBulletContainer>
  );
};

const Container = styled.div``;

const NestedBulletContainer = styled.ul`
  list-style: none;
`;

const BulletHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1.6rem 0;
  position: relative;
  cursor: pointer;
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
    height: ${({ last }) => (last ? "0px" : "100%")};
    width: 0.2rem;

    position: absolute;
    left: -0.1rem;
    top: 50%;
    z-index: 1;

    background-color: ${({ theme }) => theme.bulletLineColor};
  }
`;

const BulletTitle = styled.li`
  padding-left: 3.2rem;
  color: ${({ theme }) => theme.nestedBulletTitleColor};
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  margin-right: 1rem;
`;

const IconWrapper = styled.div``;

const SubBulletsContainer = styled.ul`
  list-style: none;
  position: relative;

  &::after {
    content: "";
    height: calc(100% + 3.2rem);
    width: 0.2rem;

    position: absolute;
    left: -0.1rem;
    top: ${({ last }) => (last ? "-3.2rem" : 0)};
    z-index: 1;

    background-color: ${({ theme }) => theme.bulletLineColor};
  }
`;

const SubBullet = styled.li`
  color: ${({ theme }) => theme.nestedNulletNestedContentColor};
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.6rem;
  letter-spacing: 0.01em;
  padding: 1.2rem 0;
  padding-left: 8rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: calc(50% - 0.1rem);
    height: 0.2rem;
    width: 4.8rem;
    background-color: ${({ theme }) => theme.bulletLineColor};
  }

  &::before {
    content: "";
    position: absolute;
    width: 1.6rem;
    height: 1.6rem;
    left: 4.8rem;
    top: calc(50% - 0.8rem);
    border-radius: 0.8rem;
    border: 0.2rem solid ${({ theme }) => theme.nestedBulletTitleColor};
    background-color: ${({ status }) => (status ? "#0BCE91" : "none")};
  }
`;

const UpArrow = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      r="12"
      transform="matrix(1 0 0 -1 12 12)"
      fill="#0BCE91"
      fillOpacity="0.1"
    />
    <path d="M17 14L12 9L7 14" stroke="#0BCE91" strokeWidth="1.5" />
  </svg>
);

const DownArrow = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="#0BCE91" fillOpacity="0.1" />
    <path d="M17 10L12 15L7 10" stroke="#0BCE91" strokeWidth="1.5" />
  </svg>
);

export default NestedBullets;
