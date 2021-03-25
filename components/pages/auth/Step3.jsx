import React, {useState, useEffect} from "react";
import styled from "styled-components";
import GreenButton from "../../utility/GreenButton";
import TextInput from "../../utility/TextInput";
import Checkbox from "../../utility/Checkbox";
import Link from "next/link";
import {connect} from "react-redux"
import {signupUser} from "../../../store/action/actions.js"
import Router from 'next/router'
import CircularProgress from '@material-ui/core/CircularProgress';

const Step3 = ({ setStep, setMessage, userData, signupUser, history }) => {
  const [check, setCheck] = useState(false)
  const [requiredFlag, setRequiredFlag] = useState(false)
  const [step3data, setStep3data] = useState({});
  // const [msgflag, setMsgflag] = useState(message)
  const [btnval, setBtnval] = useState("Devam Et")
  // useEffect(()=> {
  //   if (msgflag) {
  //     setBtnval("Devam Et")
  //   }
  // }, [msgflag])
  const handleSubmit = (e) => {
    e.preventDefault();
    let signUserData = userData.chacheUser
    let signProfileData = {}
    // signUserData = userData.cacheUser;
    signProfileData.interests = userData.interests.join("\n");
    signProfileData.talent = userData.talent.join("\n");
    signProfileData = {...signProfileData, ...step3data}
    signupUser(signUserData, signProfileData, setStep, setMessage)
    setBtnval(<CircularProgress />)
  };
  const handleChange = (e) => {
    e.preventDefault();
    const key = e.target.id
    const value = e.target.value
    step3data[key] = value
  }
  const handleClick = e => {
    // e.preventDefault();
    setCheck(!check);
  }

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <InputsContainer>
        <TextInput icon="telegram" id="telegram" label="TELEGRAM ADRESİNİZ NEDİR?" onChange={handleChange} required={requiredFlag}/>
        <TextInput icon="twitter" id="twitter" label="TWİTTER ADRESİNİZ NEDİR?" onChange={handleChange} required={requiredFlag}/>
        <TextInput
          id="birthdate"
          type="date"
          icon="birthdate"
          label="DOĞUM GÜNÜNÜZ (GÜN-AY-YIL)"
          onChange={handleChange}
          required={requiredFlag}
        />
        <TextInput id="hearfrom" icon="hearfrom" label="BİZİ NEREDEN DUYDUNUZ?" onChange={handleChange} required={requiredFlag}/>
        <TextInput id="smiley" icon="smiley" label="KİM REFERANS OLDU?" onChange={handleChange} required={requiredFlag}/>
        <AgreementWrapper>
          <Checkbox checked={check} onChange={e=>handleCheckChange(e)} onClick={e => handleClick()} />
          <Agreement>
            <Link href="/agreement">
              <AgreementLink>Gizlilik sözleşmesini </AgreementLink>
            </Link>
            okudum ve kabul ediyorum.
          </Agreement>
        </AgreementWrapper>
      </InputsContainer>
      <span className='spinner-border text-primary'></span>
      <GreenButton title={btnval} disabled={!check} />
    </SignUpForm>
  );
};

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputsContainer = styled.div`
  margin: 4.8rem 0;
  align-self: stretch;
`;

const AgreementWrapper = styled.div`
  display: flex;
`;

const Agreement = styled.span`
  color: ${({ theme }) => theme.inputLabelColor};
  font-size: 1.4rem;
  line-height: 1.6rem;
  text-decoration-line: underline;
`;

const AgreementLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.titleColor};
  text-decoration-line: underline;
  cursor: pointer;
`;
const mapStateToProps = state => {
  return {
    userData: state.cacheUser
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signupUser: (a, b, c, d)=> dispatch(signupUser(a, b, c, d))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Step3);
// export default Step3;
