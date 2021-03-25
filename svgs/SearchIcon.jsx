import React from "react";
import styled from "styled-components";

const SearchIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="transparent">
      <Path
        d="M15.7138 6.8382C18.1647 9.28913 18.1647 13.2629 15.7138 15.7138C13.2629 18.1647 9.28913 18.1647 6.8382 15.7138C4.38727 13.2629 4.38727 9.28913 6.8382 6.8382C9.28913 4.38727 13.2629 4.38727 15.7138 6.8382"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 19L15.71 15.71"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Path = styled.path`
  stroke: ${({ theme }) => theme.navigationBorderColor};
`;

export default SearchIcon;
