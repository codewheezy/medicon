import React, {useState, useRef} from 'react'
import styled from "styled-components/native";
import { useRouter } from "expo-router";
import { MainWrap, Container, StyledButton, ButtonText } from "../(auth)/intro";
import { 
    BackButton, 
    BackButtonIcon, 
    HeaderTxtWrap, 
    HeaderTitle, 
    SubHeaderTitle,
    FormWrap 
} from "./login";
import { 
  Modal, 
  FlatList, 
  KeyboardAvoidingView, 
  Platform,
 } from 'react-native';

export const KeyboardAvoidingViewWrapper = styled(KeyboardAvoidingView)`
   flex: 1;
`
export const PhoneInputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20%;
`;
export const CountryPicker = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #F8F9FD;
  border-radius: 12px;
  margin-right: 10px;
  height: 55px;
`;
export const Flag = styled.Text`
  font-size: 20px;
  margin-right: 5px;
`;
export const CountryCode = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #0F172A;
`;
export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  height: 55px;
  background-color: #F8F9FD;
  border-radius: 12px;
`;

export const PhoneCountryInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  height: 100%;
  color: #0F172A;
`;

export const ClearButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #E2E8F0;
  height: 20px;
  width: 20px;
  border-radius: 100%;
`;

export const ClearText = styled.Image`
  width: 12px;
  height: 12px;
`;

/* Modal Styles */
export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  width: 80%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

export const CountryItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const CountryText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

export const CloseButton = styled.TouchableOpacity`
  margin-top: 20px;
  align-items: center;
`;

export const CloseText = styled.Text`
  font-size: 16px;
  color: #ff0000;
`;
export const BottomButtonWrapper = styled.View`
  bottom: 40px;
  left: 0;
  right: 0;
`

export default function SignUpNumber() {
  const countries = [
    { id: '1', name: "Nigeria", code: "+234", flag: "🇳🇬" },
    { id: '2', name: "United States", code: "+1", flag: "🇺🇸" },
    { id: '3', name: "United Kingdom", code: "+44", flag: "🇬🇧" },
    { id: '4', name: "India", code: "+91", flag: "🇮🇳" },
    { id: '5', name: "Canada", code: "+1", flag: "🇨🇦" },
  ];
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [modalVisible, setModalVisible] = useState(false);

  // Handle country selection
  const selectCountry = (country: any) => {
    setSelectedCountry(country);
    setModalVisible(false);
  };

  return (
    <MainWrap>
      <Container>
        <KeyboardAvoidingViewWrapper 
         behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <BackButton onPress={() => router.back()}>
            <BackButtonIcon source={require('./../../assets/images/back-button.png')} />
        </BackButton>
        <HeaderTxtWrap>
            <HeaderTitle>Almost Done!</HeaderTitle>
            <SubHeaderTitle>Enter your phone number and we’ll text you a code to activate your account.</SubHeaderTitle>
        </HeaderTxtWrap>
        <FormWrap>
        <PhoneInputWrapper>
          {/* Country Picker */}
          <CountryPicker onPress={() => setModalVisible(true)}>
            <Flag>{selectedCountry.flag}</Flag>
            <CountryCode>{selectedCountry.code}</CountryCode>
          </CountryPicker>

          {/* Phone Input */}
          <InputContainer>
            <PhoneCountryInput
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            {phoneNumber.length > 0 && (
              <ClearButton onPress={() => setPhoneNumber("")}>
                <ClearText source={require('./../../assets/images/clear.png')} />
              </ClearButton>
            )}
          </InputContainer>

          {/* Country Modal */}
          <Modal visible={modalVisible} animationType="slide" transparent>
            <ModalContainer>
              <ModalContent>
                <FlatList
                  data={countries}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <CountryItem onPress={() => selectCountry(item)}>
                    <Flag>{item.flag}</Flag>
                    <CountryText>{item.name} ({item.code})</CountryText>
                    </CountryItem>
                  )}
                />
                <CloseButton onPress={() => setModalVisible(false)}>
                  <CloseText>Close</CloseText>
                </CloseButton>
              </ModalContent>
            </ModalContainer>
          </Modal>
        </PhoneInputWrapper>
        </FormWrap>
        <BottomButtonWrapper>
          <StyledButton onPress={() => router.push('/(auth)/verification-code')}>
            <ButtonText>Continue</ButtonText>
          </StyledButton>
        </BottomButtonWrapper>
        </KeyboardAvoidingViewWrapper>
      </Container>
    </MainWrap>
  )
}