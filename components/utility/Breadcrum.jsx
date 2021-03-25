import React from "react";

import { Wrapper } from "./../layout";
import Link from "next/link";
import styled from "styled-components";

const Breadcrum = ({ items }) => {
  return (
    <BreadcrumContainer>
      <Wrapper style={{ alignItems: "center", justifyContent: "flex-start" }}>
        <Home />
        <Items>
          {items.map((item, index) => (
            <React.Fragment key={item.url}>
              <Link href={item.url}>
                <Item active={index === items.length - 1}>{item.text}</Item>
              </Link>
              {index !== items.length - 1 && <Arrows>></Arrows>}
            </React.Fragment>
          ))}
        </Items>
      </Wrapper>
    </BreadcrumContainer>
  );
};

const BreadcrumContainer = styled.div`
  background-color: ${({ theme }) => theme.breadcrumBackground};
  padding: 1.7rem;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.span`
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-decoration: none;
  color: ${({ theme, active }) =>
    active ? theme.breadcrumActiveColor : theme.breadcrumInactiveColor};
  padding: 0 1rem;
  cursor: pointer;
`;

const Arrows = styled.span`
  color: ${({ theme }) => theme.breadcrumInactiveColor};
`;

const Home = () => {
  const Path = styled.path`
    stroke: ${({ theme }) => theme.breadcrumInactiveColor};
  `;

  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M2.66797 4.73334V13H13.3346V4.73334"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.33203 5.66667L7.9987 1L14.6654 5.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 13V8.99999C10 8.26332 9.40333 7.66666 8.66667 7.66666H7.33333C6.59667 7.66666 6 8.26332 6 8.99999V13"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Breadcrum;
