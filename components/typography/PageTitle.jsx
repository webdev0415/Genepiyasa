import styled from "styled-components";

const PageTitle = styled.h1`
  color: ${({ theme }) => theme.pageTitleColor};
  font-weight: 500;
  font-size: 4.8rem;
  line-height: 6rem;
  letter-spacing: -0.05em;
  border-bottom: 1px solid ${({ theme }) => theme.pageTitleBorderColor};
  width: 100%;
  padding-bottom: 4.8rem;
`;

export default PageTitle;
