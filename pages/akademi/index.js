import React,{useEffect, useState} from "react";
import Breadcrum from "../../components/utility/Breadcrum";
import { ContentContainer, Wrapper } from "../../components/layout";

import PageTitle from "./../../components/typography/PageTitle";
import styled from "styled-components";
import GreenButton from "../../components/utility/GreenButton";
import Link from "next/link";
import Forex from "./../../rawSvg/forex.svg";
import Kripto from "./../../rawSvg/kripto.svg";
import Borsa from "./../../rawSvg/borsa.svg";
import Araclar from "./../../rawSvg/araclar.svg";
import {getInitData} from "../../store/action/actions.js"
import {connect} from 'react-redux'
import TypoBtn from "../../components/utility/TypoBtn";
const AkademiOzet = ({getInitData, auth, contents}) => {
  useEffect(() => {
    getInitData()
      }, [])
  return (
    <React.Fragment>
      <Breadcrum
        items={[
          { url: "/akademi", text: "Akademi" },
        ]}
      />
      <ContentContainer>
        <Wrapper style={{ flexDirection: "column", alignItems: "stretch" }}>
          <PageTitle>Akademi</PageTitle>
          <Content>
            { Object.keys(contents).map((item, index)=> {
              // let left
              //   if (index%2 == 1) {
              //     left = false
              //   } else {
              //     left = true
              //   }
                // console.log("index,", index, "left", left)
                return(
                  <Section key={index}>
                     <div>
                      <SectionTitle>{item}</SectionTitle>
                      <Description>
                        {contents[item].course_detail}
                        <br />
                        <br />
                        <Link href={`akademi/kurslar/${item}`}>
                        <TypoBtn style={{display: 'initial'}} disabled={false}  title="İncele" />
                      </Link>
                      </Description>
                      
                    </div>
                    <div>
                      <CourseImg src={ "/svgs/" + contents[item].svg_name} alt="Course Image" />
                    </div>
                          
                  </Section>
                  // <div key={index}>
                  //   { left && (
                  //       <Section>
                  //         <div>
                  //           <img src={Forex} alt="" />
                  //         </div>
                  //         <div>
                  //           <SectionTitle>{item}</SectionTitle>
                  //           <Description>
                  //             {contents[item].course_detail}
                  //           </Description>
                  //           <Link href={{ pathname: '/kurslar/forex/forex-ukulu', query: { course: `${item}`}}}>
                  //           <GreenButton title="İncele" />
                  //           </Link>
                  //         </div>
                  //       </Section>
                  //   )}
                  //   { !left && (
                  //       <Section>
                  //         <div>
                  //           <SectionTitle>{item}</SectionTitle>
                  //           <Description>
                  //            {contents[item].course_detail}
                  //           </Description>
                  //           <Link href={{ pathname: '/kurslar/forex/forex-ukulu', query: { course: `${item}`}}}>
                  //           <GreenButton title="İncele" />
                  //           </Link>
                  //         </div>
                  //         <div>
                  //           <img src={Kripto} alt="" />
                  //         </div>
                  //       </Section>
                  //   )}
                  // </div>
                  )
              })
            }
            {/*<Section>
              <div>
                <img src={Forex} alt="" />
              </div>
              <div>
                <SectionTitle>Forex</SectionTitle>
                <Description>
                  Herkes trendi görebilir fakat psikolojini ve riskini
                  yönetemiyorsan her trend senin için düşüş trendidir. Bunu
                  tersine çevirmek için finansal okur yazarlığını
                  geliştirmelisin. Bu bölümde............ konularını öğrenerek
                  kendi trendini yaratacaksın.
                </Description>
                <GreenButton title="İncele" />
              </div>
            </Section>
            <Section>
              <div>
                <SectionTitle>Kripto</SectionTitle>
                <Description>
                  Bu piyasanın bileni yok, fenomeni çok. Bu kurslar sayesinde
                  kripto paralara dair her şeyi A'dan Z'ye öğrenecek ve
                  kazanacaksın. Kim bilir belki de yeni fenomen sen olacaksın!
                </Description>
                <GreenButton title="İncele" />
              </div>
              <div>
                <img src={Kripto} alt="" />
              </div>
            </Section>
            <Section>
              <div>
                <img src={Borsa} alt="" />
              </div>
              <div>
                <SectionTitle>Borsa</SectionTitle>
                <Description>
                  Kimileri zengin oldu, kimileri battı. Peki sen hangi tarafta
                  olacaksın? Borsa üzerinde yatırımlarını doğru
                  değerlendirebilmek için öncelikle bu kursu alman gerek.
                  Borsadan zengin olmak mı? Hayal kurmadan önce gerçekleri
                  öğren!
                </Description>
                <GreenButton title="İncele" />
              </div>
            </Section>
            <Section>
              <div>
                <SectionTitle>İleri Düzey Türev Araçlar</SectionTitle>
                <Description>
                  Forward, futures, options ve swap işlemleri... Dur, yabancı
                  dil dersinde değilsin! Ekonominin gerçek dilini öğreneceksin.
                  Bu derslerden sonra Bloomberg'i açıp neler olduğunu
                  anlayabilirsin.
                </Description>
                <GreenButton title="İncele" />
              </div>
              <div>
                <img src={Araclar} alt="" />
              </div>
            </Section>*/}
          </Content>
        </Wrapper>
      </ContentContainer>
    </React.Fragment>
  );
};
const CourseImg = styled.img`
  width: 80%;
  height: 300px;
`
const Section = styled.section`
  align-items: center;
  padding: 10rem 0;
  text-align: center;

`;

const Content = styled.div`
  width: 100%;
  align-self: stretch;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;

`;

const SectionTitle = styled.h2`
  font-weight: 500;
  font-size: 4.8rem;
  line-height: 6rem;
  color: ${({ theme }) => theme.titleColor};
  letter-spacing: -0.05em;
`;

const Description = styled.div`
  text-align: center;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.6rem;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.paragraphText};
  margin-top: 1.6rem;
  margin-bottom: 4.8rem;
`;
const mapStateToProps = state=>({
  auth: state.auth,
  contents: state.courseContents.contents
});
const mapDispatchToProps = dispatch => {
  return {
    getInitData: ()=> dispatch(getInitData())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AkademiOzet);
// export default AkademiOzet;
