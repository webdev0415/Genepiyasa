import styled from "styled-components";

export default styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 4rem;
  line-height: 4.8rem;
  color: ${({ theme }) => theme.titleColor};
`;
