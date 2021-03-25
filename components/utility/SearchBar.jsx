import React from "react";
import styled from "styled-components";
import GreenButtonSecondary from "./GreenButtonSecondary";

const SearchBar = (props) => {
  return (
    <SearchBarContainer>
      <Input placeholder={props.placeholder} {...props} />
      {props.value && props.value.length > 0 && (
        <GreenButtonSecondary
          onClick={props.onSearch}
          style={{ flexBasis: "10rem" }}
          title="Ara"
        />
      )}
      <svg
        onClick={props.onClose}
        style={{ marginLeft: "1rem" }}
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1.5L9 9.5"
          stroke="#645C93"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 1.5L1 9.5"
          stroke="#645C93"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Input = styled.input`
  flex: 1;
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

  &::placeholder {
    font-family: inherit;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.6rem;
    letter-spacing: 0.01em;
    color: ${({ theme }) => theme.searchBarLabelColor};
    border: none;
    outline: none;
  }
`;

export default SearchBar;
