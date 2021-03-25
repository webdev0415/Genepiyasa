import React, {useState} from "react";
import { Wrapper } from "../../layout";
import styled from "styled-components";
import Link from "next/link"
import Router from "next/router"
import GreenButton from "./../../utility/GreenButton";

const ExamQuestion = ({data, title, curcount, setCurcount, maxlength,answers,setAnswers}) => {
  const [answerStatus, setAnswerStatus] = useState(false)
  const [submitBtn, setSubmitBtn] = useState(false)
  const [activeBtn, setActiveBtn] = useState(true)
  const handleClick = () => {
    if (maxlength-1 > curcount) {
      setCurcount(curcount+1)
      setSubmitBtn(false)
    } else {
      setSubmitBtn(true)
      // Router.push('/akademi/sinavlar/result')
    }
    setAnswers([...answers, answerStatus])
  }
  const handleChange = e => {
    
    if (e.target.value === "true") {
      setAnswerStatus(true)
    } else {
      setAnswerStatus(false)
    }
    setActiveBtn(false)
  }
  const handleResult = e => {
    e.preventDefault()
  }
  return (
    <Wrapper>
      <ExamQuestionContainer>
        <QuestionTitle>
          <QuestionNumber>Soru {curcount+1} : </QuestionNumber>
          {title}
        </QuestionTitle>
        <OptionsWrapper>
        {data && data.map((item, index)=>(
          <Option key={index}>
            <RadioWrapper>
              <Radio type="radio" name="MCQ" id={`MCQ${index}`} value={item[1]} onChange={handleChange}/>
              <RadioButton />
            </RadioWrapper>
            <RadioLabel for={`MCQ${index}`}>
              {item[0]}
            </RadioLabel>
          </Option>
          ))}
        </OptionsWrapper>
        {
          !submitBtn && (
            <GreenButton
              title={
                <>
                  İleri
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    style={{ marginLeft: "1rem" }}
                  >
                    <path d="M0 8L15 8" stroke="#F3F3F5" strokeWidth="1.5" />
                    <path d="M8 1L15 8L8 15" stroke="#F3F3F5" strokeWidth="1.5" />
                  </svg>
                </>
              }
              onClick={handleClick}
              disabled={activeBtn}
            />
            )
        }
        {
          submitBtn && (
            <Link href={{ pathname: '/akademi/sinavlar/result', query: { answers: `${answers}`}}}>
            <GreenButton
                title={
                  <>
                    sonuç
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      style={{ marginLeft: "1rem" }}
                    >
                      <path d="M0 8L15 8" stroke="#F3F3F5" strokeWidth="1.5" />
                      <path d="M8 1L15 8L8 15" stroke="#F3F3F5" strokeWidth="1.5" />
                    </svg>
                  </>
                }
                
                disabled={activeBtn}
              />
              </Link>
            )
        }
        
      </ExamQuestionContainer>
    </Wrapper>
  );
};

const ExamQuestionContainer = styled.div`
  margin-top: 5rem;
`;

const QuestionTitle = styled.h4`
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 3.2rem;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.questionTitleColor};
  border-left: 0.4rem solid ${({ theme }) => theme.questionNumberColor};
  padding-left: 1.6rem;
  max-width: 60rem;
`;

const QuestionNumber = styled.span`
  color: ${({ theme }) => theme.questionNumberColor};
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
  min-width: 52rem;
  align-items: stretch;
  margin-bottom: 5rem;
`;

const Option = styled.div`
  margin: 0.6rem 0;
  padding: 2.2rem;
  background-color: ${({ theme }) => theme.radioBackgroundColor};
  border: 0.1rem solid
    ${({ theme, checked }) => (checked ? "#0bce91" : theme.radioBorderColor)};
  display: flex;
  align-items: center;
`;

const RadioWrapper = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  position: relative;

  &::before {
    content: "";
    border-radius: 100%;
    border: 0.2rem solid
      ${({ theme, checked }) => (checked ? "#0bce91" : theme.radioBorderColor)};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`;

const Radio = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:checked + span {
    width: calc(0.8rem);
    height: calc(0.8rem);
    transition: width 0.2s ease-out, height 0.2s ease-out;
    background: #0bce91;
  }
`;

const RadioButton = styled.span`
  background: ${({ theme }) => theme.radioButtonColor};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;
`;

const RadioLabel = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.questionTitleColor};
  padding-left: 1.6rem;
`;

export default ExamQuestion;
