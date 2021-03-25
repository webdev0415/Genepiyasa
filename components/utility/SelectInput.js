import React from "react";
import InputIcon from "../../svgs/InputIcon";
import styled from "styled-components";
// import {connect} from 'react-redux'

const SelectInput = ({
  id,
  label,
  icon,
  value,
  onChange,
  categorys,
  required,
}) => {
  return (
    <TextInputWrapper>
      <Label>{label}</Label>
      <InputWrapper>
        <InputIcon icon={icon} />
        <Select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
        >
        <option>--Select Category--</option>
        { categorys.length !== 0 && categorys !== undefined && categorys.length !== undefined
              ? categorys.map((category, index) => <option value={category.category_title} key={index}>{category.category_title}</option>)
              : <option>No Category</option> 
        }
        </Select>
      </InputWrapper>
    </TextInputWrapper>
  );
};

const TextInputWrapper = styled.div`
  margin: 2.4rem 0;
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
`;

const Select = styled.select`
  font-family: inherit;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.6rem;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.titleColor};
  border: none;
  background-color: transparent;
  padding: 1rem;
  width: 100%;
  outline: none;
  -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none; 
  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  &::-webkit-outer-spin-button, /* Removes arrows */
&::-webkit-inner-spin-button, /* Removes arrows */
&::-webkit-clear-button {
    /* Removes blue cross */
    -webkit-appearance: none;
    margin: 0;
  }
`;
// const mapStateToProps = state => ({
//   categorys: state.blogs.categorys,
// })
// export default connect(mapStateToProps, null)(SelectInput)

export default SelectInput;
