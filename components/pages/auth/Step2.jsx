import React, {useState, useRef} from "react";
import styled from "styled-components";
import GreenButton from "../../utility/GreenButton";
import ChipSelect from "../../utility/ChipSelect";

const Step2 = ({ setStep }) => {
  const interestVal = useRef();
  const talentVal = useRef();
  const [renderFlag, setRenderFlag] = useState(false);
  const handleSubmit = () => {
    

    setRenderFlag(!renderFlag)
    setStep(3);
  };

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <InputsContainer>
        <ChipSelect
          icon="interests"
          label="İLGİLENDİĞİNİZ PİYASALAR NEDİR?"
          value={[]}
          options={[
            "Forex",
            "Tahvil/Bono",
            "Emtia",
            "Varant",
            "Hisse Senetleri",
            "Kripto Paralar",
          ]}
        />
        <ChipSelect
          value={[]}
          valid={true}
          options={[
            "Algoritmik Ticaret",
            "Dalga Analizi",
            "Varant",
            "Hisse Senetleri",
            "Kripto Paralar",
          ]}
          icon="talent"
          label="YETENEKLERİNİZ NELER?"
        />
      </InputsContainer>
      <GreenButton title="Devam Et" disabled={false} />
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

export default Step2;
