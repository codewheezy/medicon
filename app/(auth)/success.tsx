import React from 'react';
import { 
    IllustrationImage, 
    IllustrationTitle, 
    IllustrationSubTitle, 
    CancelButton,
    CancelIcon,
    MainContentWrap
 } from "./password-update";
import {MainWrap, Container, StyledButton, ButtonText} from '../(auth)/intro'
import styled from "styled-components/native";
import { useRouter } from "expo-router";

export default function Success() {
  const router = useRouter();
  return (
    <MainWrap>
      <Container>
        <CancelButton onPress={() => router.back()}>
            <CancelIcon source={require('./../../assets/images/cancel-icon.png')} />
        </CancelButton>
        <MainContentWrap>
            <IllustrationImage source={require('./../../assets/images/password-update-Illustration.png')} />
            <IllustrationTitle>Success</IllustrationTitle>
            <IllustrationSubTitle>Your account has been successfully confirmed, proceed to sign in.</IllustrationSubTitle>
            <StyledButton>
                <ButtonText>Proceed to verification</ButtonText>
            </StyledButton>
        </MainContentWrap>
      </Container>
    </MainWrap>
  )
}