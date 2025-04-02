import React, {useState, useRef} from 'react'
import styled from "styled-components/native";
import { useRouter } from "expo-router";
import { MainWrap, Container, StyledButton, ButtonText } from "../index";
import { 
    BackButton, 
    BackButtonIcon, 
    HeaderTxtWrap, 
    HeaderTitle, 
    SubHeaderTitle,
    FormWrap 
} from "./login";
import PhoneInput from 'react-native-phone-number-input';

const InputWrap = styled.View`
    align-items: center;
`;
  
const StyledPhoneInput = styled(PhoneInput).attrs({
    containerStyle: {
      width: "100%",
      height: 55,
      borderRadius: 10,
      backgroundColor: "#F8F9FD",
      borderWidth: 1,
      borderColor: "#00C853", // Green border
    },
    textContainerStyle: {
      backgroundColor: "transparent",
      borderRadius: 10,
    },
    codeTextStyle: {
      color: "#2B2A30",
      fontWeight: "bold",
    },
})``;


export default function SignUpNumber() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInputRef = useRef(null);

  return (
    <MainWrap>
      <Container>
        <BackButton onPress={() => router.back()}>
            <BackButtonIcon source={require('./../../assets/images/back-button.png')} />
        </BackButton>
        <HeaderTxtWrap>
            <HeaderTitle>Almost Done!</HeaderTitle>
            <SubHeaderTitle>Enter your phone number and we’ll text you a code to activate your account.</SubHeaderTitle>
        </HeaderTxtWrap>
        <FormWrap>
            {/* <InputWrap>
            <StyledPhoneInput
                ref={phoneInputRef}
                defaultValue={phoneNumber}
                defaultCode="US"
                layout="first"
                onChangeText={(text) => {
                    setPhoneNumber(text);
                }}
                withShadow
                autoFocus
            />
            </InputWrap> */}
        </FormWrap>
      </Container>
    </MainWrap>
  )
}