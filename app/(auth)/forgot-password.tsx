import React, {useRef, useState} from 'react'
import { useRouter } from "expo-router";
import { MainWrap, Container, StyledButton, ButtonText } from "../(auth)/intro";
import { BackButton, BackButtonIcon, HeaderTxtWrap, HeaderTitle, SubHeaderTitle, FormWrap } from "./login";
import styled from "styled-components/native";
import { Input } from "@/components/input";
import OTPTextInput from 'react-native-otp-textinput';
import { KeyboardAvoidingViewWrapper, BottomButtonWrapper } from "./sign-up-number";
import { Platform } from "react-native";

const EmailTxt = styled.Text`
  font-size: 16px;
  color: #161518;
  font-family: Aeonik-regular;
`
export const OTPTextInputWrap = styled.View`
  margin-bottom: 10px;
`

export default function ForgotPassword() {
  const router = useRouter();
  const otpInputRef = useRef<any>(null);  
  const [step, setStep] = useState(1);
  return (
    <MainWrap>
      <Container>
        <KeyboardAvoidingViewWrapper
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <BackButton onPress={() => router.back()}>
            <BackButtonIcon source={require('./../../assets/images/back-button.png')} />
        </BackButton>
        {step === 1 && (
            <>
                <HeaderTxtWrap>
                    <HeaderTitle>Forgot your password ?</HeaderTitle>
                    <SubHeaderTitle>Type your email address and we will send the verification code.</SubHeaderTitle>
                </HeaderTxtWrap>
                <FormWrap>
                    <Input placeholder="helenasharapova@mail.com" />
                </FormWrap>
                <BottomButtonWrapper>
                    <StyledButton onPress={() => router.push('/(auth)/success')}>
                        <ButtonText>Send reset code</ButtonText>
                    </StyledButton>
                </BottomButtonWrapper>
            </>
        )}
        {step === 2 && (
            <>
            <HeaderTxtWrap>
                <HeaderTitle>Verify reset code</HeaderTitle>
                <SubHeaderTitle>Enter code that we have sent to your email </SubHeaderTitle>
                <EmailTxt>robert******o@email.com</EmailTxt>
            </HeaderTxtWrap>
            <FormWrap>
                <OTPTextInputWrap>
                    <OTPTextInput
                        ref={otpInputRef}
                        inputCount={5}
                        textInputStyle={{
                            borderWidth: 0,
                            borderBottomWidth: 0,
                            height: 55,
                            width: 55,
                            backgroundColor: '#F8F9FD',
                            borderRadius: 7,
                            shadowColor: '#fff',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.9,
                            shadowRadius: 2,
                            elevation: 2,
                        }}
                    />
                </OTPTextInputWrap>
            </FormWrap>
            <BottomButtonWrapper>
                <StyledButton>
                    <ButtonText>Verify</ButtonText>
                </StyledButton>
            </BottomButtonWrapper>
            </>
        )}
        {step === 3 &&(
            <>
            <HeaderTxtWrap>
                <HeaderTitle>Create New Password</HeaderTitle>
                <SubHeaderTitle>Your new password must different from previous password.</SubHeaderTitle>
            </HeaderTxtWrap>
            <FormWrap>
                <Input placeholder="Password" secureTextEntry />
                <Input placeholder="Confirm Password" secureTextEntry />
            </FormWrap>
            <BottomButtonWrapper>
                <StyledButton>
                    <ButtonText>Create New Password</ButtonText>
                </StyledButton>
            </BottomButtonWrapper>
            </>
        )}
        </KeyboardAvoidingViewWrapper>
      </Container>
    </MainWrap>
  )
}