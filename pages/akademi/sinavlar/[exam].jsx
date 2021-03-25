import React, {useState} from "react";
import Breadcrum from "../../../components/utility/Breadcrum";
import { ContentContainer } from "../../../components/layout";
import styled from "styled-components";
import H4Medium from "../../../components/typography/H4Medium";
import {connect} from "react-redux"
import Position from "./../../../components/utility/Position";
import ExamQuestion from "../../../components/pages/destec/ExamQuestion";
import Router, {useRouter} from 'next/router'

const Exam = (props) => {
  const {auth, contents} = props
  const router = useRouter();
  const {exam} = router.query 
  const [curcount, setCurcount] = useState(0)
  let exam_limit_time, exam_limit_count, pass_grade, questionArr, data;
  if (contents[exam]) {
    exam_limit_time = contents[exam].exam_limit_time;
    exam_limit_count = contents[exam].exam_limit_count;
    pass_grade = contents[exam].exam_pass_grade;
    data = contents[exam]
    questionArr = Object.keys(contents[exam].questions)
  }
  let maxlength;
  if (questionArr && questionArr.length > 0) {
    maxlength = questionArr.length
  }
  const num = 1;
  // const {exam_limit_time, exam_limit_count} = contents[exam];
  const [limitTime, setLimitTime] = useState(exam_limit_time)
  const [limitCount, setLimitCount] = useState(exam_limit_count)
  const [answers, setAnswers] = useState([])
  // const pass_grade = contents[exam].exam_pass_grade
  // const questionArr = Object.keys(contents[exam].questions)
  // const maxlength = questionArr.length
  // const num = 1
  return(
    <React.Fragment>
    <Breadcrum
         items={[
           { url: "/akademi", text: "Akademi" },
           { url: "/akademi/sinavlar", text: "Sınavlar" },
           {
             url: `/akademi/sinavlar/${exam}`,
             text: `${exam}`,
           },
         ]}
       />
       <ContentContainer>
        <Content>
          <HeaderWrapper>
            <H4Medium>{exam}</H4Medium>
            <SeeAllExams>
              Tüm Sınavları Gör
              {Arrow}
            </SeeAllExams>
          </HeaderWrapper>
          <SubHeaders>
          {auth.isAuthenticated && (<SubHeader>{UserIcon}{auth.user.username}</SubHeader>)}
            <SubHeader>{DateIcon}9 Aralık 2020</SubHeader>
          </SubHeaders>
          <ExamPassAlert>
            {AlertIcon}Bu sınavdan başarılı olabilmek için almanız gereken en
            düşük puan {pass_grade}0’dir.
          </ExamPassAlert>
        </Content>
        <Wrapper>
          <ExamQuestionsContent>
            <QuestionNumbers>
              <CurrentQuestion>Sorular {curcount+1} / {maxlength}</CurrentQuestion>
              <NumbersWrapper>
                {
                  data && data.questions && questionArr.map((item, index)=>(
                    <Position key={index} number={index+1} disabled={!(curcount >= `${index}` && true)} color={
                          answers[index] && answers[index]==true 
                          ? "rgb(11, 206, 145)"
                          : answers[index]==false
                            ? "rgb(223, 88, 90)"
                            : ""
                        } />
                  ))
                }
              </NumbersWrapper>
            </QuestionNumbers>
            <ExamProgress>
              <CurrentQuestion>Skor</CurrentQuestion>
              <ScoresContainer>
                <Score>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 19C5.029 19 1 14.971 1 10C1 5.029 5.029 1 10 1C14.971 1 19 5.029 19 10C19 14.971 14.971 19 10 19Z"
                      stroke="#0BCE91"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 8L9 13L6 10"
                      stroke="#0BCE91"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span style={{ color: "#0BCE91" }}>{answers.filter(item=>item==true).length}</span>
                </Score>
                <Score>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M12.8299 7.16998L7.16992 12.83"
                      stroke="#DF585A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.8299 12.83L7.16992 7.16998"
                      stroke="#DF585A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 19C5.029 19 1 14.971 1 10C1 5.029 5.029 1 10 1C14.971 1 19 5.029 19 10C19 14.971 14.971 19 10 19Z"
                      stroke="#DF585A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span style={{ color: "#DF585A" }}>{answers.filter(item=>item==false).length}</span>
                </Score>
              </ScoresContainer>
            </ExamProgress>
          </ExamQuestionsContent>
        </Wrapper>
        <ExamQuestion 
          data={data && data.questions[questionArr[curcount]]} 
          title={questionArr && questionArr[curcount]} 
          curcount={curcount} 
          setCurcount={setCurcount} 
          maxlength={maxlength}
          answers={answers}
          setAnswers={setAnswers}
           />
          }
      </ContentContainer>
    </React.Fragment>
    )
}
// const Exam = (props) => {
//   const {auth, contents} = props
//   const router = useRouter();
//   const {exam} = router.query 
//   console.log("contents", contents[exam])
//   const [curcount, setCurcount] = useState(0)
//   const {exam_limit_time, exam_limit_count} = contents[exam];
//   const [limitTime, setLimitTime] = useState(exam_limit_time)
//   const [limitCount, setLimitCount] = useState(exam_limit_count)
//   const pass_grade = contents[exam].exam_pass_grade
//   const questionArr = Object.keys(contents[exam].questions)
//   const maxlength = questionArr.length
//   const num = 1
//   const [answers, setAnswers] = useState([])
//   // console.log("exam", exam)
//   // const [curcorrect, setCurcorrect] = useState()
//   // console.log(contents[exam].questions[questionArr[curcount]])
//   // console.log("answers status===>", answers)
//   return (
//     <React.Fragment>
//       <Breadcrum
//         items={[
//           { url: "/akademi", text: "Akademi" },
//           { url: "/akademi/sinavlar", text: "Sınavlar" },
//           {
//             url: "/akademi/sinavlar/destec",
//             text: "Destek ve Direnç Seviyeleri",
//           },
//         ]}
//       />
//       <ContentContainer>
//         <Content>
//           <HeaderWrapper>
//             <H4Medium>{exam}</H4Medium>
//             <SeeAllExams>
//               Tüm Sınavları Gör
//               {Arrow}
//             </SeeAllExams>
//           </HeaderWrapper>
//           <SubHeaders>
//           {auth.isAuthenticated && (<SubHeader>{UserIcon}{auth.user.username}</SubHeader>)}
//             <SubHeader>{DateIcon}9 Aralık 2020</SubHeader>
//           </SubHeaders>
//           <ExamPassAlert>
//             {AlertIcon}Bu sınavdan başarılı olabilmek için almanız gereken en
//             düşük puan {contents[exam].exam_pass_grade}0’dir.
//           </ExamPassAlert>
//         </Content>
//         <Wrapper>
//           <ExamQuestionsContent>
//             <QuestionNumbers>
//               <CurrentQuestion>Sorular {curcount+1} / {maxlength}</CurrentQuestion>
//               <NumbersWrapper>
//                 {
//                   contents[exam] && contents[exam].questions && questionArr.map((item, index)=>(
//                     <Position key={index} number={index+1} disabled={!(curcount >= `${index}` && true)} color={
//                           answers[index] && answers[index]==true 
//                           ? "rgb(11, 206, 145)"
//                           : answers[index]==false
//                             ? "rgb(223, 88, 90)"
//                             : ""
//                         } />
//                   ))
//                 }
//               </NumbersWrapper>
//             </QuestionNumbers>
//             <ExamProgress>
//               <CurrentQuestion>Skor</CurrentQuestion>
//               <ScoresContainer>
//                 <Score>
//                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                     <path
//                       d="M10 19C5.029 19 1 14.971 1 10C1 5.029 5.029 1 10 1C14.971 1 19 5.029 19 10C19 14.971 14.971 19 10 19Z"
//                       stroke="#0BCE91"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M14 8L9 13L6 10"
//                       stroke="#0BCE91"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <span style={{ color: "#0BCE91" }}>{answers.filter(item=>item==true).length}</span>
//                 </Score>
//                 <Score>
//                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                     <path
//                       d="M12.8299 7.16998L7.16992 12.83"
//                       stroke="#DF585A"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M12.8299 12.83L7.16992 7.16998"
//                       stroke="#DF585A"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M10 19C5.029 19 1 14.971 1 10C1 5.029 5.029 1 10 1C14.971 1 19 5.029 19 10C19 14.971 14.971 19 10 19Z"
//                       stroke="#DF585A"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <span style={{ color: "#DF585A" }}>{answers.filter(item=>item==false).length}</span>
//                 </Score>
//               </ScoresContainer>
//             </ExamProgress>
//           </ExamQuestionsContent>
//         </Wrapper>
//         <ExamQuestion 
//           data={contents[exam].questions[questionArr[curcount]]} 
//           title={questionArr[curcount]} 
//           curcount={curcount} 
//           setCurcount={setCurcount} 
//           maxlength={maxlength}
//           answers={answers}
//           setAnswers={setAnswers}
//            />
//           }
//       </ContentContainer>
//     </React.Fragment>
//   );
// };
// {color="rgb(223, 88, 90)"
// color="rgb(11, 206, 145)"}
const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.progressBarBorderColor};
  border-left: none;
  border-right: none;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 111.6rem;
  margin-top: 8rem;
