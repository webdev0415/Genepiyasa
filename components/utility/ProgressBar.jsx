import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

const ProgressBar = ({ completed, number }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarIndicator completed={`${completed}%`}></ProgressBarIndicator>
      <ProgressedPath completed={`${completed}%`}></ProgressedPath>
      <ProgressBarLine></ProgressBarLine>
      {/* <ProgressNumberWrapper> */}
      <ProgressNumberIndicator completed={`${completed}%`}>
        {number}
      </ProgressNumberIndicator>
      {/* </ProgressNumberWrapper> */}
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 1.1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;

const ProgressBarIndicator = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: ${({ completed }) => completed};
  width: 2.4rem;
  height: 2.4rem;
  background-color: ${({ theme }) => theme.progressBarIndicator};
  border-radius: 1.2rem;
`;

const ProgressedPath = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.progressBarIndicator};
  height: 0.3rem;
  top: 50%;
  left: 0;
  width: ${({ completed }) => completed};
  transform: translateY(-50%);
`;

const ProgressBarLine = styled.div`
  width: 100%;
  height: 0.3rem;
  background-color: ${({ theme }) => theme.progressBarLine};
`;

// const ProgressNumberWrapper = styled.div``;

const ProgressNumberIndicator = styled.p`
  background-color: ${({ theme }) => rgba(theme.progressNumberIndicator, 0.1)};
  padding: 0.8rem 1.4rem;
  color: ${({ theme }) => theme.progressBarIndicator};
  width: auto;
  position: absolute;
  top: 150%;
  left: ${({ completed }) => completed};
  transform: translateX(-50%);

  &::after {
    content: "";
    position: absolute;
    top: 0.35rem;
    left: 50%;
    width: 0;
    height: 0;
    border: 0.563em solid transparent;
    border-right-color: ${({ theme }) =>
      rgba(theme.progressNumberIndicator, 0.1)};
    border-bottom: 0;
    transform: rotate(225deg) translateX(50%);
  }
`;

export default ProgressBar;
