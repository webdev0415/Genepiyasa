import React from "react";
import styled from "styled-components";

const GreenButton = ({ title, onClick, style, disabled }) => {
  const test = true
  return (
    <div>
  {
    disabled !== undefined
    ? disabled
    ? <StyledDisableButton style={style} bgcolor="gray" onClick={onClick} disabled={disabled}>
        {title}
      </StyledDisableButton>
    : <StyledButton style={style} onClick={onClick} disabled={disabled}>
        {title}
      </StyledButton>
    : <StyledButton style={style} bgcolor="gray" onClick={onClick} disabled={disabled}>
        {title}
      </StyledButton>
  }
  </div>
  );
};

const StyledButton = styled.button`
  padding: 1.8rem 2rem;
  color: #ffffff;
  font-size: 1.6rem;
  letter-spacing: -0.04em;
  background-color: #00ffff;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s all;
  border-radius: 5px;
  &:hover {
    transition: .7s all;
    background-color: transparent;
    // box-shadow: 1px 2px 3px black;
    border: 1px solid #201A4B;
  }
`;
const StyledDisableButton = styled.button`
  padding: 1.8rem 2rem;
  color: green;
  font-size: 1.6rem;
  letter-spacing: -0.04em;
  background-color: gray;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s all;
`;

export default GreenButton;
