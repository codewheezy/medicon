import React, {useState} from 'react';
import { MainWrap, Container, StyledButton, ButtonText } from "../index";
import { BackButton, 
  BackButtonIcon, 
  HeaderTxtWrap, 
  HeaderTitle, 
  SubHeaderTitle, 
  FormWrap,  
  Checkbox, 
  IDonthaveAccWrap,
  IDonthaveAccInnerWrap,
  IDonthaveAccTxt,
  IDonthaveAccBorder,
  CreateAccTxtBtn,
  CreateAccTxt
} from "./login"
import { Input } from "@/components/input";
import CustomDropdown from "@/components/custom-Dropdown";
import CustomDatePicker from '@/components/custom-datepicker';
import styled from "styled-components/native";
import { useRouter } from "expo-router";
import { Check } from "lucide-react-native";

export const StyledCheckboxContainer = styled.View`
   align-items: center;
   flex-direction: row;
   margin-bottom: 8px;
   gap: 8px;
`
const StyledIDonthaveAccWrap = styled(IDonthaveAccWrap)`
  margin-top: 7%;
`
const TermsTxtWrap = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 8px;
`
const TermsInnerTxtWrap = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
`
const RegularText = styled.Text`
  font-size: 14px;
  color: #B1B0B9;
`
export const Button = styled.TouchableOpacity``
const LinkText = styled.Text<{ right?: boolean; left?: boolean}>`
  font-size: 14px;
  color: #5FD148;
  margin-right: ${(props) => (props.right ? '2px': '0px')};
  margin-left: ${(props) => (props.left ? '2px': '0px')};
`

export default function createAccount() {
  const router = useRouter();
  const genderData = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];
  const [genderValue, setGenderValue] = useState(genderData[0].value);
  const [checked, setChecked] = useState(false);
  return (
    <MainWrap>
      <Container>
        <BackButton onPress={() => router.back()}>
          <BackButtonIcon source={require('./../../assets/images/back-button.png')} />
        </BackButton>
        <HeaderTxtWrap>
            <HeaderTitle>Create a new account</HeaderTitle>
            <SubHeaderTitle>Fund your wallet, pay for services and manage your payments in one place</SubHeaderTitle>
        </HeaderTxtWrap>
        <FormWrap>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <CustomDropdown 
            placeholder="Select Gender" 
            data={genderData} 
            setValue={setGenderValue}
            value={genderValue} 
          />
          <CustomDatePicker />
          <Input placeholder="Email Address" />
          <Input placeholder="Password" secureTextEntry />
          <Input placeholder="Confirm Password" secureTextEntry />
          <StyledCheckboxContainer>
            <Button onPress={() => setChecked(!checked)}>
              <Checkbox style={{ backgroundColor: checked ? "#16a34a" : "transparent" }}>
                {checked && <Check size={17} color="white" />}
              </Checkbox>
            </Button>
            <TermsTxtWrap>
              <RegularText>By creating an account, you agree to our?</RegularText>
              <TermsInnerTxtWrap>
                <Button onPress={() =>router.push('/auth/term-service')}>
                  <LinkText right>User Agreement and</LinkText>
                </Button><RegularText>Terms</RegularText>
                <Button onPress={() =>router.push('/auth/term-service')}>
                  <LinkText left>& Conditions</LinkText>
                </Button>
              </TermsInnerTxtWrap>
            </TermsTxtWrap>
          </StyledCheckboxContainer>
          <StyledButton>
            <ButtonText>Create new account</ButtonText>
          </StyledButton>
          <StyledIDonthaveAccWrap>
            <IDonthaveAccInnerWrap>
              <IDonthaveAccTxt>Already have an account?</IDonthaveAccTxt>
              <IDonthaveAccBorder />
            </IDonthaveAccInnerWrap>
            <CreateAccTxtBtn onPress={() => router.push('/auth/login')}>
              <CreateAccTxt>Sign in</CreateAccTxt>
            </CreateAccTxtBtn>
          </StyledIDonthaveAccWrap>
        </FormWrap>
      </Container>
    </MainWrap>
  )
}