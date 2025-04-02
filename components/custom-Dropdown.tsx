import React, { useState } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import { ChevronDown } from "lucide-react-native"; 

const DropdownContainer = styled(Animated.View)`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

const DropdownButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const DropdownText = styled.Text`
  font-size: 14px;
  color: #2B2A30;
`;

const DropdownItem = styled.TouchableOpacity`
  padding: 12px 16px;
`;

const DropdownItemText = styled.Text`
  font-size: 14px;
  color: #2B2A30;
  font-family: Aeonik-regular;
`;

const CustomDropdown = ({
  data,
  value,
  setValue,
  placeholder = "Choose an option",
  backgroundColor = "#F8F9FD",
}: {
  data: { label: string; value: string }[];
  value: string;
  placeholder?: string;
  backgroundColor?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const rotation = useState(new Animated.Value(0))[0];
  const heightAnim = useState(new Animated.Value(55))[0];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);

    Animated.timing(rotation, {
      toValue: isOpen ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(heightAnim, {
      toValue: isOpen ? 55 : 200,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleSelect = (item: { label: string; value: string }) => {
    setValue(item.value);
    setIsOpen(false);

    Animated.timing(heightAnim, {
      toValue: 55,
      duration: 200,
      useNativeDriver: false,
    }).start();

    Animated.timing(rotation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
  };

  const interpolatedRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  
  return (
    <DropdownContainer style={{ height: heightAnim , backgroundColor}}>
      <DropdownButton onPress={toggleDropdown}>
        <DropdownText>{value && value.trim() !== "" ? value : placeholder}</DropdownText>
        <Animated.View style={{ transform: [{ rotate: interpolatedRotation }] }}>
          <ChevronDown size={22} color="#B1B0B9" />
        </Animated.View>
      </DropdownButton>

      {isOpen && (
        <>{data.map((item) => (
          <DropdownItem key={item.value} onPress={() => handleSelect(item)}>
            <DropdownItemText>{item.label}</DropdownItemText>
          </DropdownItem>
        ))}</>
      )}
    </DropdownContainer>
  );
};

export default CustomDropdown;
