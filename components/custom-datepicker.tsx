import React, { useState } from "react";
import styled from "styled-components/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const DateContainer = styled.View`
  width: 100%;
  height: 55px;
  padding: 10px;
  border-radius: 8px;
  background-color: #F8F9FD;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
` 
const PlaceholderText = styled.Text`
  font-size: 14px;
  font-family: Aeonik-regular;
  color: #94A3B8;
`
const SelectedDateText = styled.Text`
  font-size: 14px;
  font-family: Aeonik-regular;
  color: #2B2A30;
`;
const DateButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`
const CalendarIconBtn = styled.TouchableOpacity``
const CalendarIcon = styled.Image`
   width: 22px;
   height: 22px;
`

const CustomDatePicker = () => {
    const [date, setDate] = useState<Date | null>(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => setDatePickerVisibility(true);
    const hideDatePicker = () => setDatePickerVisibility(false);

    const handleConfirm = (selectedDate: Date) => {
        setDate(selectedDate);
        hideDatePicker();
    };

    return(
        <>
        <DateContainer>
            <DateButton onPress={showDatePicker}>
                {date ? (
                    <SelectedDateText>
                        {date.toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                        })}
                    </SelectedDateText>
                    ) : (
                    <PlaceholderText>Date of Birth</PlaceholderText>
                )}
            </DateButton>
            <CalendarIconBtn onPress={showDatePicker}>
                <CalendarIcon source={require('./../assets/images/calendar.png')} />
            </CalendarIconBtn>
        </DateContainer>
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
        />
        </>
    )
}

export default CustomDatePicker;