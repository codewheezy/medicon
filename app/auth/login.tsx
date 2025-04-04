import React, {useState} from 'react';
import { MainWrap, Container, StyledButton, ButtonText } from "./../index";
import { useRouter } from "expo-router";
import styled from "styled-components/native";
import { Input } from "@/components/input";
import { Check } from "lucide-react-native";

// export const KeyboardAvoidingView = styled.KeyboardAvoidingView`` 
export const BackButton = styled.TouchableOpacity`
  margin-top: 5%;
`
export const BackButtonIcon = styled.Image`
  width: 24px;
  height: 24px;
`
export const HeaderTxtWrap = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 6%;
`
export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-family: Nohemi-SemiBold;
  margin-bottom: 8px;
  color: #161518;
`
export const SubHeaderTitle = styled.Text`
   font-size: 16px;
   font-family: Aeonik-regular;
   color: #82808F;
   line-height: 20px;
`
export const FormWrap = styled.ScrollView`
   display: flex;
   flex: 1;
   flex-direction: column;
   margin-top: 7%;
`
export const FrogetPasswordWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 3px;
  margin-bottom: 4%;
`
export const CheckboxContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Checkbox = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 6px;
  border: 1px solid #E2E8F0;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
  font-size: 14px;
  color: #0F172A;
`;
const WrapPassword = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
`
const TxtForgotPassword = styled.Text`
  font-size: 14px;
  color: #5FD148;
  font-family: Aeonik-regular;
`
const UnderLineForgotPassword = styled.View`
  border: 1px solid #5FD148;
  width: 100%;
`
const SignWithOtherAcc = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
  margin-bottom: 8%;
`
const BorderLine = styled.View`
  width: 44px;
  border: 1px solid #E2E8F0;
`
const TxtSignWithOtherAcc = styled.Text`
  font-size: 12px;
  color: #64748B;
  margin: 0px 10px;
`
const BorderBtnWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const BorderBtn = styled.TouchableOpacity`
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 47%;
  border: 1px solid #E2E8F0;
`
const BorderBtnImg = styled.Image`
  width: 24px;
  height: 24px;
`
const BorderBtnTxt = styled.Text`
  font-size: 16px;
  color: #0F172A;
  font-family: Aeonik-bold;
  margin-left: 10px;
`
export const IDonthaveAccWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
`
export const IDonthaveAccInnerWrap = styled.View`
  display: flex;
  flex-direction: column;
`
export const IDonthaveAccBorder = styled.View`
  border: 1px solid #82808F;
`
export const IDonthaveAccTxt = styled.Text`
  font-size: 14px;
  color: #82808F;
  font-family: Aeonik-regular;
`
export const CreateAccTxtBtn = styled.TouchableOpacity``
export const CreateAccTxt = styled.Text`
  font-size: 14px;
  color: #161518;
  font-family: Aeonik-bold;
  margin-left: 4px;
`


export default function Login() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  return (
    <MainWrap>
      <Container>
        <BackButton onPress={() => router.back()}>
            <BackButtonIcon source={require('./../../assets/images/back-button.png')} />
        </BackButton>
        <HeaderTxtWrap>
            <HeaderTitle>Welcome back</HeaderTitle>
            <SubHeaderTitle>Fill in your details or continue with your social handles</SubHeaderTitle>
        </HeaderTxtWrap>
        <FormWrap>
          <Input placeholder="Email" />
          <Input placeholder="Password" secureTextEntry />
          <FrogetPasswordWrap>
            <CheckboxContainer onPress={() => setChecked(!checked)}>
              <Checkbox style={{ backgroundColor: checked ? "#16a34a" : "transparent" }}>
                {checked && <Check size={17} color="white" />}
              </Checkbox>
              <Label>Remember me</Label>
            </CheckboxContainer>
            <WrapPassword onPress={() => router.push('/auth/forgot-password')}>
              <TxtForgotPassword>Forgot Password?</TxtForgotPassword>
              <UnderLineForgotPassword />
            </WrapPassword>
          </FrogetPasswordWrap>
          <StyledButton onPress={() => router.push('/auth/sign-up-number')}>
            <ButtonText>Sign in</ButtonText>
          </StyledButton>
          <SignWithOtherAcc>
            <BorderLine />
            <TxtSignWithOtherAcc>Or sign in with</TxtSignWithOtherAcc>
            <BorderLine />
          </SignWithOtherAcc>
          <BorderBtnWrap>
            <BorderBtn>
              <BorderBtnImg source={require('./../../assets/images/facebook.png')} />
              <BorderBtnTxt>Facebook</BorderBtnTxt>
            </BorderBtn>
            <BorderBtn>
              <BorderBtnImg source={require('./../../assets/images/Google.png')} />
              <BorderBtnTxt>Google</BorderBtnTxt>
            </BorderBtn>
          </BorderBtnWrap>
          <IDonthaveAccWrap>
            <IDonthaveAccInnerWrap>
              <IDonthaveAccTxt>Don't have an account?</IDonthaveAccTxt>
              <IDonthaveAccBorder />
            </IDonthaveAccInnerWrap>
            <CreateAccTxtBtn onPress={() => router.push('/auth/create-account')}>
              <CreateAccTxt>Create account</CreateAccTxt>
            </CreateAccTxtBtn>
          </IDonthaveAccWrap>
        </FormWrap>
      </Container>
    </MainWrap>
  )
}