import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
// import {connect} from "react-redux"
import { Wrapper, ContentContainer } from "../components/layout";
import H3Medium from "../components/typography/H3Medium";
import SignUpImage from "../components/pages/auth/SignUpImage";
import Step1 from "./../components/pages/auth/Step1";
import Step2 from "./../components/pages/auth/Step2";
import Step3 from "./../components/pages/auth/Step3";
import Notifications, {notify} from 'react-notify-toast'

const Signup = () => {
  const [step, setStep] = useState(1)
  const [renderFlag, setRenderFlag] = useState(false)
  const [message, setMessage] = useState("")
  useEffect(() => {
      if (message) {
        notify.show(message)
        }
      }, [message])
  const getForm = useCallback(() => {
    if (step === 1) {
      return <Step1 setStep={setStep} />;
    } else if (step === 2) {
      return <Step2 setStep={setStep} />;
    } else {
      return <Step3 setStep={setStep} setMessage={setMessage} />;
    }
  }, [step]);

  return (
    <ContentContainer>
      <Notifications />
      <Wrapper>
        <SignupContainer>
          <H3Medium>
            {step === 1
              ? "Kayıt Ol"
              : step === 2
              ? "İlgi Alanlarınız"
              : "Diğer Bilgiler"}
          </H3Medium>

          {getForm()}

          <SwitchAuth>
            Kayıtlı bir hesabın var mı?{" "}
            <Link href="/login">
              <Action titleColor>Giriş yap</Action>
            </Link>
          </SwitchAuth>
        </SignupContainer>
        <SignUpImage step={step} setStep={setStep} />
      </Wrapper>
    </ContentContainer>
  );
};

const SignupContainer = styled.div`
  width: 36rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

const SwitchAuth = styled.p`
  color: ${({ theme }) => theme.switchAuthTextColor};
  font-size: 1.4rem;
  line-height: 1.6rem;
  text-decoration-line: underline;
  margin-top: auto;
`;

const Action = styled.a`
  text-decoration: none;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.titleColor};
  text-decoration-line: underline;
  cursor: pointer;
`;
// const mapStateToProps = state => {
//   return {
//     message: state.auth.message
//   }
// }
// export default connect(mapStateToProps, null)(Signup);
export default Signup;
