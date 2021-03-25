import React from "react";
import styled from "styled-components";

const GreenButtonSecondary = ({ title, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  text-align: center;
  padding: 1.8rem 2rem;
  color: ${({ theme }) => theme.buttonColor};
  font-size: 1.6rem;
  letter-spacing: -0.04em;
  border: 0.1rem solid ${({ theme }) => theme.navigationBorderColor};
  box-shadow: none;
  color: #0bce91;
  background-color: rgba(11, 206, 145, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default GreenButtonSecondary;
