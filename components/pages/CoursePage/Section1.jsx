import React from "react";
import styled from "styled-components";
import ForexUkulu1 from "./../../../rawSvg/forexUkulu1.svg";
import ForexUkulu2 from "./../../../rawSvg/forexUkulu2.svg";
import H3Medium from "../../typography/H3Medium";
import { Paragraph } from "../../layout";
import NestedBullets from "../../utility/NestedBullets";
import Locked from "./../../../rawSvg/locked.svg";
import Unlocked from "./../../../rawSvg/unlocked.svg";

const Section1 = ({data, title, number}) => {
  return (
    <Container>
      <LeftSection>
        <LessonImg src={data.lesson_img} alt="Lesson Image" />
        {
          number === 0 && (<img src={Unlocked} alt="" style={{ marginTop: "2rem" }} />)
        }
        {
          number > 0 && (<img src={Locked} alt="" style={{ marginTop: "2rem" }} />)
        }
      </LeftSection>
      <RightSection>
        <H3Medium>{number+1}. {title}</H3Medium>
        <Paragraph style={{ margin: "1.6rem 0 5rem 0" }}>
          {data.lesson_title}
        </Paragraph>
        {data.topics && (<NestedBullets lesson={title} data={data.topics} />)}
        
        {/*{data.topics && Object.keys(data.topics).map((item, index)=><NestedBullets key={index} title={item} data={data.topics[item]} />)}*/}
        
      </RightSection>
    </Container>
  );
};
const LessonImg = styled.img`
 width: 90%;
 height: 300px;
`
const Container = styled.div`
  display: flex;
  padding-bottom: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.progressBarBorderColor};
`;

const LeftSection = styled.div`
  max-width: 36rem;
  margin-right: 9.7rem;
`;

const RightSection = styled.div`
  flex: 1;
  margin-top: 6.4rem;
`;

export default Section1;
