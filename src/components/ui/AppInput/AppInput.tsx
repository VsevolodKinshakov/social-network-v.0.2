import React from "react";
import { Input, InputContainer, ErrorMessage } from "./AppInput.style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "tel" | "password" | "eMail";
  placeholder: string;
  isDisabled?: boolean;
  hasError?: boolean;
  errorText?: string;
}

export const AppInput = ({
  type,
  placeholder,
  isDisabled = false,
  hasError = false,
  errorText,
  ...props
}: InputProps) => {
  return (
    <InputContainer>
      {hasError && <ErrorMessage>{errorText}</ErrorMessage>}
      <Input type={type} placeholder={placeholder} disabled={isDisabled} hasError={hasError} {...props} />
    </InputContainer>
  );
};
