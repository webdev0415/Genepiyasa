import React from "react";
import styled from "styled-components";

const PurpleButton = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 1.8rem 2rem;
  color: ${({ theme }) => theme.buttonColor};
  font-size: 1.6rem;
  letter-spacing: -0.04em;
  background-color: ${({ theme }) => theme.purpleButtonBackground};
  border: none;
  box-shadow: none;
`;

export default PurpleButton;
