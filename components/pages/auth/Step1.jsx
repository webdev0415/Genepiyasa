import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GreenButton from "../../utility/GreenButton";
import isEmail from "validator/lib/isEmail";
import TextInput from "../../utility/TextInput";
import {connect} from "react-redux";
import {signupCacheUser} from "../../../store/action/actions.js"
import TypoBtn from "../../utility/TypoBtn";

const Step1 = ({ setStep, signupCacheUser, errors }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    signupCacheUser(step1data)
    setStep(2);
  };
  const [step1data, setStep1data] = useState({});
  const [activeButton, setActiveButton] = useState(false);
  const [emailFlag, setEmailFlag] = useState(false);
  const [passwordConf, setPasswordConf] = useState(false);
  const [requiredFlag, setRequiredFlag] = useState(false)
  const handleChange = (e) => {
    e.preventDefault();
    const key = e.target.id
    const value = e.target.value
    if (key == "email") {
      if (isEmail(value)) {
        step1data[key] = value
        setEmailFlag(false)
      } else {
        setEmailFlag(true)
      }
    } else if (key == "password1") {
      step1data.password1 = value
      if (step1data.password2 == value) {
        setPasswordConf(false)
      } else {
        setPasswordConf(true)
      }
    } else if (key == "password2") {
      step1data.password2 = value
      if (step1data.password1 == value) {
        setPasswordConf(false)
      } else {
        setPasswordConf(true)
      }
    }
    else {
      step1data[key] = value
    }
  }
  useEffect(() => {
        if (!emailFlag && !passwordConf) {
          setActiveButton(false)
        } else {
          setActiveButton(true)
        }
      }, [emailFlag, passwordConf])
  return (
    <SignUpForm onSubmit={handleSubmit}>
      <InputsContainer>
        <TextInput icon="user" label="KULLANICI ADI OLUŞTURUN" id="username" onChange={handleChange}  required={requiredFlag}/>
        <WarnningText>{errors && errors.username}</WarnningText>
        <TextInput icon="email" label="MAİL ADRESİNİZ NEDİR?" error={emailFlag} id="email" onChange={handleChange} required={requiredFlag}/>
        <WarnningText>{errors && errors.email}</WarnningText>
        <TextInput type="password" icon="password" label="ŞİFRENİZİ GİRİNİZ" error={passwordConf} id="password1" onChange={handleChange} required={requiredFlag}/>
        <WarnningText>{errors && errors.password1}</WarnningText>
        <TextInput type="password" icon="password" label="ŞİFRENİZİ GİRİNİZ (TEKRAR)" error={passwordConf} id="password2" onChange={handleChange} required={requiredFlag}/>
        <WarnningText>{errors && errors.password2}</WarnningText>
      </InputsContainer>

      <TypoBtn title="Devam Et" disabled={false}/>
    </SignUpForm>
  );
};
const WarnningText = styled.p`
  color: red;
  font-size: 1.5rem;
`
const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputsContainer = styled.div`
  margin: 4.8rem 0;
  align-self: stretch;
`;
// const mapStateToProps = state => {
//   return {
//     auth: state.auth,
//     errors: state.errors
//   }
// }
const mapStateToProps = state => {
  return {
    errors: state.errors
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signupCacheUser: (a)=> dispatch(signupCacheUser(a))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Step1);
// export default Step1;