`;

const ExamQuestionsContent = styled.div`
  margin: 0 auto;
  max-width: 136.6rem;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SeeAllExams = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.seeAllExamsColor};
  text-decoration: underline;
  display: flex;
  align-items: center;
`;

const SubHeaders = styled.div`
  display: flex;
`;

const SubHeader = styled.p`
  color: ${({ theme }) => theme.examSubHeader};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.6rem;
  display: flex;
  align-items: center;
  margin-right: 2rem;
  margin-top: 1.3rem;
  margin-bottom: 3.5rem;
`;

const ExamPassAlert = styled.p`
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.generalBackgroundColor};
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.examAlertTextColor};
  font-weight: 500;
  font-size: 1.4rem;
  width: auto;
  line-height: 1.6rem;
  margin-bottom: 3.2rem;
`;

const QuestionNumbers = styled.div`
  flex: 1;
  padding: 3.2rem 0;
  display: flex;
  flex-direction: column;
  width: calc(100% - 16rem);
`;

const NumbersWrapper = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-inline-flexbox;
  /* display: inline-flex; */
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    margin: 0 1rem;
  }

  & > *:first-child {
    margin-left: 0;
  }
`;

const CurrentQuestion = styled.p`
  color: ${({ theme }) => theme.examQuestionsProgressColor};
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  margin-bottom: 1.6rem;
`;

