import React from "react";
import styled from "styled-components";

const DownArrow = () => {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="transparent">
      <Path d="M8 1L8 16" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M15 9L8 16L1 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const Path = styled.path`
  stroke: ${({ theme }) => theme.paragraphText};
`;

export default DownArrow;
