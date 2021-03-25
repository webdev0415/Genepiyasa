import styled from "styled-components";

export default styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 3.4rem;
  line-height: 3.8rem;
  color: ${({ theme }) => theme.titleColor};
`;
