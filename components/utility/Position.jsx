import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

const Position = ({ color, number, current, disabled }) => {
  return (
    <Container color={color} disabled={disabled}>
      <Number color={color} disabled={disabled}>
        {number}
      </Number>
    </Container>
  );
};

const Container = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 2.4rem;
  border-style: solid;
  border-width: 0.1rem;
  border-color: ${({ color, theme }) =>
    color ? color : theme.positionBorderColor};
  background: ${({ color, disabled, theme }) =>
    color
      ? rgba(color, 0.1)
      : disabled
      ? theme.positionDisabledBackgroundColor
      : theme.positionCurrentBackgroundColor};
  display: flex;
  min-height: min-content;
`;

const Number = styled.p`
  color: ${({ color, disabled, theme }) =>
    color
      ? color
      : disabled
      ? theme.positionDisabledTextColor
      : theme.positionCurrentTextColor};
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.4rem;
  margin: auto;
`;

export default Position;
