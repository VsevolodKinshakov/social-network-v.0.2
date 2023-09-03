import React from "react";
import { AppButton } from "../AppButton/AppButton";
import { BtnsWrapper } from "./ButtonsWrapper.style";

interface ButtonsWrapperProps {
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonIsSecondary?: boolean;
  secondaryButtonIsPrimary?: boolean;
}

const ButtonsWrapper = ({
  primaryButtonText,
  secondaryButtonText,
  primaryButtonIsSecondary,
  secondaryButtonIsPrimary,
}: ButtonsWrapperProps) => {
  return (
    <BtnsWrapper>
      <AppButton
        isSecondary={primaryButtonIsSecondary}
        isPrimary={!primaryButtonIsSecondary}
        buttonText={primaryButtonText}
      />
      <AppButton
        isSecondary={secondaryButtonIsPrimary}
        isPrimary={!secondaryButtonIsPrimary}
        buttonText={secondaryButtonText}
      />
    </BtnsWrapper>
  );
};

export default ButtonsWrapper;
