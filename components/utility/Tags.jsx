import React from "react";
import styled from "styled-components";

const Tags = () => {
  return (
    <Container>
      <Tag>#döviz</Tag>
      <Tag>#forex</Tag>
      <Tag>#parite</Tag>
    </Container>
  );
};

const Container = styled.div`
  margin: 2.4rem 0;
  display: flex;
`;

const Tag = styled.p`
  background-color: ${({ theme }) => theme.tagsBackgroundColor};
  color: ${({ theme }) => theme.tagsTextColor};
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin: 0 1.2rem;
  padding: 0.8rem 1.4rem;

  &:first-child {
    margin-left: 0;
  }
`;

export default Tags;
