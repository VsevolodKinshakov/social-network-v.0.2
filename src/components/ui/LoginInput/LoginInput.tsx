import React from "react";
import { Input } from "./LoginInput.style";


type LoginProps = {
  type: 'text' | 'tel' | 'password' | 'eMail',
  placeholder: string,
  isDisabled: boolean,
}

export const LoginInput = ({ type, placeholder, isDisabled }: LoginProps) => {
  return (
    <Input 
      type={type} 
      placeholder={placeholder} 
      disabled={isDisabled} 
    />
  )
}
