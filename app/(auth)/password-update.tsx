import { MainWrap, Container, StyledButton, ButtonText } from "../(auth)/intro";
import React from 'react';
import styled from "styled-components/native";
import { useRouter } from "expo-router";

export const CancelButton = styled.TouchableOpacity``
export const CancelIcon = styled.Image`
  height: 24px;
  width: 24px;
`
export const MainContentWrap = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const IllustrationImage = styled.Image``
export const IllustrationTitle = styled.Text`
  font-size: 24px;
  color: #0F172A;
  font-family: Nohemi-Bold;
`
export const IllustrationSubTitle = styled.Text`
  margin-top: 4%;
  font-size: 16px;
  color: #82808F;
  font-family: Aeonik-regular;
  text-align: center;
  width: 80%;
`

export default function PasswordUpdate() {
  const router = useRouter();
  return (
    <MainWrap>
      <Container>
        <CancelButton onPress={() => router.back()}>
            <CancelIcon source={require('./../../assets/images/cancel-icon.png')} />
        </CancelButton>
        <MainContentWrap>
            <IllustrationImage source={require('./../../assets/images/password-update-Illustration.png')} />
            <IllustrationTitle>Password Updated!</IllustrationTitle>
            <IllustrationSubTitle>Your password has been set up successfully.</IllustrationSubTitle>
            <StyledButton onPress={() => router.push('/(auth)/login')}>
                <ButtonText>Proceed to Sign in</ButtonText>
            </StyledButton>
        </MainContentWrap>
      </Container>
    </MainWrap>
  )
}