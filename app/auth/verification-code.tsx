import React, {useRef, useState} from 'react';
import { MainWrap, Container, StyledButton, ButtonText } from "../index";
import { BackButton, BackButtonIcon, HeaderTxtWrap, HeaderTitle, SubHeaderTitle, FormWrap } from "./login";
import styled from "styled-components/native";
import OTPTextInput from 'react-native-otp-textinput';
import { useRouter } from "expo-router";
import { OTPTextInputWrap } from "./forgot-password";
import { BottomButtonWrapper, KeyboardAvoidingViewWrapper } from "./sign-up-number";
import { Platform } from "react-native";
import SuccessModal from "@/components/custom-modal";

const UseDifferentBtn = styled.TouchableOpacity``
const UseDifferentTxt = styled.Text`
  font-size: 15px;
  color: #2B2A30;
  font-family: Aeonik-regular;
`
const ButtonWrap = styled(BottomButtonWrapper)`
   dispaly:flex;
   flex-direction: column;
   gap: 16px;
`
const GrayButton = styled.TouchableOpacity`
  background-color: #F8F5FF;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  align-items: center;
`
const GrayButtonTxt = styled.Text`
   color: #5FD148;
   font-size: 16px;
   font-family: Aeonik-bold;
`


export default function VerificationCode() {
    const router = useRouter();
    const otpInputRef = useRef<any>(null);
    const [modalVisible, setModalVisible] = useState(false)
    return(
        <MainWrap>
            <Container>
                <KeyboardAvoidingViewWrapper 
                    behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        <BackButton onPress={() => router.back()}>
                            <BackButtonIcon source={require('./../../assets/images/back-button.png')} />
                        </BackButton>
                        <HeaderTxtWrap>
                            <HeaderTitle>Authentication Code</HeaderTitle>
                            <SubHeaderTitle>Enter 5-digit code we just texted to your phone number, +234 8976889043</SubHeaderTitle>
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
                            <UseDifferentBtn onPress={() => router.back()}>
                                <UseDifferentTxt>Use different phone number</UseDifferentTxt>
                            </UseDifferentBtn>
                        </FormWrap>
                        <ButtonWrap>
                            <StyledButton onPress={() => setModalVisible(true)}>
                                <ButtonText>Continue</ButtonText>
                            </StyledButton>
                            <GrayButton>
                                <GrayButtonTxt>Resend Code</GrayButtonTxt>
                            </GrayButton>
                        </ButtonWrap>
                        <SuccessModal 
                            visible={modalVisible} 
                            onClose={() => setModalVisible(false)} 
                            title="Success"
                            message="Your account has been successfully confirmed, proceed to sign in."
                            buttonText="Proceed to Sign in"
                            />
                </KeyboardAvoidingViewWrapper>
            </Container>
        </MainWrap>
    )
}