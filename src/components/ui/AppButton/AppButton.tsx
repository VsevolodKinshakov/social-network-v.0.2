import React from "react";
import { Button } from "./AppButton.style";


interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
}


export const AppButton = ({ buttonText, isPrimary, isSecondary, type }: AppButtonProps) => {
  return (
    <Button
      isPrimary={isPrimary}
      isSecondary={isSecondary}
      type={type}
    >
      {buttonText}
    </Button>
  )
}
