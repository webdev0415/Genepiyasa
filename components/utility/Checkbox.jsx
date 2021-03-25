import React from "react";
import styled from "styled-components";

const Checkbox = ({ label, checked, onClick,...props }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked} onClick={onClick}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      <Label>{label}</Label>
    </CheckboxContainer>
  );
};

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${({ theme }) => theme.checkedIconColor};
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: ${({ theme }) => theme.checkboxBackgroundColor};
  border: 1px solid ${({ theme }) => theme.checkboxBorderColor};
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.inputLabelColor};
  margin-left: 0.8rem;
`;

export default Checkbox;