const ExamProgress = styled.div`
  padding: 3.2rem;
  border-left: 0.1rem solid ${({ theme }) => theme.progressBarBorderColor};
  flex-basis: 16rem;
  padding-right: 0;
`;

const ScoresContainer = styled.div`
  margin-right: 2.3rem;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const Score = styled.span`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  display: flex;
  align-items: center;
  span {
    margin-left: 1rem;
  }
`;

const ArrowPath = styled.path`
  stroke: ${({ theme }) => theme.seeAllExamsColor};
`;

const SubHeaderIconPath = styled.path`
  stroke: ${({ theme }) => theme.examSubHeader};
`;

const AlertIconPath = styled.path`
  stroke: ${({ theme }) => theme.examAlertTextColor};
`;

const AlertIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: "1.3rem" }}
  >
    <AlertIconPath
      d="M11 6L8 9L12 11L9 14"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <AlertIconPath
      d="M10 19C5.029 19 1 14.971 1 10C1 5.029 5.029 1 10 1C14.971 1 19 5.029 19 10C19 14.971 14.971 19 10 19Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DateIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: "1rem" }}
  >
    <SubHeaderIconPath
      d="M6.55691 1.68699C11.1479 -0.215008 16.4109 1.96599 18.3129 6.55699C20.2149 11.148 18.0339 16.411 13.4429 18.313C8.85191 20.215 3.58891 18.034 1.68691 13.443C-0.214091 8.85199 1.96591 3.58899 6.55691 1.68699"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <SubHeaderIconPath
      d="M9.71777 5.98499V10.636L13.3738 12.865"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UserIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: "1rem" }}
  >
    <SubHeaderIconPath
      d="M16.3639 3.63604C19.8787 7.15076 19.8787 12.8492 16.3639 16.3639C12.8492 19.8787 7.15074 19.8787 3.63604 16.3639C0.12132 12.8492 0.12132 7.15074 3.63604 3.63604C7.15076 0.12132 12.8492 0.12132 16.3639 3.63604"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <SubHeaderIconPath
      d="M15.3074 17.257C14.9234 15.417 12.7054 14 10.0004 14C7.29536 14 5.07736 15.417 4.69336 17.257"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <SubHeaderIconPath
      d="M12.1213 5.87868C13.2929 7.05025 13.2929 8.94975 12.1213 10.1213C10.9497 11.2929 9.05025 11.2929 7.87868 10.1213C6.70711 8.94975 6.70711 7.05025 7.87868 5.87868C9.05025 4.70711 10.9497 4.70711 12.1213 5.87868Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Arrow = (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginLeft: "1rem" }}
  >
    <ArrowPath d="M0 8L15 8" strokeWidth="1.5" />
    <ArrowPath d="M8 1L15 8L8 15" strokeWidth="1.5" />
  </svg>
);
const mapStateToProps = state=>({
  auth: state.auth,
  contents: state.exams.contents
});
const mapDispatchToProps = dispatch => {
  return {
    getInitExam: ()=> dispatch(getInitExam())
  }
}
export default connect(mapStateToProps, null)(Exam);
// export default Exam;
