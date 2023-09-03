import React from "react";
import { Button } from "./AppButton.style";


interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  secondaryButtonText?: string;
}


export const AppButton = ({ buttonText, isPrimary, isSecondary, type, secondaryButtonText }: AppButtonProps) => {
  return (
    <Button
      isPrimary={isPrimary}
      isSecondary={isSecondary}
      type={type}
      className={isPrimary ? "primary" : isSecondary ? "secondary" : ""}
    >
      {buttonText}
    </Button>
  )
}
