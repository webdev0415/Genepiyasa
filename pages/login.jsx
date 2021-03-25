import React, {useState, useEffect} from "react";
import LoginSVG from "./../rawSvg/login.svg";
import { Wrapper, ContentContainer } from "../components/layout";
import styled from "styled-components";
import H3Medium from "../components/typography/H3Medium";
import TextInput from "../components/utility/TextInput";
import GreenButton from "../components/utility/GreenButton";
import Checkbox from "../components/utility/Checkbox";
import Link from "next/link";
import isEmail from "validator/lib/isEmail";
import {loginUser, setCurrentUser} from "../store/action/actions.js"
import {connect} from "react-redux"
import Notifications, {notify} from 'react-notify-toast'
import jwt_decode from "jwt-decode";
import setAuthToken from '../utils/setAuthToken'
import Router from 'next/router'
import TypoBtn from "../components/utility/TypoBtn";



const Login = ({auth, errors, loginUser, setCurrentUser}) => {
  const [check, setCheck] = useState(false)
  const [requiredFlag, setRequiredFlag] = useState(true)
  const [userData, setUserData] = useState({})
  const [emailFlag, setEmailFlag] = useState(false);
  const [message, setMessage] = useState("")
  if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  console.log("token", token)
  setAuthToken(token);

  const decoded = jwt_decode(token);
  console.log("decoded", decoded)
  setCurrentUser(decoded)   
}
  useEffect(() => {
      if (message) {
        notify.show(message)
        }
      // const payload = localStorage.getItem('jwtToken')
      // if (payload) {
      //   setAuthToken(payload)
      //   const decoded = jwt_decode(payload)
      //   setCurrentUser(decoded)
      // }
      }, [message])
  useEffect(() => {
      // const payload = localStorage.getItem('jwtToken')
      // if (payload) {
      //   setAuthToken(payload)
      //   const decoded = jwt_decode(payload)
      //   setCurrentUser(decoded)
      // }
      if (auth.isAuthenticated) {
      Router.push('/main')
      }
      }, [auth])
      
  const handleChange = (e) => {
    e.preventDefault();
    const key = e.target.id;
    const value = e.target.value;
    if (key == "email") {
      if (isEmail(value)) {
        userData[key] = value;
        setEmailFlag(false)
      } else {
        setEmailFlag(true)
      }
    } else {
      userData[key] = value;
    }
    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(userData, setMessage)
  }
  return (
    <ContentContainer>
    <Notifications />
      <Wrapper>
        <LoginContainer>
          <H3Medium>Giriş Yap</H3Medium>
          <LoginForm onSubmit={handleSubmit}>
            <InputsContainer>
              <TextInput icon="email" label="MAİL ADRESİNİZ NEDİR?" id="email" error={emailFlag} onChange={handleChange} required={requiredFlag}/>
              <TextInput type="password" icon="password" label="ŞİFRE" id="password" onChange={handleChange} required={requiredFlag}/>
              <OtherOptions>
                <Checkbox onClick={e => setCheck(!check)} checked={check} label="Oturumumu açık tut"  onChange={e=>handleCheckChange(e)}/>
                <Link href="#">
                  <ForgotPassword>Şifremi unuttum?</ForgotPassword>
                </Link>
              </OtherOptions>
            </InputsContainer>
            <TypoBtn title="Giriş Yap" disabled={false}/>
          </LoginForm>
          <SwitchAuth>
            Kayıtlı bir hesabın yok mu?{" "}
            <Link href="/signup">
              <Action titleColor>Hemen Kayıt Ol!</Action>
            </Link>
          </SwitchAuth>
        </LoginContainer>
        <LoginImage src={LoginSVG} />
      </Wrapper>
    </ContentContainer>
  );
};

const LoginContainer = styled.div`
  width: 36rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputsContainer = styled.div`
  margin: 4.8rem 0;
  align-self: stretch;
`;

const OtherOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ForgotPassword = styled.a`
  text-decoration: none;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ theme, titleColor }) =>
    titleColor ? theme.titleColor : theme.inputLabelColor};
  text-decoration-line: underline;
  cursor: pointer;
`;

const LoginImage = styled.img`
  max-height: 82.8rem;
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
//     userData: state.cacheUser
//   }
// }
const mapStateToProps = state=>({
  auth: state.auth,
  errors: state.errors
});
const mapDispatchToProps = dispatch => {
  return {
    loginUser: (a, b)=> dispatch(loginUser(a, b)),
    setCurrentUser: (a)=> dispatch(setCurrentUser(a)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
