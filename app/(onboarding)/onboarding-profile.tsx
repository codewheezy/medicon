import { View, Text } from 'react-native'
import { MainWrap, Container, StyledButton, ButtonText } from "../(auth)/intro"
import React from 'react'
import styled from "styled-components/native"

const ProfileTitle = styled.Text`
  font-size: 24px;
  font-family: Nohemi-Bold;
  color: #161518;
`
const SubProfileTxt = styled.Text`
  color: #82808F;
  font-size: 16px;
  font-family: Aeonik-regular;
`
export default function OnboardingProfile() {
  return (
    <MainWrap>
        <Container>
            <ProfileTitle>Welcome  Dr. Chioma</ProfileTitle>
            <SubProfileTxt>Click continue to proceed</SubProfileTxt>
        </Container>
    </MainWrap>
  )
}