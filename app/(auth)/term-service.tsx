import { MainWrap, Container, StyledButton, ButtonText } from "../(auth)/intro";
import { 
  BackButton, 
  BackButtonIcon, 
  HeaderTxtWrap, 
  HeaderTitle, 
  SubHeaderTitle, 
  Checkbox } from "./login";
import { StyledCheckboxContainer, Button } from "./create-account";
import React, { useState } from 'react'
import { useRouter } from "expo-router";
import styled from "styled-components/native";
import { Check } from "lucide-react-native";

const StyledSubHeaderTitle = styled(SubHeaderTitle)`
  margin-top: 5%;
  font-size: 18px;
  font-family: Aeonik-bold;
  font-weight: 500;
  line-height: 24px;
  color: #565560;
`
const MainTxt = styled.Text`
   margin-top: 5%;
   font-size: 15px;
   font-family: Aeonik-regular;
   line-height: 25px;
   color: #717171;
`
const LabelTxt = styled.Text`
   font-size: 15px;
   color: #82808F;
   font-family: Aeonik-regular;
`
const CheckboxContainer = styled(StyledCheckboxContainer)`
   margin-top: 6%;
   margin-bottom: 12%;
   gap: 15px;
`

export default function TermService() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  return (
    <MainWrap>
      <Container>
        <BackButton onPress={() => router.back()}>
          <BackButtonIcon source={require('./../../assets/images/back-button.png')} />
        </BackButton>
        <HeaderTxtWrap>
          <HeaderTitle>Terms of service</HeaderTitle>
          <StyledSubHeaderTitle>To continue, please accept our terms of service</StyledSubHeaderTitle>
        </HeaderTxtWrap>
        <MainTxt>Sample: If you're not old enough to manage your own Google Account, you need permission from your parent or legal guardian to use one. We ask that your parent or legal guardian read these terms with you.{"\n"} 
        If you're a parent or legal guardian and you give permission for your child to use our services, then these terms apply to you. You're responsible for your child's activity on our services.{"\n"} 
        Please note that some Google services may have additional age requirements outlined in their service-specific additional terms and policies.</MainTxt>
        <CheckboxContainer>
          <Button onPress={() => setChecked(!checked)}>
            <Checkbox style={{ backgroundColor: checked ? "#16a34a" : "transparent" }}>
              {checked && <Check size={17} color="white" />}
            </Checkbox>
          </Button>
          <LabelTxt>I agree with all terms of service</LabelTxt>
        </CheckboxContainer>
        <StyledButton>
          <ButtonText>Agree</ButtonText>
        </StyledButton>
      </Container>
    </MainWrap>
  )
}