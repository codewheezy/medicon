import * as React from "react";
import { TextInput, TextInputProps } from "react-native";
import styled from "styled-components/native";
import { Eye, EyeOff } from "lucide-react-native"; // Ensure you have these icons


const Container = styled.View`
  width: 100%;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;
const InputWrapper = styled.View`
  position: relative;
  width: 100%;
`;
const StyledTextInput = styled.TextInput<{ hasError?: boolean }>`
  height: 55px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  font-family: Aeonik-regular;
  background-color: #F8F9FD;
  color: #0F172A;
  border: ${(props) => (props.hasError ? "1px solid red" : "none")};
`;
const ToggleButton = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 50%;
`;
const ErrorText = styled.Text`
  font-size: 14px;
  font-family: Aeonik-regular;
  color: red;
  margin-top: 5px;
`;

type CustomTextInputProps = TextInputProps & {
  labelFor?: string;
  hasError?: boolean;
  errorMessage?: string;
};

const Input = React.forwardRef<TextInput, CustomTextInputProps>(
  ({ secureTextEntry, hasError, errorMessage, ...props }, ref) => {
    const [isSecureText, setIsSecureText] = React.useState(secureTextEntry);

    const toggleSecureText = () => setIsSecureText(!isSecureText);

    return (
      <Container>
        <InputWrapper>
          <StyledTextInput
            ref={ref}
            placeholderTextColor={"#94A3B8"}
            secureTextEntry={isSecureText}
            hasError={hasError}
            {...props}
          />
          {secureTextEntry && (
            <ToggleButton onPress={toggleSecureText} style={{ transform: [{ translateY: "-50%" }] }}>
              {isSecureText ? <EyeOff color="#94A3B8" /> : <Eye color="#94A3B8" />}
            </ToggleButton>
          )}
        </InputWrapper>

        {hasError && errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </Container>
    );
  }
);

Input.displayName = "Input";

export { Input };
