import React, {useState, useEffect} from "react";
import InputIcon from "../../svgs/InputIcon";
import styled from "styled-components";
import {addOrRemoveToCacheUser} from "../../store/action/actions.js"
import {connect} from "react-redux"

const ChipClose = () => {
  const Path = styled.path`
    stroke: ${({ theme }) => theme.chipRemoveIconColor};
  `;
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginLeft: "1rem", cursor: "pointer" }}
    >
      <Path
        d="M6.41496 3.58496L3.58496 6.41496"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.41496 6.41496L3.58496 3.58496"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5 9.5C2.5145 9.5 0.5 7.4855 0.5 5C0.5 2.5145 2.5145 0.5 5 0.5C7.4855 0.5 9.5 2.5145 9.5 5C9.5 7.4855 7.4855 9.5 5 9.5Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ChipAdd = ({ valid, onClick }) => {
  const Path = styled.path`
    stroke: ${({ theme }) =>
      valid ? theme.chipSelectedColor : theme.chipUnselectedColor};
  `;

  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginLeft: "1rem" }}
    >
      <Path
        d="M6.41496 3.58496L3.58496 6.41496"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.41496 6.41496L3.58496 3.58496"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5 9.5C2.5145 9.5 0.5 7.4855 0.5 5C0.5 2.5145 2.5145 0.5 5 0.5C7.4855 0.5 9.5 2.5145 9.5 5C9.5 7.4855 7.4855 9.5 5 9.5Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ChipSelect = ({ label, valid, icon, value, onChange, options, addOrRemoveToCacheUser }) => {
  const [renderFlag, setRenderFlag] = useState(false)
  const handleAddClick = e => {
    if (e !== undefined) {
      
      const val = e.target.id;
      const index = options.indexOf(val)
      if (index >= 0) {
        value.push(val);
        options.splice(index,1);
        setRenderFlag(!renderFlag);
      } 
    }
  }
  const handleChildClick = e => {
    e.stopPropagation();
  }
  const handleRemoveClick = e => {
    if (e !== undefined) {
     
      const val = e.target.id;
      const index = value.indexOf(val);
      if (index >= 0) {
        options.push(val);
        value.splice(index, 1);
        setRenderFlag(!renderFlag);
      }
    }
    
  }
  useEffect(() => {
        addOrRemoveToCacheUser(icon, value)
      }, [renderFlag])
  return (
    <ChipSelectContainer>
      <ChipSelectInput valid={valid}>
        <Label>{label}</Label>
        <InputWrapper>
          <InputIcon icon={icon} valid={valid} />
          <SelectedChips>
            {value.map((selectedChip) => (
              <SelectedChip id={selectedChip} key={selectedChip} onClick={e => handleRemoveClick(e)}>
                {selectedChip} <ChipClose onClick={handleChildClick} />
              </SelectedChip>
            ))}
          </SelectedChips>
        </InputWrapper>
      </ChipSelectInput>
      <ChipSelectOptions>
        {options.map((option) => (
          <ChipSelectOption id={option} valid={valid} key={option} onClick={e => handleAddClick(e)}>
            {option} <ChipAdd valid={valid} />
          </ChipSelectOption>
        ))}
      </ChipSelectOptions>
    </ChipSelectContainer>
  );
};
const Test = styled.div`
width: 100px;
height: 100px;
background-color: red;
`
const ChipSelectContainer = styled.div`
  margin: 2.4rem 0;
`;

const ChipSelectInput = styled.div`
  margin-bottom: 0.5rem;
  border-bottom: 2px solid
    ${(props) => {
      if (props.valid) {
        return "#0BCE91";
      } else if (props.error) {
        return "#DF585A";
      } else {
        return props.theme.inputBorderColor;
      }
    }};
`;

const Label = styled.label`
  color: ${({ theme }) => theme.inputLabelColor};
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 0.8rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
`;

const SelectedChips = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const SelectedChip = styled.span`
  font-family: inherit;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.6rem;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.titleColor};
  border: none;
  background-color: transparent;
  padding: 0.2rem 1rem;
  display: flex;
  align-items: flex-start;
`;

const ChipSelectOptions = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-left: -0.6rem;

`;

const ChipSelectOption = styled.span`
  font-family: inherit;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ valid, theme }) =>
    valid ? theme.chipSelectedColor : theme.chipUnselectedColor};
  background-color: ${({ valid, theme }) =>
    valid ? theme.chipSelectedBackground : theme.chipUnselectedBackgroundColor};
  border: 1px solid
    ${({ theme, valid }) =>
      valid ? "transparent" : theme.chipUnselectedBorderColor};

  margin: 0.6rem;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
`;
// const mapStateToProps = state => {
//   return {
//     auth: state.auth,
//     errors: state.errors
//   }
// }
const mapDispatchToProps = dispatch => {
  return {
    addOrRemoveToCacheUser: (a,b)=> dispatch(addOrRemoveToCacheUser(a,b))
  }
}
export default connect(null, mapDispatchToProps)(ChipSelect);
// export default ChipSelect;
