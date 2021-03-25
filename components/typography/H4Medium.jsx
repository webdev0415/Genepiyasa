import styled from "styled-components";

export default styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 3.2rem;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.titleColor};
`;
