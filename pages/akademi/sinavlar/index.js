import React, {useEffect} from "react";
import Breadcrum from "../../../components/utility/Breadcrum";
import {
  ContentContainer,
  SecondaryTitle,
  Paragraph,
} from "../../../components/layout";
import Link from 'next/link'
import PurpleButton from "./../../../components/utility/PurpleButton";
import styled from "styled-components";
import {getInitExam} from "../../../store/action/actions"
import DestecIll from "./../../../rawSvg/destec.svg";
import {connect} from "react-redux"
 // <Link href={{ pathname: '/akademi/sinavlar', query: { exam: `${item}`}}} as={`/akademi/sinavlar/${item}`}>
const Destec = ({getInitExam, auth, contents}) => {
  useEffect(() => {
    getInitExam()
      }, [])
  return (
    <React.Fragment>
      <Breadcrum
        items={[
          { url: "/akademi", text: "Akademi" },
          { url: "/akademi/sinavlar", text: "Sınavlar" },
          // {
          //   url: "/akademi/sinavlar/destec",
          //   text: "Destek ve Direnç Seviyeleri",
          // },
        ]}
      />
      <ContentContainer>
      {
        contents && Object.keys(contents).map((item,key)=>(
          <Wrapper key={key}>
          <LeftSide>
            <SecondaryTitle>{item}</SecondaryTitle>
            <Paragraph style={{ margin: "3.2rem 0 4.8rem 0" }}>
              {contents[item].exam_detail}
            </Paragraph>
           <Link href={`/akademi/sinavlar/${item}`}>
            <PurpleButton
              title={
                <>
                  Sınavı Başlat
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    style={{ marginLeft: "1rem" }}
                  >
                    <path d="M0 8L15 8" stroke="#F3F3F5" strokeWidth="1.5" />
                    <path
                      d="M8 1L15 8L8 15"
                      stroke="#F3F3F5"
                      strokeWidth="1.5"
                    />
                  </svg>
                </>
              }
            />
           </Link>
          </LeftSide>
          <img src={DestecIll} alt="" />
        </Wrapper>
          ))
      }
        
      </ContentContainer>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 111.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8rem;
`;

const LeftSide = styled.div`
  width: 38.6rem;
`;
const mapStateToProps = state=>({
  auth: state.auth,
  contents: state.exams.contents
});
const mapDispatchToProps = dispatch => {
  return {
    getInitExam: ()=> dispatch(getInitExam())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Destec);

