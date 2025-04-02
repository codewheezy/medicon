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
import PhoneInput from "react-native-phone-number-input";



export default function SignUpNumber() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");

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
        </FormWrap>
      </Container>
    </MainWrap>
  )
}