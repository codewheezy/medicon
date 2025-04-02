import React, { useRef, useState } from "react";
import { FlatList, Dimensions } from "react-native";
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import styled from "styled-components/native";
import { useRouter } from 'expo-router';


export const MainWrap = styled.View`
  flex: 1;
  background-color: #fff;
`
export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
`
const Logo = styled.Image`
  width: 116.44px;
  height: 28.81px;
  margin-top: 5%;
`
const ContentWrap = styled.View`
  width: 395px;
  margin: 22px auto 0px;
  display: flex;
  align-items: flex-start;
`
const Title = styled.Text`
  font-size: 36px;
  font-family: Nohemi-Medium;
  color: #2A2A2A;
  line-height: 45px;
  width: 85%;
`
const ImgTxt = styled.Image`
  width: 134.7px;
  height: 13.9px;
  margin-top: -9px;
`
const AvatarGroup = styled.View<{ leftSpace: boolean }>`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 135px;
  left: ${(props) => (props.leftSpace ? '237px': '155px')};
`
const AvatarContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  margin-left: -10px;
  overflow: hidden;
`
const AvatarImage = styled.Image`
  height: 100%;
  width: 100%;
`
const ImageWrapper = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 8%;
`;
const DoctorImage = styled.Image`
  width: 314.95px;
  height: 198.47px;
`
const BottomWrap = styled.View`
  width: 100%;
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
`
export const StyledButton = styled.TouchableOpacity`
  background-color: #5FD148;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

const StyledButton2 = styled.TouchableOpacity<{ isLastIndex: boolean }>`
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  border: ${(props) => (props.isLastIndex ? '1px solid #DCDBE0': 'none')};
  background-color: ${(props) => (props.isLastIndex ? 'transparent': '#F4F4F4')};
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
  font-family: Aeonik-bold;
`;

const ButtonText2 = styled.Text`
  font-size: 16px;
  color: #161518;
  font-family: Aeonik-bold;
`;

const PaginationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const Dot = styled.View<{ isActive: boolean }>`
  width: ${(props) => (props.isActive ? '25px': '8px')};
  height: 8px;
  border-radius: 4px;
  background-color: ${(props) => (props.isActive ? "#5FD148" : "#D9D9D9")};
  margin: 5px;
`;


export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<FlatList>(null);
  const router = useRouter();
  const { width } = Dimensions.get('window');

  const slides = [
    {
      id: 1,
      title: "Make Online And Live Consultation Easily With Top Doctors",
      image: require("./../assets/images/doctors.png"),
      txtImg: require("./../assets/images/introIcon.png")
    },
    {
      id: 2,
      title: "Thousand of Doctors and Expert to help with your Health needs",
      image: require("./../assets/images/doctors.png"),
      txtImg: require("./../assets/images/introIcon.png")
    },
    {
      id: 3,
      title: "Health check and Consultation easily anywhere and anytime",
      image: require("./../assets/images/doctors.png"),
      txtImg: require("./../assets/images/introIcon.png")
    },
  ];

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      scrollViewRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
    } else {
      router.push('/auth/login');
    }
  };

  const handleSkip = () => {
    if(currentIndex < slides.length - 1) {
      const lastIndex = slides.length - 1;
      scrollViewRef.current?.scrollToIndex({ index: lastIndex, animated: true });
      setCurrentIndex(lastIndex);
    } else {
      router.push('/auth/create-account');
    }
  }

  return(
    <MainWrap>
      <SafeAreaProvider>
      <Container>
        <Logo source={require("./../assets/images/logo-black.png")} />
      <FlatList
        ref={scrollViewRef}
        data={slides}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        contentContainerStyle={{}}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <ContentWrap>
            <Title>{item.title}</Title>
            <ImgTxt source={item.txtImg} />
            <AvatarGroup leftSpace={item.id === 2}>
              <AvatarContainer>
                <AvatarImage source={require('./../assets/images/avatar1.png')} />
              </AvatarContainer>
              <AvatarContainer>
                <AvatarImage source={require('./../assets/images/avatar2.png')} />
              </AvatarContainer>
              <AvatarContainer>
                <AvatarImage source={require('./../assets/images/avatar3.png')} />
              </AvatarContainer>
            </AvatarGroup>
            <ImageWrapper>
              <DoctorImage source={item.image}  
              />
            </ImageWrapper>
          </ContentWrap>
        )}
      />
      <BottomWrap>
        {/* Pagination Dots */}
      <PaginationContainer>
        {slides.map((_, index) => (
          <Dot key={index} isActive={index === currentIndex} />
        ))}
      </PaginationContainer>

      {/* Buttons */}
      <StyledButton onPress={handleNext}>
        <ButtonText>{currentIndex < slides.length - 1 ? "Next" : "Login to your account"}</ButtonText>
      </StyledButton>

      <StyledButton2 onPress={handleSkip} isLastIndex={currentIndex < slides.length - 1}>
          <ButtonText2>{currentIndex < slides.length - 1 ? 'Skip': 'Sign up your account'}</ButtonText2>
      </StyledButton2>
      </BottomWrap>
    </Container>
    </SafeAreaProvider>
    </MainWrap>
  );
}

