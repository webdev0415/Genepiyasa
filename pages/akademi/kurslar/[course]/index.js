import React from "react";
import Router, {useRouter} from 'next/router'
import Breadcrum from "../../../../components/utility/Breadcrum";
import { ContentContainer, Paragraph } from "../../../../components/layout";
import {connect} from 'react-redux'
import Icon1 from "./../../../../rawSvg/forexUkulu.svg";
import Icon2 from "./../../../../rawSvg/bitcoin.svg"
import Icon3 from "./../../../../rawSvg/borsaicon.svg"
import Icon4 from "./../../../../rawSvg/araclaicon.svg"
import queryString from "query-string";
import styled from "styled-components";

import Progress from "../../../../svgs/Progress";

import ProgressBar from "./../../../../components/utility/ProgressBar";
import Section1 from "./../../../../components/pages/CoursePage/Section1";
import Section2 from "./../../../../components/pages/CoursePage/Section2";
import Section3 from "./../../../../components/pages/CoursePage/Section3";
import H3Medium from "../../../../components/typography/H3Medium";
import GreenButtonSecondary from "../../../../components/utility/GreenButtonSecondary";



const CoursePage = ({auth, contents}) => {

  const router = useRouter();
  const {course} = router.query;

  const isPageNameSecure = () => {
      const pageName = router.query.course;

      if (pageName !== "Forex" && pageName !== "Kripto" && pageName !== "Borsa" && pageName !== "İleri Düzey Türev Araçlar")
          return false;
      return true;
  };


  const currentIcon = {};

  const CurrentCourse = () => {
      const courseName = router.query.course;

      if(courseName === "Forex")
          currentIcon.icon = Icon1;
      else if(courseName === "Kripto")
          currentIcon.icon = Icon2;
      else if(courseName === "Borsa")
          currentIcon.icon = Icon3;
      else if(courseName === "İleri Düzey Türev Araçlar")
          currentIcon.icon = Icon4;

      return currentIcon.icon;

  };

    if (isPageNameSecure()) {


        return (
            <React.Fragment>
                {/*<Breadcrum*/}
                {/*  items={[*/}
                {/*    { url: "/akademi", text: "Akademi" },*/}
                {/*    {*/}
                {/*      url: `/akademi/kurslar/${course}`,*/}
                {/*      text: `${course}`,*/}
                {/*    },*/}
                {/*  ]}*/}
                {/*/>*/}
                <ContentContainer>
                    <Wrapper>
                        {/*<ProgressContainer>*/}
                        {/*  */}
                        {/*/!*{*!/*/}
                        {/*/!*TODO: İlerleme durumu*!/*/}
                        {/*/!*  auth.isAuthenticated && (*!/*/}
                        {/*/!*    <ProgressContainerContent>*!/*/}
                        {/*/!*      <Progress />*!/*/}
                        {/*/!*      <ProgressTitle>İlerlemeniz</ProgressTitle>*!/*/}
                        {/*/!*      <ProgressInfo>Toplamda 120 dersin 39’unu işlediniz.</ProgressInfo>*!/*/}
                        {/*/!*      <ProgressBar completed={30} number="39/120" />*!/*/}
                        {/*/!*    </ProgressContainerContent>*!/*/}
                        {/*/!*    )*!/*/}
                        {/*/!*}*!/*/}
                        {/* */}
                        {/*</ProgressContainer>*/}
                        <HeaderContainer>
                            <ProgressContainerContent>
                                <img src={CurrentCourse()} alt="" />
                                <H3Medium>{course} Okulu</H3Medium>
                                <Paragraph
                                    style={{
                                        margin: "2.4rem 0 3.2rem 0",
                                    }}
                                >
                                    {contents[course].course_detail}
                                </Paragraph>
                                <GreenButtonSecondary
                                    title={<>İlerlemesini Takip Et {RightArrow}</>}
                                />
                            </ProgressContainerContent>
                        </HeaderContainer>
                        <>
                            {
                                course && contents[course] && contents[course].lessons && Object.keys(contents[course].lessons).map((item, index)=>
                                    <Section1 data={contents[course].lessons[item]} title={item} number={index} key={index} />
                                )
                            }
                        </>

                    </Wrapper>
                </ContentContainer>
            </React.Fragment>
        );




    }
    else {

        return (
            <React.Fragment>

            </React.Fragment>
        )



    }

};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 111.6rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 8rem;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  padding-bottom: 6.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.progressBarBorderColor};
`;

const ProgressContainer = styled.div`
  padding-bottom: 6rem;
  border-bottom: 1px solid ${({ theme }) => theme.progressBarBorderColor};
  margin-bottom: 6.4rem;
`;

const ProgressContainerContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 33rem;
  flex-direction: column;
`;

const ProgressTitle = styled.p`
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.titleColor};
  text-align: center;
`;

const ProgressInfo = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.6rem;
  text-align: center;
  color: ${({ theme }) => theme.progressInfoColor};
  text-align: center;
  padding: 0.7rem 0 2.4rem 0;
`;

const RightArrow = (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginLeft: "1rem" }}
  >
    <path d="M0 8L15 8" stroke="#0BCE91" strokeWidth="1.5" />
    <path d="M8 1L15 8L8 15" stroke="#0BCE91" strokeWidth="1.5" />
  </svg>
);
const mapStateToProps = state=>({
  auth: state.auth,
  contents: state.courseContents.contents
});
const mapDispatchToProps = dispatch => {
  return {
    getInitData: ()=> dispatch(getInitData())
  }
}
export default connect(mapStateToProps, null)(CoursePage);
// export default CoursePage;
