import React from 'react';
import styled from 'styled-components/native';
import { Modal } from "react-native";


type SuccessModalProps = {
  visible: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText: string;
}

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`
const ModalContent = styled.View`
  width: 80%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
`
const SuccessIcon = styled.Image`
   width: 47.5px;
   height: 47.5px;
   margin-bottom: 10px;
`
const Title = styled.Text`
   font-size: 24px;
   color: #161518;
   margin-bottom: 5px;
`
const Message = styled.Text`
  font-size: 14px;
  color: #82808F;
  text-align: center;
  margin-bottom: 20px;
`
const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 20px;
  background-color: #5FD148;
  border-radius: 10px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-family: Aeonik-bold;
`;


const SuccessModal: React.FC<SuccessModalProps> = ({ visible, onClose, title, message, buttonText }) => {
  return(
    <Modal visible={visible} animationType="fade" transparent>
      <ModalContainer>
        <ModalContent>
          <SuccessIcon source={require('./../assets/images/success.png')} />
          <Title>{title}</Title>
          <Message>{message}</Message>
          <Button onPress={onClose}>
            <ButtonText>{buttonText}</ButtonText>
          </Button>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}

export default SuccessModal;