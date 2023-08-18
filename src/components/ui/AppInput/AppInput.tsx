import React from "react";
import { Input } from "./AppInput.style";

type InputProps = {
  type: 'text' | 'tel' | 'password',
  placeholder: string,
  isDisabled: boolean,
}

export const AppInput = ({ type, placeholder, isDisabled }: InputProps) => {
  return (
    <Input 
      type={type} 
      placeholder={placeholder} 
      disabled={isDisabled} 
    />
  )
}