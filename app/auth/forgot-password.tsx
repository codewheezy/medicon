import React, {useRef, useState} from 'react'
import { useRouter } from "expo-router";
import { MainWrap, Container, StyledButton, ButtonText } from "../index";
import { BackButton, BackButtonIcon, HeaderTxtWrap, HeaderTitle, SubHeaderTitle, FormWrap } from "./login";
import styled from "styled-components/native";
import { Input } from "@/components/input";
import OTPTextInput from 'react-native-otp-textinput';

const EmailTxt = styled.Text`
  font-size: 16px;
  color: #161518;
  font-family: Aeonik-regular;
`
const OTPTextInputWrap = styled.View`
  margin-bottom: 10px;
`

export default function ForgotPassword() {
  const router = useRouter();
  const otpInputRef = useRef<any>(null);  
  const [step, setStep] = useState(2);
  return (
    <MainWrap>
      <Container>
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
                    <StyledButton>
                        <ButtonText>Send reset code</ButtonText>
                    </StyledButton>
                </FormWrap>
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
                <StyledButton>
                    <ButtonText>Verify</ButtonText>
                </StyledButton>
            </FormWrap>
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
                <StyledButton>
                    <ButtonText>Create New Password</ButtonText>
                </StyledButton>
            </FormWrap>
            </>
        )}
      </Container>
    </MainWrap>
  )
}