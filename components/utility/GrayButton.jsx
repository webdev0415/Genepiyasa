import React from "react";
import styled from "styled-components";

const GrayButton = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 1.8rem 2rem;
  color: ${({ theme }) => theme.titleColor};
  font-size: 1.6rem;
  letter-spacing: -0.04em;
  background-color: ${({ theme }) => theme.grayButtonBackground};
  border: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default GrayButton;
